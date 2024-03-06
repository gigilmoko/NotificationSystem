import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getToken } from "../../utils/helpers";
import Header from '../Layout/header';
import Footer from '../Layout/footer';

const EarthquakeNewUI = () => {
    const [earthquakes, setEarthquakes] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [error, setError] = useState('');
    const [pageNumber, setPageNumber] = useState(1);
    const [inputPage, setInputPage] = useState('');

    const getEarthquakes = async () => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${getToken()}` // Make sure you have a function getToken() defined
                }
            };
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/getEarthquakes`, config);
            setEarthquakes(data.earthquakes);
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    useEffect(() => {
        getEarthquakes();
        const interval = setInterval(() => {
            getEarthquakes();
        }, 1000); // Refresh every 1 second

        return () => clearInterval(interval);
    }, []);

    const goToPrevSlide = () => {
        setCurrentSlide(prevState => (prevState === 0 ? earthquakes.length - 1 : prevState - 1));
    };

    const goToNextSlide = () => {
        setCurrentSlide(prevState => (prevState === earthquakes.length - 1 ? 0 : prevState + 1));
    };

    const handlePageInputChange = (event) => {
        const value = parseInt(event.target.value);
        if (!isNaN(value) && value > 0 && value <= earthquakes.length) {
            setCurrentSlide(value - 1);
            setPageNumber(value);
        }
    };

    const handleInputPageChange = (event) => {
        setInputPage(event.target.value);
    };

    const goToInputPage = () => {
        const inputPageNumber = parseInt(inputPage);
        if (!isNaN(inputPageNumber) && inputPageNumber > 0 && inputPageNumber <= earthquakes.length) {
            setCurrentSlide(inputPageNumber - 1);
            setPageNumber(inputPageNumber);
        }
    };

    return (
        <div style={{ backgroundColor: "#001F3F", height: "100vh", overflow: "hidden" }}>
            <Header />
            <section className="vh-100" >
                <div className="container py-5 h-100"> 
                
                    <h1 style = {{textAlign: 'center', color: '#F5E8C7', marginTop: '-20px' }}>Latest Earthquake </h1>
                    <div className="row d-flex justify-content-center align-items-center h-100"   >
                    <p style={{ color: '#F5E8C7', marginTop: '-230px', marginLeft: '780px' }}>Page {currentSlide + 1} of {earthquakes.length}  </p>
                   
                        <div className="col-md-9 col-lg-7 col-xl-5">
                            
                            <div className="card mb-4 gradient-custom2" style={{ borderRadius: 25, height: '250px', width: '524px', marginTop: '-400px'}}>
                                <div className="card-body p-4 d-flex justify-content-between align-items-center">
                                    <div>
                                        {earthquakes.length > 0 &&
                                            <>
                                               
                                                <p style = {{fontSize: '45px', marginTop: '10px', textAlign: 'center'}}>MAGNITUDE</p>

                                              
                                                <p style={{ color: 'black', fontSize: '120px', marginTop: '-90px',  textAlign: 'center' }}><button className="button-62" role="button" onClick={goToPrevSlide} ><i class="fa fa-arrow-left" aria-hidden="true"></i></button>    {earthquakes[currentSlide].mag}    <button className="button-62" role="button" onClick={goToNextSlide} ><i class="fa fa-arrow-right" aria-hidden="true"></i></button></p>
                                                <p style={{ color: 'black',  fontSize: '15px', marginTop: '-45px'  }}>{earthquakes[currentSlide].place}</p>
                                                <p style={{ color: 'black', marginLeft: '300px', marginTop: '-45px' }}>{new Date(earthquakes[currentSlide].time).toLocaleString()}</p>
                                                
                                             
                                            </>
                                        }
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                 
                </div>

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter page number"
                                value={inputPage}
                                onChange={handleInputPageChange}
                            />
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-primary" onClick={goToInputPage}>Go</button>
                        </div>
                    </div>
                </div>
                
            </section>
           
        </div>
        
    )
}

export default EarthquakeNewUI;
