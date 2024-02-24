const express = require('express');
const { fetchAndSaveWeatherData, searchWeatherData, getWeather} = require('../controllers/weatherController');
// const { manualInsert } = require('../controllers/testWeather');
const router = express.Router();

// router.get('/fetchAndSaveWeatherData', async (req, res) => {
//     try {
//         const cityName = 'Taguig';
//         const apiKey = 'd6536e139981446b8a734cd33ee9b21e';
//         await fetchAndSaveWeatherData(cityName, apiKey);
//         res.json({ success: true, message: 'Data saved successfully' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false, message: 'Internal server error' });
//     }
// });

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

// router.get('/manualInsert', async (req, res) => {
//     try {
//         await manualInsert();
//         res.json({ success: true, message: 'Test data saved successfully' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false, message: 'Internal server error' });
//     }
// });


module.exports = router;
