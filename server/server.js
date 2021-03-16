require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000
const mongoose = require('mongoose')

//TODO don't need body parser now?  part of express?
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apis = require( './api' )
app.use( '/api', apis )

mongoose.connect(process.env.DB, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('mongo connected...')).catch(err => console.log(err))

app.listen( port, () => console.log(`listening on port ${ port }`))