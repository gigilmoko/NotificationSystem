const mongoose = require('mongoose');

const weatherDataSchema = new mongoose.Schema({
    city: String,
    temperature: Number,
    humidity: Number,
    weatherDescription: String,
    rain1h: Number,
    windSpeed: Number,
    windDirection: Number,
    visibility: Number,
    pressure: Number,
    cloudiness: Number,
    tempMin: Number,
    tempMax: Number,
    sunrise: String,
    sunset: String,
    timestamp: { type: Date, default: Date.now },
});

const WeatherData = mongoose.model('WeatherData', weatherDataSchema);

module.exports = WeatherData;
