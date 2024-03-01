const mongoose = require('mongoose');

const heatAlertSchema = new mongoose.Schema({
    heatIndex: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "HeatIndex",
        required: true
    },
    warning: {
        type: String,
        required: true,
    },
    details:{
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

const HeatAlert = mongoose.model('HeatAlert', heatAlertSchema);

module.exports = HeatAlert;