import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { api } from '../services/api';

const AdminDashboard = () => {
    const [user, setUser] = useState(null);
    const [stats, setStats] = useState({
        patients: 124,
        doctors: 18,
        appointments: 450,
        uptime: '99.9%'
    });

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        setUser(storedUser);
    }, []);

    const statCards = [
        { label: 'Total Patients', value: stats.patients, icon: 'fa-users', color: '#3A86FF' },
        { label: 'Total Doctors', value: stats.doctors, icon: 'fa-user-doctor', color: '#38A169' },
        { label: 'Total Appointments', value: stats.appointments, icon: 'fa-calendar-check', color: '#D69E2E' },
        { label: 'System Uptime', value: stats.uptime, icon: 'fa-server', color: '#718096' }
    ];

    return (
        <Layout role="admin" user={user}>
            <div className="stats-grid">
                {statCards.map((stat, i) => (
                    <div key={i} className="stat-card">
                        <div className="stat-icon" style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
                            <i className={`fa-solid ${stat.icon}`}></i>
                        </div>
                        <div className="stat-info">
                            <h3>{stat.value}</h3>
                            <p>{stat.label}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="dashboard-grid" style={{ marginTop: '2rem' }}>
                <div className="card main-card">
                    <div className="card-header">
                        <h2>Recent System Activity</h2>
                    </div>
                    <ul className="activity-list" style={{ listStyle: 'none', padding: '1rem' }}>
                        <li style={{ padding: '1rem 0', borderBottom: '1px solid #eee', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <i className="fa-solid fa-user-plus" style={{ color: '#38A169' }}></i>
                            <div>
                                <p style={{ margin: 0, fontWeight: 500 }}>New Patient Registered</p>
                                <p style={{ margin: 0, fontSize: '0.85rem', color: '#666' }}>2 minutes ago</p>
                            </div>
                        </li>
                        <li style={{ padding: '1rem 0', borderBottom: '1px solid #eee', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <i className="fa-solid fa-calendar-check" style={{ color: '#3A86FF' }}></i>
                            <div>
                                <p style={{ margin: 0, fontWeight: 500 }}>Appointment Booked #APT-9042</p>
                                <p style={{ margin: 0, fontSize: '0.85rem', color: '#666' }}>15 minutes ago</p>
                            </div>
                        </li>
                        <li style={{ padding: '1rem 0', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <i className="fa-solid fa-triangle-exclamation" style={{ color: '#E53E3E' }}></i>
                            <div>
                                <p style={{ margin: 0, fontWeight: 500 }}>Failed Login Attempt</p>
                                <p style={{ margin: 0, fontSize: '0.85rem', color: '#666' }}>1 hour ago</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="card side-card">
                    <div className="card-header">
                        <h2>Quick Actions</h2>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1.5rem' }}>
                        <Link to="/admin_doctors" className="btn btn-primary" style={{ textAlign: 'center' }}>Add New Doctor</Link>
                        <Link to="/admin_patients" className="btn btn-outline" style={{ textAlign: 'center' }}>Review Patient Logs</Link>
                        <Link to="/profile" className="btn btn-outline" style={{ textAlign: 'center' }}>System Settings</Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AdminDashboard;
