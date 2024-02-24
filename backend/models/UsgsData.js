const mongoose = require('mongoose');

const UsgsDataSchema = new mongoose.Schema({
    mag: Number,
    place: String,
    time: Date,
    alert: String,
    status: String,
    coordinates: {
        type: {
            type: String,
            enum: ['Point'],
            required: true,
        },
        coordinates: {
            type: [Number],
            required: true,
        },
    },
});

const UsgsData = mongoose.model('UsgsData', UsgsDataSchema);

module.exports = UsgsData;
