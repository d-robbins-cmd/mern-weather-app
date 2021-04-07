require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

// use body parser to get data from POST requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use API routes from the api folder
const apis = require("./api");
app.use("/api", apis);



    // Serve any static files
    app.use(express.static(path.join(__dirname, '../client/build')));

    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });


// Connect to Mongo
mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err));

app.listen(port, () => console.log(`Listening on port ${port}`));