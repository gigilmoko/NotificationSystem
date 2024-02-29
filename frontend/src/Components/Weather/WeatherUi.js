import '../../assets/css/weather.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { WiDaySunny, WiNightClear, WiDayCloudy, WiNightAltCloudy, WiDayCloudyHigh, WiNightAltCloudyHigh, WiDayShowers, WiNightAltShowers, WiDayRain, WiNightAltRain, WiDayThunderstorm, WiNightAltThunderstorm, WiDaySnow, WiNightAltSnow, WiFog } from 'react-icons/wi';
import Header from '../Layout/header';
import Footer from '../Layout/footer';

const api = {
  key: 'd6536e139981446b8a734cd33ee9b21e',
  base: 'https://api.openweathermap.org/data/2.5/',
};

const getDayOfWeek = (index) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[index];
};

const renderWeatherIcon = (iconCode, isDay) => {
  switch (iconCode) {
    case '01d':
      return <WiDaySunny style={{ fontSize: '2em', fontWeight: 'bold' }} />;
    case '01n':
      return <WiNightClear style={{ fontSize: '2em', fontWeight: 'bold' }} />;
    case '02d':
      return <WiDayCloudy style={{ fontSize: '2em', fontWeight: 'bold' }} />;
    case '02n':
      return <WiNightAltCloudy style={{ fontSize: '2em', fontWeight: 'bold' }} />;
    case '03d':
      return <WiDayCloudyHigh style={{ fontSize: '2em', fontWeight: 'bold' }} />;
    case '03n':
      return <WiNightAltCloudyHigh style={{ fontSize: '2em', fontWeight: 'bold' }} />;
    case '04d':
      return <WiDayCloudyHigh style={{ fontSize: '2em', fontWeight: 'bold' }} />;
    case '04n':
      return <WiNightAltCloudyHigh style={{ fontSize: '2em', fontWeight: 'bold' }} />;
    case '09d':
      return <WiDayShowers style={{ fontSize: '2em', fontWeight: 'bold' }} />;
    case '09n':
      return <WiNightAltShowers style={{ fontSize: '2em', fontWeight: 'bold' }} />;
    case '10d':
      return <WiDayRain style={{ fontSize: '2em', fontWeight: 'bold' }} />;
    case '10n':
      return <WiNightAltRain style={{ fontSize: '2em', fontWeight: 'bold' }} />;
    case '11d':
      return <WiDayThunderstorm style={{ fontSize: '2em', fontWeight: 'bold' }} />;
    case '11n':
      return <WiNightAltThunderstorm style={{ fontSize: '2em', fontWeight: 'bold' }} />;
    case '13d':
      return <WiDaySnow style={{ fontSize: '2em', fontWeight: 'bold' }} />;
    case '13n':
      return <WiNightAltSnow style={{ fontSize: '2em', fontWeight: 'bold' }} />;
    case '50d':
      return <WiFog style={{ fontSize: '2em', fontWeight: 'bold' }} />;
    case '50n':
      return <WiFog style={{ fontSize: '2em', fontWeight: 'bold' }} />;
    default:
      return null;
  }
};

const WeatherUi = () => {
  const [currentWeather, setCurrentWeather] = useState({});
  const [next5HoursForecast, setNext5HoursForecast] = useState([]);
  const [temperatureRange, setTemperatureRange] = useState([]);
  const [currentDate, setCurrentDate] = useState('');
  const philippineTimezone = 'Asia/Manila';

  useEffect(() => {
    const defaultCity = 'Taguig';

    // Fetch current weather
    const fetchCurrentWeather = async () => {
      try {
        const res = await axios.get(`${api.base}weather?q=${defaultCity}&units=metric&APPID=${api.key}`);
        console.log('Current Weather API Response:', res.data);

        setCurrentWeather({
          temp: res.data.main.temp,
          humidity: res.data.main.humidity,
          windSpeed: res.data.wind.speed,
          precipitation: res.data.rain ? res.data.rain['1h'] : 0,
        });

        setCurrentDate(new Date().toLocaleString('en-US', { timeZone: philippineTimezone }));
      } catch (error) {
        console.error('Error fetching current weather data:', error);
      }
    };

    // Fetch forecast data
    const fetchForecastData = async () => {
      try {
        const res = await axios.get(`${api.base}forecast?q=${defaultCity}&units=metric&APPID=${api.key}`);
        console.log('Forecast API Response:', res.data);

        const next5HoursData = res.data.list
          .slice(0, 5)
          .map((data) => ({
            time: new Date(data.dt * 1000).toLocaleTimeString('en-US', {
              timeZone: philippineTimezone,
              hour: 'numeric',
              minute: 'numeric',
            }),
            temp: data.main.temp,
            icon: data.weather[0].icon,
          }));

        setNext5HoursForecast(next5HoursData);

        const next5DaysData = res.data.list.filter((data) => {
          const date = new Date(data.dt * 1000).toLocaleDateString('en-US', {
            timeZone: philippineTimezone,
          });
          return date !== currentDate;
        });

        const temperatureRangeData = next5DaysData.reduce((acc, data) => {
          const date = new Date(data.dt * 1000).toLocaleDateString('en-US', {
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
          icon: next5DaysData[0].weather[0].icon,
        }));

        setTemperatureRange(rangeData);
      } catch (error) {
        console.error('Error fetching forecast data:', error);
      }
    };
    fetchCurrentWeather();
    fetchForecastData();
  }, [currentDate]);


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

          <div className="card mb-4 gradient-custom" style={{ borderRadius: 25, height: '250px', width: '524px'}}>
            <div className="card-body p-4">
              <div id="demo1" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="d-flex justify-content-between mb-4 pb-2">
                      <div>
                        <h2 className="display-2">
                          <strong style={{ color: 'black' }}>{currentWeather.temp}°C</strong>
                        </h2>
                        <p className="text-muted mb-0" style={{ marginTop: '-150px' }}>Wind Speed: {currentWeather.windSpeed} m/s
                        </p>
                        <p className="text-muted mb-0" style={{ marginTop: '0px' }}>Precipitation: {currentWeather.precipitation} mm/h
                        </p>
                        <p className="text-muted mb-0" style={{ marginTop: '0px' }}>Humidity: {currentWeather.humidity}%
                        </p>
                        <p className="text-muted mb-0" style={{ marginTop: '0px' }}>
                          <strong>Taguig, Philippines</strong>
                        </p>
                        <p className="mb-0" style={{ color: 'black' }}>{currentDate.toLocaleString()}
                        </p>
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
                              {/* Render the custom weather icon */}
                              {renderWeatherIcon(item.icon, true)}
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

          <div className="card" style={{ borderRadius: 25, height: '250px', width: '524px' }}>
            <div className="card-body p-4">
              <div id="demo3" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
                      {temperatureRange.slice(0, 5).map((day, index) => (
                        <div className="flex-column" key={index}>
                          <p className="small">
                            <strong>{`${day.minTemp}°C - ${day.maxTemp}°C`}</strong>
                          </p>
                          <div className="mb-2">
                            {renderWeatherIcon(day.icon, true)}
                          </div>
                          <p className="mb-0">
                            <strong>{getDayOfWeek(new Date(day.date).getDay())}</strong> {/* Display the actual day of the week */}
                          </p>
                          <p className="mb-0">
                            <strong>{day.date}</strong> {/* Display the actual date */}
                          </p>
                        </div>
                      ))}
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