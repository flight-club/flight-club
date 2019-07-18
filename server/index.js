require ('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');

const app = express() 

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
const dataController = require('./controllers/dataController');
const flightController = require('./controllers/flightController');
const {register, login, logout, getMember} = require('./controllers/authController');

// app.use( express.static( `${__dirname}/../build` ) )

app.use(express.json())

massive(CONNECTION_STRING)
    .then(db => {
        console.log('Database Connected')
        app.set('db', db)
    }).catch(err => {
        console.log(err)
    })

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

// Authentication
app.post('/register', register)
app.post('/login', login)
app.post('/logout', logout)
app.get('/member/:id', getMember)
app.post('/test', req => console.log(req))

app.get('/results', dataController.getResults)
 
app.listen(SERVER_PORT, () => {
    console.log(`The server is listening on Port ${SERVER_PORT}`)
})