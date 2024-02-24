const axios = require('axios');
const WeatherData = require('../models/weather');
const cron = require('node-cron');

async function fetchAndSaveWeatherData(cityName, apiKey) {
    try {
        const apiKey = process.env.OPENWEATHERMAP_API_KEY;
        const apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
        const response = await axios.get(apiURL);
        const weatherData = response.data;
        const temperatureCelsius = (weatherData.main.temp - 273.15).toFixed(2);
        const humidity = weatherData.main.humidity.toFixed(2);
        const sunriseTime = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-US', { timeZone: 'Asia/Manila' });
        const sunsetTime = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-US', { timeZone: 'Asia/Manila' });
        const windSpeedKmph = (weatherData.wind.speed * 3.6).toFixed(2);

        // Add console logs for debugging
        console.log('Temperature (Celsius):', temperatureCelsius);
        console.log('Humidity:', humidity);

        const heatIndex = calculateHeatIndex(parseFloat(temperatureCelsius), parseFloat(humidity));
        console.log('Heat Index:', heatIndex);

        // Check conditions for tropical cyclone signals
        const cycloneSignalCategory = checkTropicalCycloneSignal(weatherData);
        console.log('Tropical Cyclone Signal Category:', cycloneSignalCategory);

        // Check conditions for heat index
        const heatIndexCategory = checkHeatIndex(heatIndex);
        console.log('Heat Index Category:', heatIndexCategory);

        const newWeatherData = new WeatherData({
            city: weatherData.name,
            temperature: parseFloat(temperatureCelsius),
            humidity: parseFloat(humidity),
            weatherDescription: weatherData.weather[0].description,
            rain1h: weatherData.rain ? weatherData.rain['1h'] : 0,
            windSpeed: parseFloat(windSpeedKmph),
            windDirection: weatherData.wind.deg,
            visibility: weatherData.visibility,
            pressure: weatherData.main.pressure,
            cloudiness: weatherData.clouds.all,
            tempMin: (weatherData.main.temp_min - 273.15).toFixed(2),
            tempMax: (weatherData.main.temp_max - 273.15).toFixed(2),
            sunrise: sunriseTime,
            sunset: sunsetTime,
            heatIndex: heatIndex.toFixed(2),
        });

        // Save the new weather data
        await newWeatherData.save();

    } catch (error) {
        console.error('Error fetching and saving weather data:', error.message);
        throw new Error('Error fetching and saving weather data');
    }
}

async function searchWeatherData(cityName) {
    try {
        const data = await WeatherData.find({ city: new RegExp(cityName, 'i') }).sort({ timestamp: -1 }).exec();
        return data;
    } catch (error) {
        console.error('Error searching weather data:', error.message);
        throw new Error('Error searching weather data');
    }
}

function calculateHeatIndex(temperatureCelsius, humidity) {
    const temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;

    const heatIndexFahrenheit = -42.379 +
        2.04901523 * temperatureFahrenheit +
        10.14333127 * humidity -
        0.22475541 * temperatureFahrenheit * humidity -
        6.83783e-03 * temperatureFahrenheit * temperatureFahrenheit -
        5.481717e-02 * humidity * humidity +
        1.22874e-03 * temperatureFahrenheit * temperatureFahrenheit * humidity +
        8.5282e-04 * temperatureFahrenheit * humidity * humidity -
        1.99e-06 * temperatureFahrenheit * temperatureFahrenheit * humidity * humidity;

    const heatIndexCelsius = (heatIndexFahrenheit - 32) * 5/9;

    return heatIndexCelsius;
}

function checkTropicalCycloneSignal(weatherData) {
    if (weatherData.windSpeed >= 39 && weatherData.windSpeed <= 61) {
        return 'Tropical Cyclone Wind Signal #1';
    } else if (weatherData.windSpeed >= 62 && weatherData.windSpeed <= 88) {
        return 'Tropical Cyclone Wind Signal #2';
    } else if (weatherData.windSpeed >= 89 && weatherData.windSpeed <= 117) {
        return 'Tropical Cyclone Wind Signal #3';
    } else if (weatherData.windSpeed >= 118 && weatherData.windSpeed <= 184) {
        return 'Tropical Cyclone Wind Signal #4';
    } else if (weatherData.windSpeed >= 185) {
        return 'Tropical Cyclone Wind Signal #5';
    } else {
        return 'Normal Weather Today';
    }
}

function checkHeatIndex(heatIndex) {
    const heatIndexNumber = parseFloat(heatIndex);

    if (!isNaN(heatIndexNumber)) {
        if (heatIndexNumber >= 27 && heatIndexNumber < 32) {
            return 'Caution';
        } else if (heatIndexNumber >= 32 && heatIndexNumber < 39) {
            return 'Extreme Caution';
        } else if (heatIndexNumber >= 39 && heatIndexNumber < 51) {
            return 'Danger';
        } else if (heatIndexNumber >= 51) {
            return 'Extreme Danger';
        } else {
            return 'Normal Heat Index Today';
        }
    } else {
        console.error('Invalid heatIndex value:', heatIndex);
        throw new Error('Error fetching and saving weather data');
    }
}

const startCronJobsWeather = () => {
    cron.schedule('* * * * *', async () => {
        const weatherCityName = 'Taguig';
        const weatherApiKey = 'd6536e139981446b8a734cd33ee9b21e';
        await fetchAndSaveWeatherData(weatherCityName, weatherApiKey);
    });
};

const getWeather = async (req, res, next) => {
    try {
        const weathers = await WeatherData.find();
        if (!weathers) {
            return res.status(404).json({
                success: false,
                message: 'Earthquake not found'
            });
        }
        res.status(200).json({
            success: true,
            weathers
        });
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};



module.exports = { fetchAndSaveWeatherData, searchWeatherData, calculateHeatIndex, checkTropicalCycloneSignal, checkHeatIndex, startCronJobsWeather, getWeather};
