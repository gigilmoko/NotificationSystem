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
            const { data } = await axios.get(`${process.env.REACT_APP_API}/usgs/getEarthquakes`, config);
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
                    label: 'Magnitude',
                    field: 'mag',
                    sort: 'asc',
                },
                {
                    label: 'Place',
                    field: 'place',
                    sort: 'asc',
                },
                {
                    label: 'Location',
                    field: 'coordinates',
                    sort: 'asc',
                }
            ],
            rows: []
        }
    
        earthquakes.forEach(earthquake => {
            data.rows.push({
                mag: earthquake.mag,
                place: earthquake.place,
                coordinates: `${earthquake.coordinates.coordinates[0]}, ${earthquake.coordinates.coordinates[1]}`, 
            });
        });
    
        return data;
    };

    return (
        <Fragment>
            <div class = "custom-container" style = {{ backgroundColor: '#001F3F', height: '100%', width: '100%',  overflow: 'hidden'}}>
                 <div className="row">
                
                <div className="col-12 col-md-2">
                <div className="sidebar pe-4 pb-3">
                <Sidebar />
                </div>
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <br></br>
                        <h1 className="my-6">All Earthquakes</h1>
                        <MDBDataTable
                            data={earthquakesList()}
                            className="px-3"
                            bordered
                            striped
                            hover
                        />
                    </Fragment>
                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default AdminEarthquake;
