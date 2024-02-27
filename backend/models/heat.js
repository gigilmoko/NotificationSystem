
const mongoose = require('mongoose');

const heatIndexSchema = new mongoose.Schema({
    heatIndex: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

const HeatIndex = mongoose.model('HeatIndex', heatIndexSchema);

module.exports = { HeatIndex };