import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            
    <div className="error-container">
        <div className="error-icon">
            <i className="fa-solid fa-heart-crack"></i>
        </div>
        <div className="error-code">404</div>
        <h1 className="error-title">Page Not Found</h1>
        <p className="error-text">Oops! It looks like the page you are looking for has been moved or no longer exists in our system.</p>
        <Link to="/index" className="btn btn-primary">
            <i className="fa-solid fa-house" style={{ marginRight: '0.5rem' }}></i> Return to Home
        </Link>
    </div>

        </>
    );
};

export default NotFound;
