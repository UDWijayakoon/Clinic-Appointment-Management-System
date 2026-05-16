import React from 'react';
import { Link } from 'react-router-dom';

const PatientProfile = () => {
    return (
        <>
            
    
    {/*  Sidebar  */}
    <aside className="sidebar">
        <div className="sidebar-header">
            <Link to="/index" className="sidebar-logo">
                <i className="fa-solid fa-stethoscope"></i>
                <span>MediCore</span>
            </Link>
        </div>
        <ul className="sidebar-menu">
            <li><Link to="/patient_dashboard"><i className="fa-solid fa-house"></i> Dashboard</Link></li>
            <li><Link to="/book_appointment"><i className="fa-solid fa-plus"></i> Book Appointment</Link></li>
            <li><Link to="/my_appointments"><i className="fa-solid fa-calendar-check"></i> My Appointments</Link></li>
            <li><a href="#"><i className="fa-solid fa-file-medical"></i> Medical Records</a></li>
            <li className="active"><a href="#"><i className="fa-solid fa-gear"></i> Settings</a></li>
        </ul>
        <div className="sidebar-footer">
            <Link to="/login" className="logout-btn"><i className="fa-solid fa-right-from-bracket"></i> Logout</Link>
        </div>
    </aside>

    <main className="main-content">
        {/*  Top Header  */}
        <header className="top-header">
            <div className="search-bar">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search..." />
            </div>
            <div className="header-actions">
                <div className="user-profile">
                    <img src="https://ui-avatars.com/api/?name=John+Doe&background=E8F0FE&color=0B2545" alt="User Avatar" />
                    <div className="user-info">
                        <h4>John Doe</h4>
                        <p>Patient</p>
                    </div>
                </div>
            </div>
        </header>

        <div className="dashboard-content">
            <div className="profile-container">
                
                {/*  Left: Profile Summary Card  */}
                <div className="profile-card">
                    <img src="https://ui-avatars.com/api/?name=John+Doe&background=E8F0FE&color=0B2545&size=150" alt="Avatar" className="profile-avatar" />
                    <h3 className="profile-name">John Doe</h3>
                    <p className="profile-id">Patient ID: #MC-84729</p>
                    <p style={{ color: 'var(--clr-text-main)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                        <i className="fa-solid fa-envelope" style={{ color: 'var(--clr-accent)', width: '20px' }}></i> john.doe@example.com
                    </p>
                    <p style={{ color: 'var(--clr-text-main)', fontSize: '0.95rem' }}>
                        <i className="fa-solid fa-phone" style={{ color: 'var(--clr-accent)', width: '20px' }}></i> +1 (555) 123-4567
                    </p>
                    
                    <div className="profile-stats">
                        <div className="stat-item">
                            <h4>3</h4>
                            <p>Visits</p>
                        </div>
                        <div className="stat-item">
                            <h4>1</h4>
                            <p>Upcoming</p>
                        </div>
                    </div>
                </div>

                {/*  Right: Update Profile Form  */}
                <div className="settings-card">
                    <div className="settings-header">
                        <h2>Personal Details</h2>
                        <p style={{ color: 'var(--clr-text-light)', fontSize: '0.9rem' }}>Update your personal information and contact details.</p>
                    </div>
                    
                    <form id="profileForm">
                        <div className="form-grid">
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name</label>
                                <input type="text" id="fullName" className="form-control" value="John Doe" required />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" className="form-control" value="john.doe@example.com" required />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" className="form-control" value="+1 (555) 123-4567" required />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="gender">Gender</label>
                                <select id="gender" className="form-control" required>
                                    <option value="male" selected>Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            
                            <div className="form-group full-width" style={{ marginTop: '1rem', borderTop: '1px solid rgba(11, 37, 69, 0.05)', paddingTop: '1rem' }}>
                                <h3>Security</h3>
                                <p style={{ color: 'var(--clr-text-light)', fontSize: '0.85rem', marginBottom: '1rem' }}>Leave blank to keep your current password.</p>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">New Password</label>
                                <input type="password" id="password" className="form-control" placeholder="••••••••" />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input type="password" id="confirmPassword" className="form-control" placeholder="••••••••" />
                            </div>
                            
                            <div className="form-group full-width" style={{ marginTop: '1.5rem', textAlign: 'right' }}>
                                <button type="submit" className="btn btn-primary">Save Changes</button>
                            </div>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    </main>

    

        </>
    );
};

export default PatientProfile;
