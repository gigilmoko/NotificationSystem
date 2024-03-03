import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastAlert = ({ newAlert }) => {
    const [showToast, setShowToast] = useState(false);

    // useEffect(() => {
    //     if (newAlert) {
    //         toast.success(`New Alert: ${newAlert.warning} - ${newAlert.details}`);
    //         setShowToast(true);
    //     }
    // }, [newAlert]);

    useEffect(() => {
        if (newAlert) {
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
            }, 5000); 
            }
    }, [newAlert]);

    return (
        <div className={`fixed bottom-4 left-4 max-w-sm p-4 bg-yellow-500 text-white rounded-md transition-opacity duration-300 ${showToast ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="text-center">
                <p className="font-semibold">Warning: {newAlert}</p>
            </div>
        </div>
    );
};

export default ToastAlert;
