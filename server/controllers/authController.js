const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const {first_name, last_name, gender, birthdate, address, address2, city, state, zip, phone, email, username, password} = req.body
        const db = req.app.get('db')
        console.log(req.body)

        const foundMember = await db.findMember(username)
        if(foundMember[0]) {
            console.log('hit')
            return res.status(403).json({error: 'Username taken!'})
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const regMember = await db.addMember(first_name, last_name, gender, birthdate, address, address2, city, state, zip, phone, email, username, hash)

        if(regMember[0]){
            console.log('hit')
            return res.status(200).json(regMember[0])
        }
    },

    login: async (req, res) => {
        console.log('hit')
        const {username, password} = req.body
        console.log(password)
        const db = req.app.get('db')

        const member = await db.findMember(username)
        console.log(member)
        if(member.length === 0) {
            console.log('hit')
            res.status(404).json({error: 'Username does not exist'});
        } else {
            const hash = await bcrypt.compare(password, member[0].hash)
            if(!hash){
                console.log('hit')
                res.status(403).json({error: 'Username or Password  is incorrect'})
            } else {
                console.log('hit')
                req.session.member = {
                    username: member[0].username,
                    id: member[0].id,
                    flight: []
                }
                res.status(200).json(req.session.member)
            }
        }
    },

    getMember: async (req, res) => {
        const db = req.app.get('db')
        let id = req.params.id
        console.log(req.params.id)

        const member = await db.getMember(id)
        return res.status(200).json(member)
    },

    getDashboard: async (req, res) =>{
        const db = req.app.get('db')
        let id = req.params.id
        if(req.session.member){
            const member = await db.dashboard(req.session.member.id)
            return res.status(200).json(member)
        } else {
            const member = await db.dashboard(id)
            return res.status(200).json(member)
        }
    },
      
    logout: (req, res) => {
        req.session.destroy()
        res.status(200).send(req.session)
    }
}