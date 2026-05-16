import React from 'react';
import { Link } from 'react-router-dom';

const DoctorProfile = () => {
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
            <li><Link to="/doctor_dashboard"><i className="fa-solid fa-house"></i> Dashboard</Link></li>
            <li><Link to="/doctor_appointments"><i className="fa-solid fa-calendar-check"></i> Appointments</Link></li>
            <li><a href="#"><i className="fa-solid fa-users"></i> Patients</a></li>
            <li className="active"><Link to="/doctor_profile"><i className="fa-solid fa-gear"></i> Profile Settings</Link></li>
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
                <button className="icon-btn notification-btn">
                    <i className="fa-regular fa-bell"></i>
                    <span className="badge" style={{ backgroundColor: '#F6AD55' }}>3</span>
                </button>
                <div className="user-profile">
                    <img src="https://ui-avatars.com/api/?name=Sarah+Jenkins&background=2B6CB0&color=fff" alt="Doctor Avatar" />
                    <div className="user-info">
                        <h4>Dr. Sarah Jenkins</h4>
                        <p>Cardiology</p>
                    </div>
                </div>
            </div>
        </header>

        <div className="dashboard-content">
            <div className="profile-container">
                
                {/*  Left: Profile Summary Card  */}
                <div className="profile-card">
                    <img src="https://ui-avatars.com/api/?name=Sarah+Jenkins&background=2B6CB0&color=fff&size=150" alt="Avatar" className="profile-avatar" />
                    <h3 className="profile-name">Dr. Sarah Jenkins</h3>
                    <p className="profile-spec">Cardiology</p>
                    
                    <p style={{ color: 'var(--clr-text-main)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                        <i className="fa-solid fa-envelope" style={{ color: 'var(--clr-accent)', width: '20px' }}></i> s.jenkins@medicore.com
                    </p>
                    <p style={{ color: 'var(--clr-text-main)', fontSize: '0.95rem' }}>
                        <i className="fa-solid fa-phone" style={{ color: 'var(--clr-accent)', width: '20px' }}></i> +1 (555) 987-6543
                    </p>
                    
                    <div className="profile-stats">
                        <div className="stat-item">
                            <h4>12+</h4>
                            <p>Yrs Exp.</p>
                        </div>
                        <div className="stat-item">
                            <h4>1,248</h4>
                            <p>Patients</p>
                        </div>
                    </div>
                </div>

                {/*  Right: Update Profile Form  */}
                <div className="settings-card">
                    <div className="settings-header">
                        <h2>Professional Profile</h2>
                        <p style={{ color: 'var(--clr-text-light)', fontSize: '0.9rem' }}>Update your professional information and contact details.</p>
                    </div>
                    
                    <form id="profileForm">
                        <div className="form-grid">
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name</label>
                                <input type="text" id="fullName" className="form-control" value="Dr. Sarah Jenkins" required />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="email">Work Email</label>
                                <input type="email" id="email" className="form-control" value="s.jenkins@medicore.com" required />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="specialization">Specialization</label>
                                <select id="specialization" className="form-control" required>
                                    <option value="cardiology" selected>Cardiology</option>
                                    <option value="neurology">Neurology</option>
                                    <option value="orthopedics">Orthopedics</option>
                                    <option value="pediatrics">Pediatrics</option>
                                    <option value="general">General Practice</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="experience">Years of Experience</label>
                                <input type="number" id="experience" className="form-control" value="12" min="0" required />
                            </div>

                            <div className="form-group full-width">
                                <label htmlFor="bio">Professional Bio (Optional)</label>
                                <textarea id="bio" className="form-control" rows="3">Board-certified Cardiologist with over 12 years of experience specializing in preventative heart care and advanced echocardiography.</textarea>
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
                                <button type="submit" className="btn btn-primary">Update Information</button>
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

export default DoctorProfile;
