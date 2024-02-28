import { Fragment, useState, useEffect } from "react";
import Sidebar from '../Layout/AdminSidebar.js'
import Header from '../Layout/header'
import axios from 'axios'
import { getToken } from "../../utils/helpers";
import { MDBDataTable } from 'mdbreact'

const AdminWeather = () => {
    const [weathers, setWeather] = useState([]);
    const [error, setError] = useState('');

    const getWeather = async () => {
        try {
        const config = {
            headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${getToken()}`
            }
        };
        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/getWeather`, config);
        console.log(data);
        setWeather(data.weathers);
        } catch (error) {
        setError(error.response.data.message);
        }
    };

    useEffect(() => {
        getWeather();
    }, []);

    const weatherList = () => {
        const data = {
            columns: [
                {
                    label: 'Date',
                    field: 'date',
                    sort: 'asc',
                },
                {
                    label: 'Time',
                    field: 'time',
                    sort: 'asc',
                },
                {
                    label: 'Temperature',
                    field: 'temperature',
                    sort: 'asc',
                },
                
                {
                    label: 'Range',
                    field: 'temperatureRange',
                    sort: 'asc',
                },
                {
                    label: 'Humidity',
                    field: 'humidity',
                    sort: 'asc',
                },
                {
                    label: 'Description',
                    field: 'weatherDescription',
                    sort: 'asc',
                },
                {
                    label: 'Wind Speed',
                    field: 'windSpeed',
                    sort: 'asc',
                },
                {
                    label: 'Pressure',
                    field: 'pressure',
                    sort: 'asc',
                },
            ],
            rows: []
        };
        
    
        weathers.forEach(weather => {
            const [date, time] = weather.timestamp.split('T');
            const temperatureRange = `${weather.tempMin} - ${weather.tempMax} °C`;
            
            data.rows.push({
                date: date,
                time: time.slice(0, -8),
                temperature: `${weather.temperature} °C`,
                temperatureRange: temperatureRange,
                humidity: `${weather.humidity} %`, 
                weatherDescription: weather.weatherDescription,
                windSpeed: `${weather.windSpeed} m/s`,
                pressure: weather.pressure,
            });
        });
    
        return data;
    };

    return (
        <Fragment>
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <br></br>
                        <h1 className="my-6">Weather Lists</h1>
                        <MDBDataTable
                            data={weatherList()}
                            className="px-3"
                            bordered
                            striped
                            hover
                        />
                    </Fragment>
                </div>
            </div>
        </Fragment>
    )

}
export default AdminWeather;