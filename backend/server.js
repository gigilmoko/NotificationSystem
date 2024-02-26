const express = require('express');
const cookie = require('cookie-parser')
const cors = require('cors')
const cloudinary = require('cloudinary');
require('dotenv').config({ path: '../config/config.env' });


const mongoose = require('mongoose');
const usgsRoutes = require('./routes/usgs');
const weatherRoutes = require('./routes/weatherRoutes');
const auth = require('./routes/auth')
const { startCronJobsWeather } = require('./controllers/weatherController');
const { startCronJobsEarthquake } = require('./controllers/usgsController');


const app = express();
const PORT = process.env.PORT || 4001;


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
    });
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB!");
    })
    .catch((err) => {
        console.log(err);
    });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {

    startCronJobsEarthquake();
    startCronJobsWeather();
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });

    app.use(cors());
    app.use(express.json());
    app.use(cookie());
    
    app.use('/api', usgsRoutes);
    app.use('/api', weatherRoutes);
    app.use('/api', auth);
    
});
