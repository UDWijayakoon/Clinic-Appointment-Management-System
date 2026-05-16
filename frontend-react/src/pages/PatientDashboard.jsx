import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { api } from '../services/api';

const PatientDashboard = () => {
    const [user, setUser] = useState(null);
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        setUser(storedUser);

        const fetchData = async () => {
            try {
                const data = await api.getAppointments();
                setAppointments(data.slice(0, 5)); // Show only latest 5
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <Layout role="patient" user={user}>
            <div className="welcome-banner">
                <div className="welcome-text">
                    <h1>Welcome back, {user?.name || 'Patient'}!</h1>
                    <p>You have {appointments.filter(a => a.status === 'pending').length} pending appointments. Stay updated with your health schedule.</p>
                </div>
                <Link to="/book_appointment" className="btn btn-primary">
                    <i className="fa-solid fa-plus"></i> Book New Appointment
                </Link>
            </div>

            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: 'rgba(58, 134, 255, 0.1)', color: 'var(--clr-primary)' }}>
                        <i className="fa-solid fa-calendar-check"></i>
                    </div>
                    <div className="stat-info">
                        <h3>{appointments.length}</h3>
                        <p>Total Appointments</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: 'rgba(56, 161, 105, 0.1)', color: '#38A169' }}>
                        <i className="fa-solid fa-clock-rotate-left"></i>
                    </div>
                    <div className="stat-info">
                        <h3>{appointments.filter(a => a.status === 'completed').length}</h3>
                        <p>Past Visits</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon" style={{ backgroundColor: 'rgba(214, 158, 46, 0.1)', color: '#D69E2E' }}>
                        <i className="fa-solid fa-hourglass-half"></i>
                    </div>
                    <div className="stat-info">
                        <h3>{appointments.filter(a => a.status === 'pending').length}</h3>
                        <p>Pending</p>
                    </div>
                </div>
            </div>

            <div className="dashboard-grid">
                <div className="card main-card">
                    <div className="card-header">
                        <h2>Upcoming Appointments</h2>
                        <Link to="/my_appointments" className="view-all">View All</Link>
                    </div>
                    <div className="table-responsive">
                        <table className="dashboard-table">
                            <thead>
                                <tr>
                                    <th>Doctor</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr><td colSpan="4" style={{ textAlign: 'center', padding: '2rem' }}>Loading appointments...</td></tr>
                                ) : appointments.length === 0 ? (
                                    <tr><td colSpan="4" style={{ textAlign: 'center', padding: '2rem' }}>No appointments found.</td></tr>
                                ) : (
                                    appointments.map((apt) => (
                                        <tr key={apt._id}>
                                            <td>
                                                <div className="user-cell">
                                                    <img src={`https://ui-avatars.com/api/?name=${apt.doctorName || 'Doctor'}&background=E8F0FE&color=0B2545`} alt="Doctor" />
                                                    <span>{apt.doctorName || 'Dr. Smith'}</span>
                                                </div>
                                            </td>
                                            <td>{new Date(apt.date).toLocaleDateString()}</td>
                                            <td>{apt.time}</td>
                                            <td><span className={`status-badge status-${apt.status.toLowerCase()}`}>{apt.status}</span></td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="card side-card">
                    <div className="card-header">
                        <h2>Health Profile</h2>
                        <Link to="/patient_profile" className="view-all">Edit</Link>
                    </div>
                    <div className="profile-summary">
                        <div className="profile-info-item">
                            <span className="label">Blood Group</span>
                            <span className="value">O+</span>
                        </div>
                        <div className="profile-info-item">
                            <span className="label">Height</span>
                            <span className="value">175 cm</span>
                        </div>
                        <div className="profile-info-item">
                            <span className="label">Weight</span>
                            <span className="value">70 kg</span>
                        </div>
                        <div className="profile-info-item">
                            <span className="label">Last Checkup</span>
                            <span className="value">12 May 2024</span>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default PatientDashboard;
