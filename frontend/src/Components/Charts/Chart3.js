import React, { useState, useEffect } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const api = {
    key: "d6536e139981446b8a734cd33ee9b21e",
    base: "https://api.openweathermap.org/data/2.5/",
};

function Chart3() {
    const [forecast, setForecast] = useState([]);

    useEffect(() => {
        const defaultCity = "Taguig";

        const currentDate = new Date();
        const afterThreeDays = new Date(currentDate);
        afterThreeDays.setDate(afterThreeDays.getDate() + 3);

        const formattedCurrentDate = currentDate.toISOString().split("T")[0];
        const formattedAfterThreeDays = afterThreeDays.toISOString().split("T")[0];

        axios
            .get(`${api.base}forecast?q=${defaultCity}&units=metric&APPID=${api.key}`)
            .then((res) => {
                const afterThreeDaysData = res.data.list.filter(
                    (data) => data.dt_txt.split(" ")[0] === formattedAfterThreeDays
                );
                setForecast(afterThreeDaysData);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    // Group the data by day and time
    const groupedData = forecast.reduce((acc, data) => {
        const dateTime = data.dt_txt.split(" ");
        const date = dateTime[0];
        const time = dateTime[1].slice(0, 5); // Extract hours and minutes
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push({ ...data, time });
        return acc;
    }, {});

    // Custom tick formatter for XAxis
    const formatXAxis = (tickItem) => {
        return tickItem;
    };

    return (
        <div className="App">
            <header className="App-header">
                {Object.keys(groupedData).map((date) => (
                    <div key={date}>
                        <h2>{`${date}`}</h2>
                        <ResponsiveContainer width="100%" height={250}>
                            <LineChart data={groupedData[date]}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="time" tickFormatter={formatXAxis} />
                                <YAxis yAxisId="left" label={{ value: 'Temperature (°C)', angle: -90, position: 'insideCenterLeft' }} />
                                <YAxis yAxisId="right" orientation="right" label={{ value: 'Humidity (%)', angle: -90, position: 'insideCenterRight' }} />
                                <YAxis yAxisId="left" orientation="left" label={{ value: 'Wind Speed (m/s)', angle: -90, position: 'insideLeft' }} />
                                <YAxis yAxisId="right" orientation="right" label={{ value: 'Precipitation (%)', angle: -90, position: 'insideRight' }} />
                                <Tooltip />
                                <Legend />
                                <Line yAxisId="left" type="monotone" dataKey="main.temp" stroke="#8884d8" name="Temperature" />
                                <Line yAxisId="right" type="monotone" dataKey="main.humidity" stroke="#82ca9d" name="Humidity" />
                                <Line yAxisId="left" type="monotone" dataKey="wind.speed" stroke="#ff7300" name="Wind Speed" />
                                <Line yAxisId="right" type="monotone" dataKey="pop" stroke="#ffc658" name="Precipitation" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                ))}
            </header>
        </div>
    );
}

export default Chart3;
