import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { api } from '../services/api';

const ManageDoctors = () => {
    const [user, setUser] = useState(null);
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        setUser(storedUser);

        // Fetch all doctors from the backend (assuming /api/doctors endpoint)
        const fetchDoctors = async () => {
            try {
                // For the purpose of this demo, we'll use a mocked list if the endpoint isn't fully ready
                const response = await fetch('http://localhost:5000/api/doctors');
                const data = await response.json();
                setDoctors(data);
            } catch (err) {
                // Fallback for demonstration
                setDoctors([
                    { id: 'DOC001', name: 'Dr. Sarah Jenkins', speciality: 'Cardiology', email: 'sarah.j@medicore.com', status: 'Active' },
                    { id: 'DOC002', name: 'Dr. Michael Chen', speciality: 'General Practice', email: 'm.chen@medicore.com', status: 'Active' },
                    { id: 'DOC003', name: 'Dr. Emily Rose', speciality: 'Dentistry', email: 'emily.r@medicore.com', status: 'On Leave' }
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchDoctors();
    }, []);

    return (
        <Layout role="admin" user={user}>
            <div className="card">
                <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2>Medical Staff Directory</h2>
                    <button className="btn btn-primary"><i className="fa-solid fa-plus"></i> Add New Doctor</button>
                </div>
                <div className="table-responsive">
                    <table className="dashboard-table">
                        <thead>
                            <tr>
                                <th>Doctor</th>
                                <th>Speciality</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {doctors.map((doc, index) => (
                                <tr key={index}>
                                    <td>
                                        <div className="user-cell">
                                            <img src={`https://ui-avatars.com/api/?name=${doc.name}&background=E8F0FE&color=0B2545`} alt="Doctor" />
                                            <span>{doc.name}</span>
                                        </div>
                                    </td>
                                    <td>{doc.speciality}</td>
                                    <td>{doc.email}</td>
                                    <td><span className={`status-badge ${doc.status === 'Active' ? 'status-approved' : 'status-pending'}`}>{doc.status}</span></td>
                                    <td>
                                        <button className="btn btn-sm btn-outline" style={{ marginRight: '0.5rem' }}>Edit</button>
                                        <button className="btn btn-sm btn-outline" style={{ color: '#E53E3E', borderColor: '#E53E3E' }}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
};

export default ManageDoctors;
