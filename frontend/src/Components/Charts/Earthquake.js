import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const EarthquakeChart = () => {
    const [earthquakeData, setEarthquakeData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API}/api/getEarthquakes`);
            const result = await response.json();

            if (result.success && result.earthquakes.length > 0) {
            const formattedData = result.earthquakes.map((event) => ({
                time: new Date(event.time).toLocaleString(),
                mag: event.mag,
                place: event.place,
                coordinates: [
                event.coordinates.coordinates[0], // Longitude
                event.coordinates.coordinates[1], // Latitude
                ],
                // Add more fields as needed
            }));

            setEarthquakeData(formattedData);
            } else {
            console.error('Invalid response from API:', result);
            }
        } catch (error) {
            console.error('Error fetching earthquake data:', error);
        }
        };

        fetchData();
    }, []);

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
        const eventDetails = payload[0].payload;

        return (
            <div style={{ background: 'black', border: '1px solid #ccc', padding: '10px' }}>
            {Object.entries(eventDetails).map(([key, value]) => (
                <p key={key}>{`${key}: ${value}`}</p>
            ))}
            </div>
        );
        }

        return null;
    };

    return (
        <ResponsiveContainer width="100%" height={400}>
        <LineChart data={earthquakeData}>
            <CartesianGrid strokeDasharray="3 4" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line
            type="monotone"
            dataKey="mag"
            name="Magnitude"
            stroke="rgba(255, 99, 132, 1)"
            strokeWidth={2}
            />
            {/* Add more lines for additional data */}
        </LineChart>
        </ResponsiveContainer>
    );
};

export default EarthquakeChart;
