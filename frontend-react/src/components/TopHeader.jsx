import React from 'react';

const TopHeader = ({ user }) => {
    return (
        <header className="top-header">
            <div className="search-bar">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search..." />
            </div>
            <div className="header-actions">
                <div className="notifications">
                    <i className="fa-regular fa-bell"></i>
                    <span className="badge"></span>
                </div>
                <div className="user-profile">
                    <img src={user?.avatar || "/images/doctor_avatar_professional_1778886594295.png"} alt="User Avatar" />
                    <div className="user-info">
                        <h4>{user?.name || 'Loading...'}</h4>
                        <p>{user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1) || 'User'}</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default TopHeader;
