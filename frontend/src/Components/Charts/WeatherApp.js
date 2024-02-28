import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
} from "mdb-react-ui-kit";

const api = {
    key: "d6536e139981446b8a734cd33ee9b21e",
    base: "https://api.openweathermap.org/data/2.5/",
};

function WeatherApp() {
    const [currentWeather, setCurrentWeather] = useState({});
    const [next5HoursForecast, setNext5HoursForecast] = useState([]);
    const [temperatureRange, setTemperatureRange] = useState([]);
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        const defaultCity = "Taguig";
        const currentDate = new Date();
        const philippineTimezone = "Asia/Manila";
        const currentDateFormatted = currentDate.toLocaleDateString("en-US", {
            timeZone: philippineTimezone,
        });
        setCurrentDate(currentDateFormatted);

        axios
        .get(`${api.base}weather?q=${defaultCity}&units=metric&APPID=${api.key}`)
        .then((res) => {
            console.log("Current Weather API Response:", res.data);
            setCurrentWeather({
            temp: res.data.main.temp,
            humidity: res.data.main.humidity,
            windSpeed: res.data.wind.speed,
            precipitation: res.data.rain ? res.data.rain["1h"] : 0,
            });
        })
        .catch((error) => {
            console.error("Error fetching current weather data:", error);
        });

        axios
        .get(`${api.base}forecast?q=${defaultCity}&units=metric&APPID=${api.key}`)
        .then((res) => {
            console.log("Forecast API Response:", res.data);
            const next5HoursData = res.data.list
            .slice(0, 5)
            .map((data) => ({
                time: new Date(data.dt * 1000).toLocaleTimeString("en-US", {
                timeZone: philippineTimezone,
                hour: "numeric",
                minute: "numeric",
                }),
                temp: data.main.temp,
                icon: data.weather[0].icon,
            }));
            setNext5HoursForecast(next5HoursData);

            const temperatureRangeData = res.data.list.reduce((acc, data) => {
            const date = new Date(data.dt * 1000).toLocaleDateString("en-US", {
                timeZone: philippineTimezone,
            });
            if (!acc[date]) {
                acc[date] = [];
            }
            acc[date].push(data.main.temp);
            return acc;
            }, {});
            const rangeData = Object.entries(temperatureRangeData).map(([date, temps]) => ({
            date,
            minTemp: Math.min(...temps),
            maxTemp: Math.max(...temps),
            icon: res.data.list[0].weather[0].icon, // Assuming there is an 'icon' property in your data
            }));
            setTemperatureRange(rangeData.slice(1)); // Exclude the current date
        })
        .catch((error) => {
            console.error("Error fetching forecast data:", error);
        });
    }, [currentDate]);

    return (
        <div className="App">
        <header className="App-header">
            <h1 style={{ color: "White" }}>Weather App</h1>
            {currentWeather.temp && (
            <MDBCard
                className="mb-4 gradient-custom"
                style={{ borderRadius: "25px", background: "rgba(255, 255, 255, 0.3)" }}
            >
                <MDBCardBody className="p-4">
                <div className="d-flex justify-content-between pb-2">
                    <MDBCol className="text-center">
                    <h1 className="display-3" style={{ color: "White" }}>
                        <strong>{currentWeather.temp}°C</strong>
                    </h1>
                    <h1 style={{ color: "White" }} className="text-muted mb-0">
                        Taguig City
                    </h1>
                    <h2 style={{ color: "White" }}>{currentDate}</h2>
                    </MDBCol>
                </div>
                <div className="text-center mt-4">
                    <p className="medium">
                    <strong>Humidity: {currentWeather.humidity}%</strong>
                    </p>
                    <p className="medium">
                    <strong>Wind Speed: {currentWeather.windSpeed} m/s</strong>
                    </p>
                    <p className="medium">
                    <strong>
                        Precipitation: {currentWeather.precipitation} mm/h
                    </strong>
                    </p>
                </div>
                </MDBCardBody>
            </MDBCard>
            )}

            {/* Next 5 Hours Forecast Card */}
            {next5HoursForecast.length > 0 && (
            <MDBCard
                className="mb-4"
                style={{ borderRadius: "25px", background: "rgba(255, 255, 255, 0.3)" }}
            >
                <MDBCardBody className="p-10">
                <MDBRow className="justify-content-center align-items-center">
                    {next5HoursForecast.map((item) => (
                    <MDBCol key={item.time} className="text-center">
                        <p className="medium">
                        <strong>{item.temp}°C</strong>
                        </p>
                        <MDBIcon
                        fas
                        icon={item.icon}
                        size="2x"
                        className="mb-4"
                        style={{ color: "#ddd" }}
                        />
                        <p className="mb-0">
                        <strong>{item.time}</strong>
                        </p>
                    </MDBCol>
                    ))}
                </MDBRow>
                </MDBCardBody>
            </MDBCard>
            )}

            {/* Temperature Range for Next 5 Days Card */}
            {temperatureRange.length > 0 && (
            <MDBCard
                className="mb-4 gradient-custom"
                style={{ borderRadius: "25px", background: "rgba(255, 255, 255, 0.3)" }}
            >
                <MDBCardBody className="p-4">
                <MDBRow className="justify-content-center">
                    {temperatureRange.map((data) => (
                    <MDBCol key={data.date} className="text-center mb-4">
                        <p className="medium">
                        <strong>{`${data.minTemp.toFixed(2)}°C - ${data.maxTemp.toFixed(2)}°C`}</strong>
                        </p>
                        <MDBIcon
                        fas
                        icon={data.icon} // Assuming there is an 'icon' property in your data
                        size="2x"
                        className="mb-2"
                        style={{ color: "#ddd" }}
                        />
                        <p className="mb-0">
                        <strong>{data.date}</strong>
                        </p>
                    </MDBCol>
                    ))}
                </MDBRow>
                </MDBCardBody>
            </MDBCard>
            )}
        </header>
        </div>
    );
}

export default WeatherApp;