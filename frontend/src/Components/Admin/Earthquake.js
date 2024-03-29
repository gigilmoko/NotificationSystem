import { Fragment, useState, useEffect } from "react";
import Sidebar from '../Layout/AdminSidebar.js'
import axios from 'axios'
import { getToken } from "../../utils/helpers";
import { MDBDataTable } from 'mdbreact'

const AdminEarthquake = () => { 
    const [earthquakes, setEarthquakes] = useState([]);
    const [error, setError] = useState('');

    const getEarthquakes = async () => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${getToken()}`
                }
            };
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/getEarthquakes`, config);
            console.log(data);
            setEarthquakes(data.earthquakes);
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    useEffect(() => {
        getEarthquakes();
    }, []);

    const earthquakesList = () => {
        const data = {
            columns: [
                {
                    label: <span style={{ color: '#F5E8C7' }}>Magnitude</span>,
                    field: 'mag',
                    sort: 'asc',
                },
                {
                    label: <span style={{ color: '#F5E8C7' }}>Place</span>,
                    field: 'place',
                    sort: 'asc',
                },
                {
                    label: <span style={{ color: '#F5E8C7' }}>Location</span>,
                    field: 'coordinates',
                    sort: 'asc',
                }
            ],
            rows: []
        }
    
        earthquakes.forEach(earthquake => {
            data.rows.push({
                mag: <span style={{color: '#F5E8C7'}}>{earthquake.mag}</span>,
                place: <span style={{color: '#F5E8C7'}}>{earthquake.place}</span>,
                coordinates: <span style={{color: '#F5E8C7'}}>{`${earthquake.coordinates.coordinates[0]}, ${earthquake.coordinates.coordinates[1]}`}</span>, 
            });
        });
    
        return data;
    };

    return (
        <Fragment>
            <div class = "custom-container" style = {{ backgroundColor: '#001F3F', height: '100%', width: '100%', minHeight: '100vh',  overflow: 'hidden'}}>
                <div className="row">
                
                <div className="col-12 col-md-2">
                <div className="sidebar pe-4 pb-3">
                <Sidebar />
                </div>
                </div>

                 
                    <div className="col-12 col-md-10">
                        <Fragment>
                            <br></br>
                            <h1 className="my-6" style={{ color: '#F5E8C7' }}>All Earthquakes</h1>
                            <MDBDataTable
                                data={earthquakesList()}
                                className="px-3"
                                bordered
                                striped
                                hover
                                style={{ backgroundColor: '#323C50 ' }}
                            />
                        </Fragment>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AdminEarthquake;
