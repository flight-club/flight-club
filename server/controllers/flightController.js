module.exports = {
    addToCheckout: (req, res) => {
        console.log(req.body)
        req.session.flight =[]
        req.session.flight.push(req.body)
        console.log(req.session)
        // req.session.total += req.body.amount
        res.status(200).send(req.session.flight)
    },
}