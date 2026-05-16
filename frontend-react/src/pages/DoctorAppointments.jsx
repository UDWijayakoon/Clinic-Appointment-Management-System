import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { api } from '../services/api';

const DoctorAppointments = () => {
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

    const updateStatus = async (id, newStatus) => {
        try {
            await api.updateAppointment(id, { status: newStatus });
            setAppointments(appointments.map(a => a._id === id ? { ...a, status: newStatus } : a));
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <Layout role="doctor" user={user}>
            <div className="card">
                <div className="card-header">
                    <h2>Manage Patient Appointments</h2>
                </div>
                <div className="table-responsive">
                    <table className="dashboard-table">
                        <thead>
                            <tr>
                                <th>Patient</th>
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
                                <tr><td colSpan="6" style={{ textAlign: 'center', padding: '2rem' }}>No patient appointments found.</td></tr>
                            ) : (
                                appointments.map((apt) => (
                                    <tr key={apt._id}>
                                        <td>{apt.patientName}</td>
                                        <td>{new Date(apt.date).toLocaleDateString()}</td>
                                        <td>{apt.time}</td>
                                        <td>{apt.reason}</td>
                                        <td><span className={`status-badge status-${apt.status.toLowerCase()}`}>{apt.status}</span></td>
                                        <td>
                                            {apt.status === 'pending' && (
                                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                                    <button 
                                                        className="btn btn-sm" 
                                                        style={{ backgroundColor: '#38A169', color: 'white', border: 'none', padding: '0.4rem 0.8rem', borderRadius: '4px', cursor: 'pointer' }}
                                                        onClick={() => updateStatus(apt._id, 'approved')}
                                                    >
                                                        Approve
                                                    </button>
                                                    <button 
                                                        className="btn btn-sm" 
                                                        style={{ backgroundColor: '#E53E3E', color: 'white', border: 'none', padding: '0.4rem 0.8rem', borderRadius: '4px', cursor: 'pointer' }}
                                                        onClick={() => updateStatus(apt._id, 'cancelled')}
                                                    >
                                                        Reject
                                                    </button>
                                                </div>
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

export default DoctorAppointments;
