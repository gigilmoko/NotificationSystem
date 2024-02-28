import '../../assets/css/weather.css'
import React, { useState, useEffect } from "react";
import axios from "axios";

const api = {
    key: "d6536e139981446b8a734cd33ee9b21e",
    base: "https://api.openweathermap.org/data/2.5/",
};


const WeatherUi = () => {

    const [currentWeather, setCurrentWeather] = useState({});
    const [next5HoursForecast, setNext5HoursForecast] = useState([]);
    const [temperatureRange, setTemperatureRange] = useState([]);

    useEffect(() => {
        const defaultCity = "Taguig";

        // Convert current time to Philippine time
        const currentDate = new Date();
        const philippineTimezone = "Asia/Manila";

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
    }, []);
  return (
    <div><section className="vh-100" style={{ backgroundColor: "#C1CFEA" }}>
    <div className="container py-5 h-100">
      <div
        className="row d-flex justify-content-center align-items-center h-100"
        style={{ color: "#282828" }}
      >
        <div className="col-md-9 col-lg-7 col-xl-5">
          <div className="card mb-4 gradient-custom" style={{ borderRadius: 25 }}>
            <div className="card-body p-4">
              <div id="demo1" className="carousel slide" data-ride="carousel">
                {/* Indicators */}
                <ul className="carousel-indicators mb-0">
                  <li data-target="#demo1" data-slide-to={0} className="active" />
                  <li data-target="#demo1" data-slide-to={1} />
                  <li data-target="#demo1" data-slide-to={2} />
                </ul>
                {/* Carousel inner */}
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="d-flex justify-content-between mb-4 pb-2">
                      <div>
                        <h2 className="display-2">
                          <strong style = {{color: 'black'}}>23°C</strong>
                        </h2>
                        <p className="text-muted mb-0">Taguig, Philippines</p>
                      </div>
                      <div>
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu3.webp"
                          width="150px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-4" style={{ borderRadius: 25 }}>
            <div className="card-body p-4">
              <div id="demo2" className="carousel slide" data-ride="carousel">
                {/* Indicators */}
                <ul className="carousel-indicators mb-0">
                  <li data-target="#demo2" data-slide-to={0} />
                  <li data-target="#demo2" data-slide-to={1} className="active" />
                  <li data-target="#demo2" data-slide-to={2} />
                </ul>
                {/* Carousel inner */}
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
                      <div className="flex-column">
                        <p className="small">
                          <strong>21°C</strong>
                        </p>
                        <i
                          className="fas fa-sun fa-2x mb-3"
                          style={{ color: "#ddd" }}
                        />
                        <p className="mb-0">
                          <strong>12:00</strong>
                        </p>
                        <p
                          className="mb-0 text-muted"
                          style={{ fontSize: ".65rem" }}
                        >
                          PM
                        </p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          <strong>2°C</strong>
                        </p>
                        <i
                          className="fas fa-sun fa-2x mb-3"
                          style={{ color: "#ddd" }}
                        />
                        <p className="mb-0">
                          <strong>1:00</strong>
                        </p>
                        <p
                          className="mb-0 text-muted"
                          style={{ fontSize: ".65rem" }}
                        >
                          PM
                        </p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          <strong>20°C</strong>
                        </p>
                        <i
                          className="fas fa-cloud fa-2x mb-3"
                          style={{ color: "#ddd" }}
                        />
                        <p className="mb-0">
                          <strong>2:00</strong>
                        </p>
                        <p
                          className="mb-0 text-muted"
                          style={{ fontSize: ".65rem" }}
                        >
                          PM
                        </p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          <strong>19°C</strong>
                        </p>
                        <i
                          className="fas fa-cloud fa-2x mb-3"
                          style={{ color: "#ddd" }}
                        />
                        <p className="mb-0">
                          <strong>3:00</strong>
                        </p>
                        <p
                          className="mb-0 text-muted"
                          style={{ fontSize: ".65rem" }}
                        >
                          PM
                        </p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          <strong>18°C</strong>
                        </p>
                        <i
                          className="fas fa-cloud-showers-heavy fa-2x mb-3"
                          style={{ color: "#ddd" }}
                        />
                        <p className="mb-0">
                          <strong>4:00</strong>
                        </p>
                        <p
                          className="mb-0 text-muted"
                          style={{ fontSize: ".65rem" }}
                        >
                          PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card" style={{ borderRadius: 25 }}>
            <div className="card-body p-4">
              <div id="demo3" className="carousel slide" data-ride="carousel">
                {/* Indicators */}
                <ul className="carousel-indicators mb-0">
                  <li data-target="#demo3" data-slide-to={0} />
                  <li data-target="#demo3" data-slide-to={1} />
                  <li data-target="#demo3" data-slide-to={2} className="active" />
                </ul>
                {/* Carousel inner */}
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
                      <div className="flex-column">
                        <p className="small">
                          <strong>21°C</strong>
                        </p>
                        <i
                          className="fas fa-sun fa-2x mb-3"
                          style={{ color: "#ddd" }}
                        />
                        <p className="mb-0">
                          <strong>Mon</strong>
                        </p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          <strong>20°C</strong>
                        </p>
                        <i
                          className="fas fa-sun fa-2x mb-3"
                          style={{ color: "#ddd" }}
                        />
                        <p className="mb-0">
                          <strong>Tue</strong>
                        </p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          <strong>16°C</strong>
                        </p>
                        <i
                          className="fas fa-cloud fa-2x mb-3"
                          style={{ color: "#ddd" }}
                        />
                        <p className="mb-0">
                          <strong>Wed</strong>
                        </p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          <strong>17°C</strong>
                        </p>
                        <i
                          className="fas fa-cloud fa-2x mb-3"
                          style={{ color: "#ddd" }}
                        />
                        <p className="mb-0">
                          <strong>Thu</strong>
                        </p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          <strong>18°C</strong>
                        </p>
                        <i
                          className="fas fa-cloud-showers-heavy fa-2x mb-3"
                          style={{ color: "#ddd" }}
                        />
                        <p className="mb-0">
                          <strong>Fri</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default WeatherUi