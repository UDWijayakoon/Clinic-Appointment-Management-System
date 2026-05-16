import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { api } from '../services/api';

const MyAppointments = () => {
    const [user, setUser] = useState(null);
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        setUser(storedUser);

        const fetchAppointments = async () => {
            try {
                const data = await api.getAppointments();
                setAppointments(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchAppointments();
    }, []);

    const handleCancel = async (id) => {
        if (!window.confirm("Are you sure you want to cancel this appointment?")) return;

        try {
            await api.updateAppointment(id, { status: 'cancelled' });
            setAppointments(appointments.map(a => a._id === id ? { ...a, status: 'cancelled' } : a));
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <Layout role="patient" user={user}>
            <div className="card">
                <div className="card-header">
                    <h2>My Appointment History</h2>
                </div>
                <div className="table-responsive">
                    <table className="dashboard-table">
                        <thead>
                            <tr>
                                <th>Doctor</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Reason</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr><td colSpan="6" style={{ textAlign: 'center', padding: '2rem' }}>Loading appointments...</td></tr>
                            ) : appointments.length === 0 ? (
                                <tr><td colSpan="6" style={{ textAlign: 'center', padding: '2rem' }}>You have no appointments.</td></tr>
                            ) : (
                                appointments.map((apt) => (
                                    <tr key={apt._id}>
                                        <td>{apt.doctorName}</td>
                                        <td>{new Date(apt.date).toLocaleDateString()}</td>
                                        <td>{apt.time}</td>
                                        <td>{apt.reason}</td>
                                        <td><span className={`status-badge status-${apt.status.toLowerCase()}`}>{apt.status}</span></td>
                                        <td>
                                            {apt.status === 'pending' && (
                                                <button 
                                                    className="btn btn-sm" 
                                                    style={{ backgroundColor: '#E53E3E', color: 'white', border: 'none', padding: '0.4rem 0.8rem', borderRadius: '4px', cursor: 'pointer' }}
                                                    onClick={() => handleCancel(apt._id)}
                                                >
                                                    Cancel
                                                </button>
                                            )}
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

export default MyAppointments;
