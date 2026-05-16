import React from 'react';
import { Link } from 'react-router-dom';

const SystemAppointments = () => {
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
            <li><Link to="/admin_dashboard"><i className="fa-solid fa-chart-line"></i> Control Center</Link></li>
            <li><Link to="/admin_doctors"><i className="fa-solid fa-user-doctor"></i> Manage Doctors</Link></li>
            <li><Link to="/admin_patients"><i className="fa-solid fa-users"></i> Manage Patients</Link></li>
            <li className="active"><Link to="/admin_appointments"><i className="fa-solid fa-calendar-check"></i> All Appointments</Link></li>
            <li><a href="#"><i className="fa-solid fa-shield-halved"></i> System Settings</a></li>
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
                <input type="text" placeholder="Search by Appointment ID..." />
            </div>
            <div className="header-actions">
                <div className="user-profile">
                    <img src="https://ui-avatars.com/api/?name=Admin+User&background=2D3748&color=fff" alt="Admin Avatar" />
                    <div className="user-info">
                        <h4>System Admin</h4>
                        <p>Superuser</p>
                    </div>
                </div>
            </div>
        </header>

        <div className="dashboard-content">
            <div className="appointments-card">
                
                {/*  Monitor System Header  */}
                <div className="header-controls">
                    <h2>System-Wide Appointments</h2>
                    <div className="monitor-stats">
                        <div className="monitor-stat">
                            <i className="fa-solid fa-spinner fa-spin-pulse"></i> Active Operations: 24
                        </div>
                        <div className="monitor-stat">
                            <i className="fa-solid fa-check-double"></i> Completion Rate: 98%
                        </div>
                    </div>
                </div>
                
                <div className="table-responsive">
                    <table className="appointment-table">
                        <thead>
                            <tr>
                                <th>Appt ID</th>
                                <th>Patient</th>
                                <th>Doctor</th>
                                <th>Date & Time</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span style={{ fontFamily: 'monospace', color: 'var(--clr-text-light)' }}>#APT-9001</span></td>
                                <td><strong>John Doe</strong></td>
                                <td>Dr. Sarah Jenkins</td>
                                <td>
                                    May 18, 2026<br />
                                    <span style={{ fontSize: '0.85rem', color: 'var(--clr-text-light)' }}>09:00 AM</span>
                                </td>
                                <td><span className="status-badge status-approved">Approved</span></td>
                                <td>
                                    <button className="btn-cancel-force" >Force Cancel</button>
                                </td>
                            </tr>

                            <tr>
                                <td><span style={{ fontFamily: 'monospace', color: 'var(--clr-text-light)' }}>#APT-9002</span></td>
                                <td><strong>Emma Watson</strong></td>
                                <td>Dr. Michael Chen</td>
                                <td>
                                    May 20, 2026<br />
                                    <span style={{ fontSize: '0.85rem', color: 'var(--clr-text-light)' }}>02:30 PM</span>
                                </td>
                                <td><span className="status-badge status-pending">Pending</span></td>
                                <td>
                                    <button className="btn-cancel-force" >Force Cancel</button>
                                </td>
                            </tr>
                            
                            <tr>
                                <td><span style={{ fontFamily: 'monospace', color: 'var(--clr-text-light)' }}>#APT-9003</span></td>
                                <td><strong>Robert Chen</strong></td>
                                <td>Dr. Emily Rose</td>
                                <td>
                                    April 10, 2026<br />
                                    <span style={{ fontSize: '0.85rem', color: 'var(--clr-text-light)' }}>11:00 AM</span>
                                </td>
                                <td><span className="status-badge status-cancelled">Cancelled</span></td>
                                <td>
                                    <button className="btn-cancel-force" disabled>Cancelled</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>

    

        </>
    );
};

export default SystemAppointments;
