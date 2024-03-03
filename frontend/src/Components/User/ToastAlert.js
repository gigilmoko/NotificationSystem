import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastAlert = ({ newAlert }) => {
    const [showToast, setShowToast] = useState(true);

    useEffect(() => {
        if (newAlert) {
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
            }, 5000);
        }
    }, [newAlert]);

    console.log('showToast:', showToast);

    return (
        <div className={`fixed bottom-4 left-4 max-w-sm p-4 bg-yellow-500 text-white rounded-md transition-opacity duration-300 ${showToast ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="text-center">
                <p className="font-semibold">Warning: {newAlert?.details}</p>
            </div>
        </div>
    );
};

export default ToastAlert;
