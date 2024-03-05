import { Fragment, useState, useEffect } from "react";
import Sidebar from '../Layout/AdminSidebar'
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
                    label: <span style={{ color: '#F5E8C7' }}>Date</span>,
                    field: 'date',
                    sort: 'asc',
                },
                {
                    label: <span style={{ color: '#F5E8C7' }}>Time</span>,
                    field: 'time',
                    sort: 'asc',
                },
                {
                    label: <span style={{ color: '#F5E8C7' }}>Temperature</span>,
                    field: 'temperature',
                    sort: 'asc',
                },
                
                {
                    label: <span style={{ color: '#F5E8C7' }}>Range</span>,
                    field: 'temperatureRange',
                    sort: 'asc',
                },
                {
                    label: <span style={{ color: '#F5E8C7' }}>Humidity</span>,
                    field: 'humidity',
                    sort: 'asc',
                },
                {
                    label: <span style={{ color: '#F5E8C7' }}>Description</span>,
                    field: 'weatherDescription',
                    sort: 'asc',
                },
                {
                    label: <span style={{ color: '#F5E8C7' }}>Wind Speed</span>,
                    field: 'windSpeed',
                    sort: 'asc',
                },
                {
                    label: <span style={{ color: '#F5E8C7' }}>Pressure</span>,
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
                date: <span style={{ color: '#F5E8C7' }}>{date}</span>,
                time: <span style={{ color: '#F5E8C7' }}>{time.slice(0, -8)}</span>,
                temperature: <span style={{ color: '#F5E8C7' }}>{`${weather.temperature} °C`}</span>,
                temperatureRange: <span style={{ color: '#F5E8C7' }}>{temperatureRange}</span>,
                humidity: <span style={{ color: '#F5E8C7' }}>{`${weather.humidity} %`}</span>,
                weatherDescription: <span style={{ color: '#F5E8C7' }}>{weather.weatherDescription}</span>,
                windSpeed: <span style={{ color: '#F5E8C7' }}>{`${weather.windSpeed} m/s`}</span>,
                pressure: <span style={{ color: '#F5E8C7' }}>{weather.pressure}</span>,
        
            });
        });
    
        return data;
    };

    return (
        <Fragment>
           <div class = "custom-container" style = {{ backgroundColor: '#001F3F', height: '100%', width: '100%', overflow: 'hidden', minHeight: '100vh'}}>
            
                 <div className="row">
                
                <div className="col-12 col-md-2">
                <div className="sidebar pe-4 pb-3">
                <Sidebar />
                </div>
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <br></br>
                        <h1 className="my-6" style = {{color: '#F5E8C7'}}>Weather Lists</h1>
                        <MDBDataTable
    data={weatherList()}
    className="px-3"
    bordered
    striped
    hover
    style={{ backgroundColor: '#323C50 ' }}
    // Add rowStyle to apply color to rows
  
/>
                    </Fragment>
                </div>
            </div>
            </div>
        </Fragment>
       
    )

}
export default AdminWeather;