// Chart.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastChart from "./ForecastChart";

const api = {
    key: "d6536e139981446b8a734cd33ee9b21e",
    base: "https://api.openweathermap.org/data/2.5/",
};

function Chart() {
    const [forecast, setForecast] = useState([]);

    useEffect(() => {
    const defaultCity = "Taguig";

    const currentDate = new Date();
    const next5Days = new Date(currentDate);
    next5Days.setDate(next5Days.getDate() + 5);

    const formattedCurrentDate = currentDate.toISOString().split("T")[0];
    const formattedNext5Days = next5Days.toISOString().split("T")[0];

    axios
        .get(`${api.base}forecast?q=${defaultCity}&units=metric&APPID=${api.key}`)
        .then((res) => {
            const next5DaysData = res.data.list.filter(
            (data) => data.dt_txt.split(" ")[0] > formattedCurrentDate && data.dt_txt.split(" ")[0] <= formattedNext5Days
            );
            setForecast(next5DaysData);
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

    return (
        <div className="App">
        <header className="App-header">
            <h1>Weather App</h1>

            {Object.keys(groupedData).map((date) => (
            <ForecastChart key={date} data={groupedData[date]} date={date} />
            ))}
        </header>
        </div>
    );
}

export default Chart;
