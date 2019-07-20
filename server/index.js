require ('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');

const app = express() 

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
const dataController = require('./controllers/dataController');
const {addToCheckout} = require('./controllers/flightController');
const {register, login, logout, getMember, getDashboard} = require('./controllers/authController');

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
app.get('/dashboard/:id', getDashboard)
app.post('/test', req => console.log(req))

// Sabre API
app.get('/results', dataController.getResults)

// Flight
app.post('/api/checkout', addToCheckout)

 
app.listen(SERVER_PORT, () => {
    console.log(`The server is listening on Port ${SERVER_PORT}`)
})