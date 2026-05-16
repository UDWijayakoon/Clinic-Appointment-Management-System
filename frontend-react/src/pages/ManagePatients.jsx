import React from 'react';
import { Link } from 'react-router-dom';

const ManagePatients = () => {
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
            <li className="active"><Link to="/admin_patients"><i className="fa-solid fa-users"></i> Manage Patients</Link></li>
            <li><Link to="/admin_appointments"><i className="fa-solid fa-calendar-check"></i> All Appointments</Link></li>
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
                <input type="text" placeholder="Search patients by name or ID..." />
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
            <div className="patients-card">
                <div className="header-controls">
                    <h2>Patient Directory</h2>
                    <button className="btn btn-outline">
                        <i className="fa-solid fa-download"></i> Export List
                    </button>
                </div>
                
                <div className="table-responsive">
                    <table className="patient-table">
                        <thead>
                            <tr>
                                <th>Patient Details</th>
                                <th>Contact Info</th>
                                <th>Registration Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="patient-cell">
                                        <img src="https://ui-avatars.com/api/?name=John+Doe&background=E8F0FE&color=0B2545" alt="Patient" />
                                        <div>
                                            <strong>John Doe</strong>
                                            <div style={{ fontSize: '0.8rem', color: 'var(--clr-text-light)' }}>ID: #PT-84729</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div style={{ fontSize: '0.9rem' }}>john.doe@example.com</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--clr-text-light)' }}>+1 (555) 123-4567</div>
                                </td>
                                <td>Jan 15, 2026</td>
                                <td><span className="status-badge status-active">Active</span></td>
                                <td>
                                    <div className="action-btns">
                                        <button className="btn-icon btn-view" title="View Details"><i className="fa-solid fa-eye"></i></button>
                                        <button className="btn-icon btn-block" title="Block User" ><i className="fa-solid fa-ban"></i></button>
                                        <button className="btn-icon btn-delete" title="Delete User" ><i className="fa-solid fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <div className="patient-cell">
                                        <img src="https://ui-avatars.com/api/?name=Emma+Watson&background=E8F0FE&color=0B2545" alt="Patient" />
                                        <div>
                                            <strong>Emma Watson</strong>
                                            <div style={{ fontSize: '0.8rem', color: 'var(--clr-text-light)' }}>ID: #PT-84730</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div style={{ fontSize: '0.9rem' }}>emma.w@example.com</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--clr-text-light)' }}>+1 (555) 234-5678</div>
                                </td>
                                <td>Feb 02, 2026</td>
                                <td><span className="status-badge status-active">Active</span></td>
                                <td>
                                    <div className="action-btns">
                                        <button className="btn-icon btn-view" title="View Details"><i className="fa-solid fa-eye"></i></button>
                                        <button className="btn-icon btn-block" title="Block User" ><i className="fa-solid fa-ban"></i></button>
                                        <button className="btn-icon btn-delete" title="Delete User" ><i className="fa-solid fa-trash"></i></button>
                                    </div>
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

export default ManagePatients;
