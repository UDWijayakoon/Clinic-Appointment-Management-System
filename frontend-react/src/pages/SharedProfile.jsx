import React from 'react';
import { Link } from 'react-router-dom';

const SharedProfile = () => {
    return (
        <>
            
    
    {/*  Generic Sidebar for Shared Profile  */}
    <aside className="sidebar">
        <div className="sidebar-header">
            <Link to="/index" className="sidebar-logo">
                <i className="fa-solid fa-stethoscope"></i>
                <span>MediCore</span>
            </Link>
        </div>
        <ul className="sidebar-menu">
            <li><a href="javascript:history.back()"><i className="fa-solid fa-arrow-left"></i> Back</a></li>
            <li className="active"><Link to="/profile"><i className="fa-solid fa-user-gear"></i> Account Settings</Link></li>
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
                <input type="text" placeholder="Search settings..." />
            </div>
            <div className="header-actions">
                <div className="user-profile">
                    <img src="https://ui-avatars.com/api/?name=User&background=0B2545&color=fff" alt="Avatar" id="headerAvatar" />
                    <div className="user-info">
                        <h4 id="headerName">Current User</h4>
                        <p id="headerRole">Account Role</p>
                    </div>
                </div>
            </div>
        </header>

        <div className="dashboard-content">
            <div className="profile-wrapper">
                <div className="settings-card">
                    <div className="settings-header">
                        <img src="https://ui-avatars.com/api/?name=User&background=0B2545&color=fff&size=150" alt="Profile" className="profile-avatar-large" />
                        <div>
                            <h2 style={{ color: 'var(--clr-primary)', marginBottom: '0.2rem' }}>Account Profile</h2>
                            <p style={{ color: 'var(--clr-text-light)', fontSize: '0.9rem' }}>Manage your personal information and security settings.</p>
                        </div>
                    </div>
                    
                    <form id="sharedProfileForm">
                        <div className="form-grid">
                            
                            <h3 className="section-title">Personal Information</h3>
                            
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" id="fullName" className="form-control" value="Current User" required />
                            </div>
                            
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" id="email" className="form-control" value="user@medicore.com" required />
                            </div>
                            
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel" id="phone" className="form-control" value="+1 (555) 000-0000" />
                            </div>

                            <div className="form-group">
                                <label>Account Role</label>
                                <input type="text" className="form-control" value="User" readonly style={{ backgroundColor: '#F8FAFC', color: 'var(--clr-text-light)' }} />
                            </div>

                            <h3 className="section-title">Security Settings</h3>
                            <p className="form-group full-width" style={{ color: 'var(--clr-text-light)', fontSize: '0.85rem', marginTop: '-1rem', marginBottom: '0.5rem' }}>Leave blank to keep your current password.</p>

                            <div className="form-group">
                                <label>New Password</label>
                                <input type="password" id="newPassword" className="form-control" placeholder="••••••••" />
                            </div>
                            
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password" id="confirmPassword" className="form-control" placeholder="••••••••" />
                            </div>
                            
                            <div className="form-group full-width" style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                                <button type="button" className="btn btn-outline" >Cancel</button>
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

export default SharedProfile;
