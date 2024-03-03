const express = require('express');
const router = express.Router();
const { createHeatAlert, getAllHeatAlerts } = require('../controllers/heatAlertController');


router.post('/createHeatAlert', async (req, res, next) => {
    try {
        await createHeatAlert(req.body.heatIndexValue);
        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error creating heat alert:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});
router.get('/getHeatAlert', getAllHeatAlerts)

module.exports = router;
