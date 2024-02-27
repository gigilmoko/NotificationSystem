
const express = require('express');
const router = express.Router();
const { startCronJobs, getEarthquakes } = require('../controllers/usgsController');

router.get('/getEarthquakes', getEarthquakes);

module.exports = router;