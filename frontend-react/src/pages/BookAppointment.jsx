import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { api } from '../services/api';

const BookAppointment = () => {
    const [user, setUser] = useState(null);
    const [formData, setFormData] = useState({
        doctorName: '',
        date: '',
        time: '',
        reason: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        setUser(storedUser);
    }, []);

    const timeSlots = [
        '09:00 AM', '09:30 AM', '10:00 AM', '11:00 AM',
        '01:30 PM', '02:00 PM', '03:30 PM', '04:00 PM'
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.time) {
            alert("Please select a time slot");
            return;
        }
        setLoading(true);

        try {
            await api.bookAppointment(formData);
            setSuccess(true);
            setTimeout(() => navigate('/my_appointments'), 2000);
        } catch (err) {
            alert(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout role="patient" user={user}>
            <div className="dashboard-content">
                <div className="booking-form-card" style={{ backgroundColor: 'white', padding: '2.5rem', borderRadius: '20px', boxShadow: 'var(--shadow-sm)' }}>
                    <h2 style={{ marginBottom: '2rem', color: 'var(--clr-primary)' }}>Book a New Appointment</h2>
                    
                    {success ? (
                        <div style={{ textAlign: 'center', padding: '3rem' }}>
                            <i className="fa-solid fa-circle-check" style={{ fontSize: '4rem', color: '#38A169', marginBottom: '1.5rem' }}></i>
                            <h3>Booking Confirmed!</h3>
                            <p>Your appointment has been successfully scheduled. Redirecting...</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <h3 className="form-section-title" style={{ fontSize: '1.1rem', color: 'var(--clr-text-light)', borderBottom: '1px solid #eee', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>1. Doctor & Speciality</h3>
                            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Select Doctor</label>
                                <select 
                                    className="form-control" 
                                    value={formData.doctorName}
                                    onChange={(e) => setFormData({ ...formData, doctorName: e.target.value })}
                                    required
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E2E8F0' }}
                                >
                                    <option value="" disabled>Choose a specialist...</option>
                                    <option value="Dr. Sarah Jenkins">Dr. Sarah Jenkins (Cardiology)</option>
                                    <option value="Dr. Michael Chen">Dr. Michael Chen (General Practice)</option>
                                    <option value="Dr. Emily Rose">Dr. Emily Rose (Dentistry)</option>
                                    <option value="Dr. Amit Patel">Dr. Amit Patel (Neurology)</option>
                                </select>
                            </div>

                            <h3 className="form-section-title" style={{ fontSize: '1.1rem', color: 'var(--clr-text-light)', borderBottom: '1px solid #eee', paddingBottom: '0.5rem', marginBottom: '1.5rem', marginTop: '2rem' }}>2. Date & Time</h3>
                            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Select Date</label>
                                <input 
                                    type="date" 
                                    className="form-control" 
                                    value={formData.date}
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    required 
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E2E8F0' }}
                                />
                            </div>
                            
                            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Select Time Slot</label>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '0.75rem' }}>
                                    {timeSlots.map((slot) => (
                                        <div 
                                            key={slot}
                                            onClick={() => setFormData({ ...formData, time: slot })}
                                            style={{
                                                padding: '0.75rem',
                                                textAlign: 'center',
                                                borderRadius: '8px',
                                                border: '1px solid #E2E8F0',
                                                cursor: 'pointer',
                                                transition: 'all 0.2s',
                                                backgroundColor: formData.time === slot ? 'var(--clr-primary)' : 'white',
                                                color: formData.time === slot ? 'white' : 'var(--clr-text-main)',
                                                fontWeight: 500
                                            }}
                                        >
                                            {slot}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <h3 className="form-section-title" style={{ fontSize: '1.1rem', color: 'var(--clr-text-light)', borderBottom: '1px solid #eee', paddingBottom: '0.5rem', marginBottom: '1.5rem', marginTop: '2rem' }}>3. Additional Information</h3>
                            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Reason for Visit</label>
                                <textarea 
                                    className="form-control" 
                                    placeholder="Briefly describe your symptoms..." 
                                    value={formData.reason}
                                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                                    required
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E2E8F0', minHeight: '100px' }}
                                ></textarea>
                            </div>

                            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                                <button type="button" onClick={() => navigate('/patient_dashboard')} className="btn btn-outline" style={{ padding: '0.75rem 2rem', borderRadius: '8px', cursor: 'pointer' }}>Cancel</button>
                                <button type="submit" className="btn btn-primary" disabled={loading} style={{ padding: '0.75rem 2rem', borderRadius: '8px', cursor: 'pointer', backgroundColor: 'var(--clr-primary)', color: 'white', border: 'none' }}>
                                    {loading ? 'Booking...' : 'Confirm Booking'}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default BookAppointment;
