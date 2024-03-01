const express = require('express');
const router = express.Router();
const { createHeatAlert, getAllHeatAlerts } = require('../controllers/heatAlertController');


router.post('/createHeatAlert', createHeatAlert);
router.get('/getHeatAlert', getAllHeatAlerts)

module.exports = router;
