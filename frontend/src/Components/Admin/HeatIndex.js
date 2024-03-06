import { Fragment, useState, useEffect } from "react";
import Sidebar from '../Layout/AdminSidebar.js'
import axios from 'axios'
import { getToken } from "../../utils/helpers";
import { MDBDataTable } from 'mdbreact'

const AdminHeatIndex = () => { 
   
    const [heatIndex, setHeatIndex] = useState([]);
    const [error, setError] = useState('');

    const getHeatIndex = async () => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${getToken()}`
                }
            };
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/getHeatIndex`, config);
            console.log(data);
            setHeatIndex(data.heatIndexes);
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    useEffect(() => {
        getHeatIndex();
    }, []);

    const heatIndexesList = () => {
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
                    label: <span style={{ color: '#F5E8C7' }}>Heat Index</span>,
                    field: 'heatIndex',
                    sort: 'asc',
                },
                {
                    label: <span style={{ color: '#F5E8C7' }}>Category</span>,
                    field: 'category',
                    sort: 'asc',
                },
                
            ],
            rows: [],
        };
    
        heatIndex.forEach((heatindex) => {
            const dateObject = new Date(heatindex.timestamp);
            const dateString = dateObject.toLocaleDateString();
            const timeString = dateObject.toLocaleTimeString();
    
            data.rows.push({
                date: <span style={{ color: '#F5E8C7' }}>{dateString}</span>,
                time: <span style={{ color: '#F5E8C7' }}>{timeString}</span>,
                heatIndex: <span style={{ color: '#F5E8C7' }}>{heatindex.heatIndex}</span>,
                category: <span style={{ color: '#F5E8C7' }}>{heatindex.category}</span>,
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
                        <h1 className="my-6" style = {{color: '#F5E8C7'}}>Heat Index Data</h1>
                        <MDBDataTable
                            data={heatIndexesList()}
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

export default AdminHeatIndex;
