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
                    label: 'Heat Index',
                    field: 'heatIndex',
                    sort: 'asc',
                },
                {
                    label: 'Category',
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
                date: dateString,
                time: timeString,
                heatIndex: heatindex.heatIndex,
                category: heatindex.category,
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
                        />
                    </Fragment>
                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default AdminHeatIndex;
