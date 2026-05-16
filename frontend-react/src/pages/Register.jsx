import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        gender: '',
        password: '',
        role: 'patient'
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            await api.register(formData);
            setSuccess('Registration successful! Redirecting to login...');
            setTimeout(() => navigate('/login'), 2000);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-page" style={{ minHeight: '100vh', display: 'flex', backgroundColor: '#f8fafc' }}>
            {/* Left Side: Image & Branding */}
            <div className="auth-side-image" style={{ flex: '1', position: 'relative', display: 'none', lg: 'block', backgroundImage: 'url("/images/clinic_interior_lobby_1778886630119.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(11, 37, 69, 0.7)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '4rem', color: '#fff' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1.5rem' }}>Join MediCore</h2>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.6', opacity: '0.9', maxWidth: '500px' }}>
                        Create an account to access specialized medical care, manage your health history, and book appointments with top doctors in seconds.
                    </p>
                </div>
            </div>

            {/* Right Side: Form */}
            <div className="auth-form-container" style={{ flex: '1.2', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                <div className="auth-card register-card" style={{ width: '100%', maxWidth: '550px', backgroundColor: '#fff', padding: '3rem', borderRadius: '24px', boxShadow: '0 20px 50px rgba(0,0,0,0.05)' }}>
                    <div className="auth-header" style={{ marginBottom: '2rem', textAlign: 'center' }}>
                        <Link to="/" className="auth-logo" style={{ textDecoration: 'none', color: 'var(--clr-primary)', fontSize: '2rem', fontWeight: '800', marginBottom: '1rem', display: 'block' }}>
                            <i className="fa-solid fa-stethoscope" style={{ color: 'var(--clr-secondary)', marginRight: '0.5rem' }}></i>
                            MediCore
                        </Link>
                        <h2 style={{ fontSize: '1.75rem', color: '#1e293b', marginBottom: '0.5rem' }}>Create Patient Account</h2>
                        <p style={{ color: '#64748b' }}>Fill in your details to get started</p>
                    </div>
                    
                    {error && <div style={{ color: '#e53e3e', backgroundColor: '#fed7d7', padding: '0.75rem', borderRadius: '12px', marginBottom: '1.5rem', fontSize: '0.9rem', textAlign: 'center' }}>{error}</div>}
                    {success && <div style={{ color: '#2f855a', backgroundColor: '#c6f6d5', padding: '0.75rem', borderRadius: '12px', marginBottom: '1.5rem', fontSize: '0.9rem', textAlign: 'center' }}>{success}</div>}

                    <form className="auth-form" onSubmit={handleSubmit}>
                        <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#475569' }}>Full Name</label>
                            <div className="input-with-icon" style={{ position: 'relative' }}>
                                <i className="fa-regular fa-user" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}></i>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    placeholder="e.g. John Doe" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    required 
                                    style={{ width: '100%', padding: '0.85rem 1rem 0.85rem 3rem', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none' }}
                                />
                            </div>
                        </div>
                        
                        <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#475569' }}>Email Address</label>
                            <div className="input-with-icon" style={{ position: 'relative' }}>
                                <i className="fa-regular fa-envelope" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}></i>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    placeholder="name@example.com" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required 
                                    style={{ width: '100%', padding: '0.85rem 1rem 0.85rem 3rem', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none' }}
                                />
                            </div>
                        </div>
                        
                        <div className="form-row" style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                            <div className="form-group" style={{ flex: 1 }}>
                                <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#475569' }}>Phone Number</label>
                                <div className="input-with-icon" style={{ position: 'relative' }}>
                                    <i className="fa-solid fa-phone" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}></i>
                                    <input 
                                        type="tel" 
                                        id="phone" 
                                        name="phone" 
                                        placeholder="07x xxxxxxx" 
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required 
                                        style={{ width: '100%', padding: '0.85rem 1rem 0.85rem 3rem', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none' }}
                                    />
                                </div>
                            </div>
                            
                            <div className="form-group" style={{ flex: 1 }}>
                                <label htmlFor="gender" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#475569' }}>Gender</label>
                                <div className="input-with-icon" style={{ position: 'relative' }}>
                                    <i className="fa-solid fa-venus-mars" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}></i>
                                    <select 
                                        id="gender" 
                                        name="gender" 
                                        value={formData.gender}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', padding: '0.85rem 1rem 0.85rem 3rem', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none', backgroundColor: '#fff' }}
                                    >
                                        <option value="" disabled>Select</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="form-group" style={{ marginBottom: '2rem' }}>
                            <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#475569' }}>Password</label>
                            <div className="input-with-icon" style={{ position: 'relative' }}>
                                <i className="fa-solid fa-lock" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}></i>
                                <input 
                                    type="password" 
                                    id="password" 
                                    name="password" 
                                    placeholder="••••••••" 
                                    value={formData.password}
                                    onChange={handleChange}
                                    required 
                                    style={{ width: '100%', padding: '0.85rem 1rem 0.85rem 3rem', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none' }}
                                />
                            </div>
                        </div>
                        
                        <button type="submit" className="btn btn-primary auth-btn" disabled={loading} style={{ width: '100%', padding: '1rem', borderRadius: '12px', fontSize: '1.1rem', fontWeight: '600', color: '#fff', backgroundColor: 'var(--clr-primary)', border: 'none', cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 10px 20px rgba(11, 37, 69, 0.15)' }}>
                            {loading ? 'Creating Account...' : 'Register as Patient'}
                        </button>
                    </form>
                    
                    <div className="auth-footer" style={{ marginTop: '2rem', textAlign: 'center', color: '#64748b' }}>
                        <p>Already have an account? <Link to="/login" style={{ textDecoration: 'none', color: 'var(--clr-primary)', fontWeight: '600' }}>Login here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
