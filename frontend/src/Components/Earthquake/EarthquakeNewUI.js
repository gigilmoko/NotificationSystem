import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getToken } from "../../utils/helpers";
import Header from '../Layout/header';
import Footer from '../Layout/footer';

const EarthquakeNewUI = () => {
    const [earthquakes, setEarthquakes] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [error, setError] = useState('');

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

    return (
        <div style={{ backgroundColor: "#001F3F" }}>
            <Header />
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-7 col-xl-5">
                            <div className="card mb-4 gradient-custom2" style={{ borderRadius: 25, height: '250px', width: '524px', marginTop: '-300px'}}>
                                <div className="card-body p-4 d-flex justify-content-between align-items-center">
                                    <div>
                                        {earthquakes.length > 0 &&
                                            <>
                                                <p style={{ color: 'black', marginTop: '-60px' }}>{currentSlide + 1} of {earthquakes.length}</p>
                                                <p style={{ color: 'black' }}>{earthquakes[currentSlide].mag}</p>
                                                <p style={{ color: 'black' }}>{earthquakes[currentSlide].place}</p>
                                                <p style={{ color: 'black' }}>{new Date(earthquakes[currentSlide].time).toLocaleString()}</p>
                                               
                                            </>
                                        }
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <button className="button-62" role="button" onClick={goToPrevSlide} style = {{width: '60px', marginTop: '-1100px', marginLeft: '380px'}}><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
                <button className="button-62" role="button" onClick={goToNextSlide}style = {{width: '60px', marginTop: '-1100px', marginLeft: '635px'}}><i class="fa fa-arrow-right" aria-hidden="true"></i></button>
            </section>
            <Footer />
           
        </div>
    )
}

export default EarthquakeNewUI;
