import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { api } from '../services/api';

const DoctorDashboard = () => {
    const [user, setUser] = useState(null);
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        setUser(storedUser);

        const fetchData = async () => {
            try {
                const data = await api.getAppointments();
                setAppointments(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const stats = [
        { label: 'Total Patients', value: '42', icon: 'fa-users', color: '#3A86FF' },
        { label: "Today's Appts", value: appointments.filter(a => new Date(a.date).toDateString() === new Date().toDateString()).length, icon: 'fa-calendar-day', color: '#38A169' },
        { label: 'Pending Requests', value: appointments.filter(a => a.status === 'pending').length, icon: 'fa-clock', color: '#D69E2E' }
    ];

    return (
        <Layout role="doctor" user={user}>
            <div className="stats-grid">
                {stats.map((stat, i) => (
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

            <div className="card" style={{ marginTop: '2rem' }}>
                <div className="card-header">
                    <h2>Today's Schedule</h2>
                    <Link to="/doctor_appointments" className="view-all">Manage All</Link>
                </div>
                <div className="table-responsive">
                    <table className="dashboard-table">
                        <thead>
                            <tr>
                                <th>Patient</th>
                                <th>Time</th>
                                <th>Reason</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr><td colSpan="5" style={{ textAlign: 'center', padding: '2rem' }}>Loading schedule...</td></tr>
                            ) : appointments.length === 0 ? (
                                <tr><td colSpan="5" style={{ textAlign: 'center', padding: '2rem' }}>No appointments scheduled.</td></tr>
                            ) : (
                                appointments.slice(0, 5).map((apt) => (
                                    <tr key={apt._id}>
                                        <td>
                                            <div className="user-cell">
                                                <img src={`https://ui-avatars.com/api/?name=${apt.patientName || 'Patient'}&background=E8F0FE&color=0B2545`} alt="Patient" />
                                                <span>{apt.patientName || 'Anonymous'}</span>
                                            </div>
                                        </td>
                                        <td>{apt.time}</td>
                                        <td>{apt.reason || 'General Checkup'}</td>
                                        <td><span className={`status-badge status-${apt.status.toLowerCase()}`}>{apt.status}</span></td>
                                        <td>
                                            <Link to="/doctor_appointments" className="btn btn-sm btn-outline">Details</Link>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
};

export default DoctorDashboard;
