import React, { useState } from 'react';
import '../../assets/css/owl.carousel.min.css'
import '../../assets/css/bootstrap2.min.css'
import '../../assets/css/dashboardstyle.css'

import Helmeth from '../Layout/adminhelmet.js'
import Sidebar from '../Layout/adminsidebar.js'
import HeaderNavbar from '../Layout/adminheader.js'
import Chart1 from '../Charts/Chart1.js';
import Chart2 from '../Charts/Chart2.js';
import Chart3 from '../Charts/Chart3.js';
import Chart4 from '../Charts/Chart4.js';
import Chart5 from '../Charts/Chart5.js';
import HourlyHeatIndex from '../Charts/HourlyHeatIndex';
import WeeklyHeatIndex from '../Charts/WeeklyHeatIndex';

const Dashboard = () => {
  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedChart, setSelectedChart] = useState('weekly');

  const renderChartForSelectedDay = () => {
    switch (selectedDay) {
      case 1:
        return <Chart1 />;
      case 2:
        return <Chart2 />;
      case 3:
        return <Chart3 />;
      case 4:
        return <Chart4 />;
      case 5:
        return <Chart5 />;
      default:
        return null;
    }
  };

  const renderSelectedChart = () => {
    switch (selectedChart) {
      case 'hourly':
        return <HourlyHeatIndex />;
      case 'weekly':
        return <WeeklyHeatIndex />;
      default:
        return null;
    }
  };

  
  return (
    
    <div class = "custom-container">
      <Helmeth/>
    <div className="container-fluid position-relative d-flex p-0">
      {/* Spinner Start */}
     
      {/* Spinner End */}
      {/* Sidebar Start */}
      <div className="sidebar pe-4 pb-3">
      <Sidebar/>
      </div>
      {/* Sidebar End */}
      {/* Content Start */}
      <div className="content" >
        {/* Navbar Start */}
        <HeaderNavbar/>
        {/* Navbar End */}
        {/* Sale & Revenue Start */}
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            <div className="col-sm-6 col-xl-3">
              <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                <i className="fa fa-chart-line fa-3x text-primary" />
                <div className="ms-3">
                  <p className="mb-2">Today Sale</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                <i className="fa fa-chart-bar fa-3x text-primary" />
                <div className="ms-3">
                  <p className="mb-2">Total Sale</p>
                  <h6 className="mb-0">$1234</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                <i className="fa fa-chart-area fa-3x text-primary" />
                <div className="ms-3">
                  <p className="mb-2">Today Revenue</p>
                  <h6 className="mb-0">$1234</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                <i className="fa fa-chart-pie fa-3x text-primary" />
                <div className="ms-3">
                  <p className="mb-2">Total Revenue</p>
                  <h6 className="mb-0">$1234</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sale & Revenue End */}
        {/* Sales Chart Start */}
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            <div className="col-m-12 col-xl-6">
              <div className="bg-secondary text-center rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h6 className="mb-0">Daily Forecasts</h6>
                </div>
                <div className="d-flex justify-content-between mb-4">
                  {[1, 2, 3, 4, 5].map((day) => (
                    <button key={day} onClick={() => setSelectedDay(day)} className={`btn ${selectedDay === day ? 'btn-warning' : 'btn-secondary'}`}>
                      {`Day ${day}`}
                    </button>
                  ))}
                </div>
                {renderChartForSelectedDay()}
              </div>
            </div>
            <div className="col-sm-12 col-xl-6">
            <div className="bg-secondary text-center rounded p-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h6 className="mb-0">Heat Index</h6>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <button onClick={() => setSelectedChart('hourly')} className={`btn ${selectedChart === 'hourly' ? 'btn-warning' : 'btn-secondary'}`}>
                  Hourly
                </button>
                <button onClick={() => setSelectedChart('weekly')} className={`btn ${selectedChart === 'weekly' ? 'btn-warning' : 'btn-secondary'}`}>
                  Weekly
                </button>
                {/* Add other buttons as needed */}
              </div>
              {/* Render the selected chart */}
              {renderSelectedChart()}
            </div>
            </div>
          </div>
        </div>
        {/* Sales Chart End */}
        {/* Recent Sales Start */}
        <div className="container-fluid pt-4 px-4">
          <div className="bg-secondary text-center rounded p-4">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h6 className="mb-0">Recent Salse</h6>
              <a href="">Show All</a>
            </div>
            <div className="table-responsive">
              <table className="table text-start align-middle table-bordered table-hover mb-0">
                <thead>
                  <tr className="text-white">
                    <th scope="col">
                      <input className="form-check-input" type="checkbox" />
                    </th>
                    <th scope="col">Date</th>
                    <th scope="col">Invoice</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input className="form-check-input" type="checkbox" />
                    </td>
                    <td>01 Jan 2045</td>
                    <td>INV-0123</td>
                    <td>Jhon Doe</td>
                    <td>$123</td>
                    <td>Paid</td>
                    <td>
                      <a className="btn btn-sm btn-primary" href="">
                        Detail
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input className="form-check-input" type="checkbox" />
                    </td>
                    <td>01 Jan 2045</td>
                    <td>INV-0123</td>
                    <td>Jhon Doe</td>
                    <td>$123</td>
                    <td>Paid</td>
                    <td>
                      <a className="btn btn-sm btn-primary" href="">
                        Detail
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input className="form-check-input" type="checkbox" />
                    </td>
                    <td>01 Jan 2045</td>
                    <td>INV-0123</td>
                    <td>Jhon Doe</td>
                    <td>$123</td>
                    <td>Paid</td>
                    <td>
                      <a className="btn btn-sm btn-primary" href="">
                        Detail
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input className="form-check-input" type="checkbox" />
                    </td>
                    <td>01 Jan 2045</td>
                    <td>INV-0123</td>
                    <td>Jhon Doe</td>
                    <td>$123</td>
                    <td>Paid</td>
                    <td>
                      <a className="btn btn-sm btn-primary" href="">
                        Detail
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input className="form-check-input" type="checkbox" />
                    </td>
                    <td>01 Jan 2045</td>
                    <td>INV-0123</td>
                    <td>Jhon Doe</td>
                    <td>$123</td>
                    <td>Paid</td>
                    <td>
                      <a className="btn btn-sm btn-primary" href="">
                        Detail
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Recent Sales End */}
        {/* Widgets Start */}
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            <div className="col-sm-12 col-md-6 col-xl-4">
              <div className="h-100 bg-secondary rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h6 className="mb-0">Messages</h6>
                  <a href="">Show All</a>
                </div>
                <div className="d-flex align-items-center border-bottom py-3">
                  <img
                    className="rounded-circle flex-shrink-0"
                    src="img/user.jpg"
                    alt=""
                    style={{ width: 40, height: 40 }}
                  />
                  <div className="w-100 ms-3">
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-0">Jhon Doe</h6>
                      <small>15 minutes ago</small>
                    </div>
                    <span>Short message goes here...</span>
                  </div>
                </div>
                <div className="d-flex align-items-center border-bottom py-3">
                  <img
                    className="rounded-circle flex-shrink-0"
                    src="img/user.jpg"
                    alt=""
                    style={{ width: 40, height: 40 }}
                  />
                  <div className="w-100 ms-3">
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-0">Jhon Doe</h6>
                      <small>15 minutes ago</small>
                    </div>
                    <span>Short message goes here...</span>
                  </div>
                </div>
                <div className="d-flex align-items-center border-bottom py-3">
                  <img
                    className="rounded-circle flex-shrink-0"
                    src="img/user.jpg"
                    alt=""
                    style={{ width: 40, height: 40 }}
                  />
                  <div className="w-100 ms-3">
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-0">Jhon Doe</h6>
                      <small>15 minutes ago</small>
                    </div>
                    <span>Short message goes here...</span>
                  </div>
                </div>
                <div className="d-flex align-items-center pt-3">
                  <img
                    className="rounded-circle flex-shrink-0"
                    src="img/user.jpg"
                    alt=""
                    style={{ width: 40, height: 40 }}
                  />
                  <div className="w-100 ms-3">
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-0">Jhon Doe</h6>
                      <small>15 minutes ago</small>
                    </div>
                    <span>Short message goes here...</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-xl-4">
              <div className="h-100 bg-secondary rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h6 className="mb-0">Calender</h6>
                  <a href="">Show All</a>
                </div>
                <div id="calender" />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-xl-4">
              <div className="h-100 bg-secondary rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h6 className="mb-0">To Do List</h6>
                  <a href="">Show All</a>
                </div>
                <div className="d-flex mb-2">
                  <input
                    className="form-control bg-dark border-0"
                    type="text"
                    placeholder="Enter task"
                  />
                  <button type="button" className="btn btn-primary ms-2">
                    Add
                  </button>
                </div>
                <div className="d-flex align-items-center border-bottom py-2">
                  <input className="form-check-input m-0" type="checkbox" />
                  <div className="w-100 ms-3">
                    <div className="d-flex w-100 align-items-center justify-content-between">
                      <span>Short task goes here...</span>
                      <button className="btn btn-sm">
                        <i className="fa fa-times" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center border-bottom py-2">
                  <input className="form-check-input m-0" type="checkbox" />
                  <div className="w-100 ms-3">
                    <div className="d-flex w-100 align-items-center justify-content-between">
                      <span>Short task goes here...</span>
                      <button className="btn btn-sm">
                        <i className="fa fa-times" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center border-bottom py-2">
                  <input
                    className="form-check-input m-0"
                    type="checkbox"
                    defaultChecked=""
                  />
                  <div className="w-100 ms-3">
                    <div className="d-flex w-100 align-items-center justify-content-between">
                      <span>
                        <del>Short task goes here...</del>
                      </span>
                      <button className="btn btn-sm text-primary">
                        <i className="fa fa-times" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center border-bottom py-2">
                  <input className="form-check-input m-0" type="checkbox" />
                  <div className="w-100 ms-3">
                    <div className="d-flex w-100 align-items-center justify-content-between">
                      <span>Short task goes here...</span>
                      <button className="btn btn-sm">
                        <i className="fa fa-times" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center pt-2">
                  <input className="form-check-input m-0" type="checkbox" />
                  <div className="w-100 ms-3">
                    <div className="d-flex w-100 align-items-center justify-content-between">
                      <span>Short task goes here...</span>
                      <button className="btn btn-sm">
                        <i className="fa fa-times" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br/>
    
      </div>

      
    </div>

  </div>
  )
}

export default Dashboard