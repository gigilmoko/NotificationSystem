import { Fragment, useState, useEffect } from "react";
import Sidebar from '../Layout/AdminSidebar.js'
import axios from 'axios'
import { getToken } from "../../utils/helpers";
import { MDBDataTable } from 'mdbreact'

const AdminHeatReport = () => {
    const [heatAlert, setHeatAlert] = useState([]);
    const [heatIndexes, setHeatIndexes] = useState([]);
    const [error, setError] = useState('');

    const getHeatAlert = async () => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${getToken()}`
                }
            };
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/getHeatAlert`, config);
            console.log(data);
            setHeatAlert(data.heatAlerts);
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    const getHeatIndex = async () => {
        try {
            const { data } = await axios.get(
                `${process.env.REACT_APP_API}/api/getHeatIndex`
            );
            setHeatIndexes(data.heatIndexes);
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    useEffect(() => {
        getHeatAlert();
        getHeatIndex();
    }, []);

    const getHeatIndexById = (heatIndexId) => {
        const heatIndex = heatIndexes.find
            ? heatAlert.heatIndex && heatAlert.heatIndex.heatIndex
            : null;

        return heatIndex ? heatIndex.name : '';
    };

    const heatAlertList = () => {
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
                    label: 'Warning',
                    field: 'warning',
                    sort: 'asc',
                },
                {
                    label: 'Details',
                    field: 'details',
                    sort: 'asc',
                },
            ],
            rows: [],
        };

        heatAlert.forEach((heatAlerts) => {
            const dateObject = new Date(heatAlerts.timestamp);
            const dateString = dateObject.toLocaleDateString();
            const timeString = dateObject.toLocaleTimeString();

            data.rows.push({
                date: dateString,
                time: timeString,
                heatIndex: getHeatIndexById(heatAlerts.heatIndex),
                warning: heatAlerts.warning,
                details: heatAlerts.details,
            });
        });

        return data;
    };

    return (
        <Fragment>
            <div className="custom-container" style={{ backgroundColor: '#001F3F', height: '100%', width: '100%', minHeight: '100vh', overflow: 'hidden' }}>
                <div className="row">
                    <div className="col-12 col-md-2">
                        <div className="sidebar pe-4 pb-3">
                            <Sidebar />
                        </div>
                    </div>

                    <div className="col-12 col-md-10">
                        <Fragment>
                            <br></br>
                            <h1 className="my-6" style={{ color: '#F5E8C7' }}>Heat Report List</h1>
                            <MDBDataTable
                                data={heatAlertList()}
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

export default AdminHeatReport;
