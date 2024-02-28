import '../../assets/css/weather.css'
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from '../Layout/header'
import Footer from '../Layout/footer'

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
    <div style={{ backgroundColor: "#001F3F" }}>
        <Header/>
        <section className="vh-100"  >
    <div className="container py-5 h-100" >
      <div
        className="row d-flex justify-content-center align-items-center h-100"
        style={{ color: "#282828" }}
      >
        <div className="col-md-9 col-lg-7 col-xl-5">
          <div className="card mb-4 gradient-custom" style={{ borderRadius: 25, height: '210px', width: '524px'}}>
            <div className="card-body p-4">
              <div id="demo1" className="carousel slide" data-ride="carousel">
                {/* Indicators */}
               
                {/* Carousel inner */}
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="d-flex justify-content-between mb-4 pb-2">
                      <div>
                        <h2 className="display-2">
                          <strong style = {{color: 'black'}}>{currentWeather.temp}°C</strong>
                        </h2>
                        
                        <p className="text-muted mb-0" style = {{marginTop: '-90px'}}>Taguig, Philippines</p>
                        
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
          <div className="card mb-4" style={{ borderRadius: 25, height: '210px', width: '524px'}}>
            <div className="card-body p-4">
              <div id="demo2" className="carousel slide" data-ride="carousel">
             
              <div className="carousel-inner">
  <div className="carousel-item active">
    <div className="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
      {next5HoursForecast.map((item, index) => (
        <div key={index} className="flex-column">
          <p className="small">
            <strong>{item.temp}°C</strong>
          </p>
          {/* Conditionally render the icon based on weather condition */}
          {item.icon === "Clouds" ? (
            // Render sun icon if weather condition is "Clear"
            <i className="fas fa-sun fa-2x mb-3" style={{ color: "#ddd" }} />
          ) : (
            // Render default icon for other weather conditions
            <i className={`fas fa-${item.icon} fa-2x mb-3`} style={{ color: "#ddd" }} />
          )}
          <p className="mb-0">
            <strong>{item.time}</strong>
          </p>
          <p className="mb-0 text-muted" style={{ fontSize: ".65rem" }}>
            PM
          </p>
        </div>
      ))}
    </div>
  </div>
</div>
              </div>
            </div>
          </div>
          <div className="card" style={{ borderRadius: 25, height: '210px', width: '524px'}}>
            <div className="card-body p-4">
              <div id="demo3" className="carousel slide" data-ride="carousel">
                {/* Indicators */}
               
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
  <Footer/>
  </div>
  )
}

export default WeatherUi