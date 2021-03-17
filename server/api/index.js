// Use express's router to route all our API endpoints
const express = require('express');
const router = express.Router();

const Weather = require("./weather");


router.get("/weather",  async (req, res) => {
    let weather = new Weather();
    let weatherData = await weather.getWeatherData(98052, "us");
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(weatherData, null, 4));
});


router.post("/weather",  async (req, res) => {
    const {zipCode, tempMetric} = req.body;
    let weather = new Weather();
    let weatherData = await weather.getWeatherData(zipCode, tempMetric);
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(weatherData, null, 4));
});




// POST Request - get the weather data from the api, save it to mongo, then return the data back
router.post("/weatherMongo", async(req, res) => {
    const {zipCode, tempMetric} = req.body;
    let weather = new Weather();
    let weatherData = await weather.getWeatherData(zipCode, tempMetric);

    await weather.saveWeatherDataToMongo(zipCode, weatherData);
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(weatherData, null, 4));
})

// GET Request - get the weather data saved from Mongo
router.get("/weatherMongo", async(req, res) => {
    const {zipCode} = req.query;
    let weather = new Weather();

    let weatherData = await weather.getWeatherDataFromMongo(zipCode);
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(weatherData, null, 4));
})

module.exports = router;