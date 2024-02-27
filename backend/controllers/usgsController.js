
const axios = require('axios');
const UsgsData = require('../models/UsgsData')
const cron = require('node-cron');

const TAGUIG_CITY_COORDINATES = {
    latitude: 14.5329,
    longitude: 121.0217,
};

const TAGUIG_AFFECTED_RADIUS = 50;

const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
};

const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
};

const isTaguigAffected = (event) => {
    // Check if event and its geometry are defined
    if (event && event.geometry && event.geometry.coordinates) {
        const distance = calculateDistance(
            TAGUIG_CITY_COORDINATES.latitude,
            TAGUIG_CITY_COORDINATES.longitude,
            event.geometry.coordinates[1],
            event.geometry.coordinates[0]
        );
        return distance <= TAGUIG_AFFECTED_RADIUS;
    } else {
        // Log a warning or handle the case where the event structure is not as expected
        console.warn('Invalid event structure:', event);
        return false; // You may choose to return true or false based on your logic
    }
};

const fetchAndSaveData = async () => {
    try {
        console.log('Fetching data from API...');
        const startDate = '2024-02-01';
        const endDate = new Date().toISOString().split('T')[0];
        const apiUrl = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${startDate}&endtime=${endDate}&minlatitude=4.5&maxlatitude=21.5&minlongitude=116&maxlongitude=127`;

        const response = await axios.get(apiUrl);
        const eventData = response.data.features;

        const mappedData = eventData
            .filter(event => event.geometry.coordinates[1] >= 4.5 && event.geometry.coordinates[1] <= 21.5 && event.geometry.coordinates[0] >= 116 && event.geometry.coordinates[0] <= 127)
            .map(event => ({
                mag: event.properties.mag || 0,
                place: event.properties.place || 'Unknown Location',
                time: new Date(event.properties.time),
                status: event.properties.status || 'Unknown Status',
                coordinates: {
                    type: 'Point',
                    coordinates: [
                        event.geometry.coordinates[0],
                        event.geometry.coordinates[1],
                    ],
                },
            }));

        const existingEvents = await UsgsData.find({
            $or: mappedData.map((event) => ({
                mag: event.mag,
                place: event.place,
                time: event.time,
                status: event.status,
            })),
        });

        const newEvents = mappedData.filter((event) => !existingEvents.some((existingEvent) =>
            existingEvent.mag === event.mag &&
            existingEvent.place === event.place &&
            existingEvent.time.getTime() === event.time.getTime() &&
            existingEvent.status === event.status
        ));

        if (newEvents.length > 0) {
            // Check if Taguig City is affected
            const eventsInTaguig = newEvents.filter((event) => isTaguigAffected(event));

            if (eventsInTaguig.length > 0) {
                console.warn('Warning: Earthquake(s) affecting Taguig City detected!', eventsInTaguig);
                // You may want to send alerts or notifications here
            }

            await UsgsData.insertMany(newEvents);
            console.log('Earthquake data fetched and saved successfully');
        } else {
            console.log('No new earthquake data to save');
        }
    } catch (error) {
        console.error('Error fetching and saving earthquake data:', error);
    }
};

const startCronJobsEarthquake = () => {
    cron.schedule('*/20 * * * *', async () => {
        await fetchAndSaveData();
    });
};

const getEarthquakes = async (req, res, next) => {
    try {
        const earthquakes = await UsgsData.find();
        if (!earthquakes) {
            return res.status(404).json({
                success: false,
                message: 'Earthquake not found'
            });
        }

        // Format the time field to string (you can adjust the format as needed)
        const formattedEarthquakes = earthquakes.map((quake) => ({
            ...quake._doc,
            time: quake.time.toISOString(), // Convert the time to string
        }));

        res.status(200).json({
            success: true,
            earthquakes: formattedEarthquakes,
        });
    } catch (error) {
        console.error('Error fetching earthquake data:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

module.exports = { fetchAndSaveData, getEarthquakes, startCronJobsEarthquake };