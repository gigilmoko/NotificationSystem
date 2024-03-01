const express = require('express');
const cookie = require('cookie-parser');
const cors = require('cors');
const cloudinary = require('cloudinary');
require('dotenv').config({ path: '../config/config.env' });
const http = require('http');
const mongoose = require('mongoose');
const cron = require('node-cron');
const { Server } = require('socket.io');

const usgsRoutes = require('./routes/usgs');
const weatherRoutes = require('./routes/weatherRoutes');
const auth = require('./routes/auth');
const heatAlertRoutes = require('./routes/heatAlert');
const { startCronJobsWeather } = require('./controllers/weatherController');
const { startCronJobsEarthquake } = require('./controllers/usgsController');

const app = express();
const PORT = process.env.PORT || 4001;
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:4001",
        methods: ["GET", "POST"]
    }
});

const connectedUsers = new Map();

io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on('authenticate', (userId) => {
        connectedUsers.set(userId, socket.id);
        console.log(`User authenticated: ${userId}`);
    });

    socket.on('disconnect', () => {
        connectedUsers.forEach((value, key) => {
            if (value === socket.id) {
                connectedUsers.delete(key);
                console.log(`User disconnected: ${key}`);
            }
        });
    });
});

app.use(cors());
app.use(express.json());
app.use(cookie());

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

app.use('/api', usgsRoutes);
app.use('/api', weatherRoutes);
app.use('/api', auth);
app.use('/api', heatAlertRoutes);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
    startCronJobsEarthquake();
    startCronJobsWeather();

    server.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});
