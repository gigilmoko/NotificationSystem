import React, { useState, useEffect } from "react";

const HeatAlertNotification = ({ heatAlert }) => {
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        if (heatAlert) {
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 5000);
        }
    }, [heatAlert]);

    return (
        <div className={`fixed top-4 right-4 max-w-sm p-4 bg-yellow-500 text-black rounded-md transition-opacity duration-300 ${showNotification ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex justify-between items-center">
            <div>
            <p className="font-semibold">New Heat Alert:</p>
            <p className="text-sm">{heatAlert?.warning} - {heatAlert?.details}</p>
            </div>
            <button onClick={() => setShowNotification(false)} className="focus:outline-none">
            {/* You can add your own close icon or text here */}
            {/* For example, a simple 'X' character */}
            X
            </button>
        </div>
        </div>
    );
};

export default HeatAlertNotification;
