import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const HourlyHeatIndex = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API}/api/getHourlyAverageHeatIndex`);
                const result = await response.json();
                if (result.success && result.data.labels && result.data.data && result.data.categories) {
                    const formattedData = result.data.labels.map((label, index) => ({
                        hour: label,
                        total: result.data.data[index],
                        category: result.data.categories[index],
                    }));

                    setData(formattedData);
                } else {
                    console.error('Invalid response from API:', result);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
                <XAxis dataKey="hour" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 4" />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="total"
                    name="Average Heat Index"
                    stroke="rgba(255, 99, 132, 1)"
                    strokeWidth={2}
                />
                <Line
                    type="monotone"
                    dataKey="category"
                    name="Category"
                    stroke="rgba(0, 128, 255, 1)"
                    strokeWidth={2}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default HourlyHeatIndex;
