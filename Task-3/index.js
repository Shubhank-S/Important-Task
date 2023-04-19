const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config();
const TodoRoutes = require('./routes/TodoRoutes')

const app = express();

// using express.json() to get data into json format 

app.use(express.json())

// PORT

const PORT = process.env.PORT || 8080;

// importing Routes 

app.use('/', TodoRoutes)
// MongoDB Connection

mongoose.connect(process.env.DB_CONNECT).then(() => {
    console.log("Database connected")
}).catch(err => console.log(err))

// connecting to server

app.listen(PORT, () => {
    console.log(`connected to Port ${PORT}`)
})