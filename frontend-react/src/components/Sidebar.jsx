import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ role }) => {
    const location = useLocation();

    const menuItems = {
        patient: [
            { path: '/patient_dashboard', icon: 'fa-chart-line', label: 'Dashboard' },
            { path: '/book_appointment', icon: 'fa-calendar-plus', label: 'Book Appointment' },
            { path: '/my_appointments', icon: 'fa-calendar-check', label: 'My Appointments' },
            { path: '/patient_profile', icon: 'fa-user-gear', label: 'Profile Settings' },
        ],
        doctor: [
            { path: '/doctor_dashboard', icon: 'fa-chart-line', label: 'Dashboard' },
            { path: '/doctor_appointments', icon: 'fa-calendar-check', label: 'Appointments' },
            { path: '/doctor_profile', icon: 'fa-user-md', label: 'Profile Settings' },
        ],
        admin: [
            { path: '/admin_dashboard', icon: 'fa-chart-line', label: 'Control Center' },
            { path: '/admin_doctors', icon: 'fa-user-doctor', label: 'Manage Doctors' },
            { path: '/admin_patients', icon: 'fa-users', label: 'Manage Patients' },
            { path: '/admin_appointments', icon: 'fa-calendar-check', label: 'All Appointments' },
            { path: '/profile', icon: 'fa-shield-halved', label: 'System Settings' },
        ]
    };

    const items = menuItems[role] || [];

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <Link to="/" className="sidebar-logo">
                    <i className="fa-solid fa-stethoscope"></i>
                    <span>MediCore</span>
                </Link>
            </div>
            <ul className="sidebar-menu">
                {items.map((item) => (
                    <li key={item.path} className={location.pathname === item.path ? 'active' : ''}>
                        <Link to={item.path}>
                            <i className={`fa-solid ${item.icon}`}></i> {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="sidebar-footer">
                <Link to="/login" className="logout-btn"><i className="fa-solid fa-right-from-bracket"></i> Logout</Link>
            </div>
        </aside>
    );
};

export default Sidebar;
