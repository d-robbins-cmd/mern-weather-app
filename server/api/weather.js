const WEATHER = require('../models/Weather');
const axios = require("axios");

// Configuring the path to read the environment variable file, .env, to get the weather api key
require('dotenv').config({path: "./../../../.env"});

const baseUrl = "http://api.openweathermap.org/data/2.5/weather";

class Weather {

    // saveWeatherDataToMongo = async (zipCode, data) => {
    //     const filter = {
    //         zip: zipCode
    //     }

    //     const replace = {
    //         ...filter,
    //         ...data,
    //         data: Date.now()
    //     }
    //     await this.findOneReplace(filter, replace);
    // }

    // getWeatherDataFromMongo = async (zipCode) => {
    //     return WEATHER.findOne({zip: zipCode});
    // }

    // async findOneReplace(filter, replace) {
    //     await WEATHER.findOneAndReplace(filter, replace, {new: true, upsert: true});
    // }
}

module.exports = Weather;