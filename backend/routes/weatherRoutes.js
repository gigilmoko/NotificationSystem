const express = require('express');
const {  searchWeatherData, getWeather, getWeeklyAverageHeatIndex, getHourlyAverageHeatIndex} = require('../controllers/weatherController');
const router = express.Router();

router.get('/searchWeatherData/:cityName', async (req, res) => {
    try {
        const cityName = req.params.cityName;
        const data = await searchWeatherData(cityName);
        res.json({ success: true, data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});
router.get('/getWeather', getWeather);
router.get('/getWeeklyAverageHeatIndex', getWeeklyAverageHeatIndex)
router.get('/getHourlyAverageHeatIndex', getHourlyAverageHeatIndex)


module.exports = router;
