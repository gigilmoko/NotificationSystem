const HeatAlert = require('../models/heatAlert');
const HeatIndex = require('../models/heat').HeatIndex;

const createHeatAlert = async (heatIndexValue, io) => {
    try {
        const tolerance = 0.01;
        const heatIndex = await HeatIndex.findOne({
            heatIndex: { $gte: heatIndexValue - tolerance, $lte: heatIndexValue + tolerance }
        });

        if (heatIndex) {
            let warning = '';
            let details = '';

            switch (heatIndex.category) {
                case 'Caution':
                    warning = 'Caution';
                    details = 'Fatigue possible with prolonged exposure and/or physical activity';
                    break;
                case 'Extreme Caution':
                    warning = 'Extreme Caution';
                    details = 'Heat stroke, heat cramps, or heat exhaustion possible with prolonged exposure and/or physical activity';
                    break;
                case 'Danger':
                    warning = 'Danger';
                    details = 'Heat cramps or heat exhaustion likely, and heat stroke possible with prolonged exposure and/or physical activity';
                    break;
                case 'Extreme Danger':
                    warning = 'Extreme Danger';
                    details = 'Heat stroke highly likely';
                    break;
                default:
                    return;
            }

            const newHeatAlert = new HeatAlert({
                heatIndex: heatIndex._id,
                warning,
                details,
            });
    
            await newHeatAlert.save();
            io.emit('newHeatAlert', newHeatAlert);

            console.log('Heat Alert saved and sent:', newHeatAlert);
        }
    } catch (error) {
        console.error('Error creating heat alert:', error.message);
        throw new Error('Error creating heat alert');
    }
};

const getAllHeatAlerts = async (req, res, next) => {
    try {
        const heatAlerts = await HeatAlert.find()
            .populate('heatIndex') // Use populate to include the referenced HeatIndex details
            .sort({ timestamp: -1 })
            .exec();

        res.status(200).json({
            success: true,
            heatAlerts,
        });
    } catch (error) {
        console.error('Error fetching heat alerts:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};




module.exports = { createHeatAlert, getAllHeatAlerts };
