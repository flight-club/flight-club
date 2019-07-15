require ('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');

const app = express() 

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
const dataController = require('./controllers/dataController');
const flightController = require('./controllers/flightController');
const authController = require('./controllers/authController');

app.use( express.static( `${__dirname}/../build` ) )

app.use(express.json())

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

massive(CONNECTION_STRING)
    .then(db => {
        console.log('Database Connected')
        app.set('db', db)
    }).catch(err => {
        console.log(err)
    })

app.listen(SERVER_PORT, () => {
    console.log(`The server is listening on Port ${SERVER_PORT}`)
})