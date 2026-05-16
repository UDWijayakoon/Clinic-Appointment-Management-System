import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('patient');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const data = await api.login({ email, password, role });
            
            if (!data.user) {
                throw new Error("Login failed: User data not received from server.");
            }

            // Redirect based on role
            const userRole = data.user.role || 'patient';
            if (userRole === 'admin') {
                navigate('/admin_dashboard');
            } else if (userRole === 'doctor') {
                navigate('/doctor_dashboard');
            } else {
                navigate('/patient_dashboard');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-page" style={{ minHeight: '100vh', display: 'flex', backgroundColor: '#f8fafc' }}>
            {/* Left Side: Image & Branding */}
            <div className="auth-side-image" style={{ flex: '1.2', position: 'relative', display: 'none', lg: 'block', backgroundImage: 'url("/images/clinic_interior_lobby_1778886630119.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(11, 37, 69, 0.7)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '4rem', color: '#fff' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1.5rem' }}>Welcome to MediCore</h2>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.6', opacity: '0.9', maxWidth: '500px' }}>
                        Providing world-class healthcare through technology. Login to manage your appointments and health records seamlessly.
                    </p>
                </div>
            </div>

            {/* Right Side: Form */}
            <div className="auth-form-container" style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                <div className="auth-card" style={{ width: '100%', maxWidth: '450px', backgroundColor: '#fff', padding: '3rem', borderRadius: '24px', boxShadow: '0 20px 50px rgba(0,0,0,0.05)' }}>
                    <div className="auth-header" style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
                        <Link to="/" className="auth-logo" style={{ textDecoration: 'none', color: 'var(--clr-primary)', fontSize: '2rem', fontWeight: '800', marginBottom: '1rem', display: 'block' }}>
                            <i className="fa-solid fa-stethoscope" style={{ color: 'var(--clr-secondary)', marginRight: '0.5rem' }}></i>
                            MediCore
                        </Link>
                        <h2 style={{ fontSize: '1.75rem', color: '#1e293b', marginBottom: '0.5rem' }}>Login to Account</h2>
                        <p style={{ color: '#64748b' }}>Enter your credentials to continue</p>
                    </div>
                    
                    {error && <div style={{ color: '#e53e3e', backgroundColor: '#fed7d7', padding: '0.75rem', borderRadius: '12px', marginBottom: '1.5rem', fontSize: '0.9rem', textAlign: 'center' }}>{error}</div>}

                    <form className="auth-form" onSubmit={handleSubmit}>
                        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#475569' }}>Email Address</label>
                            <div className="input-with-icon" style={{ position: 'relative' }}>
                                <i className="fa-regular fa-envelope" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}></i>
                                <input 
                                    type="email" 
                                    id="email" 
                                    placeholder="name@example.com" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required 
                                    style={{ width: '100%', padding: '0.85rem 1rem 0.85rem 3rem', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none', transition: 'border-color 0.2s' }}
                                />
                            </div>
                        </div>

                        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                            <label htmlFor="role" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#475569' }}>Login As</label>
                            <div className="input-with-icon" style={{ position: 'relative' }}>
                                <i className="fa-solid fa-user-tag" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}></i>
                                <select 
                                    id="role" 
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    style={{ width: '100%', padding: '0.85rem 1rem 0.85rem 3rem', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none', backgroundColor: '#fff', cursor: 'pointer' }}
                                >
                                    <option value="patient">Patient</option>
                                    <option value="doctor">Doctor</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                            <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#475569' }}>Password</label>
                            <div className="input-with-icon" style={{ position: 'relative' }}>
                                <i className="fa-solid fa-lock" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}></i>
                                <input 
                                    type="password" 
                                    id="password" 
                                    placeholder="••••••••" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required 
                                    style={{ width: '100%', padding: '0.85rem 1rem 0.85rem 3rem', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none' }}
                                />
                            </div>
                        </div>
                        
                        <div className="auth-options" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', fontSize: '0.9rem' }}>
                            <label className="remember-me" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', color: '#64748b' }}>
                                <input type="checkbox" name="remember" style={{ width: '16px', height: '16px', borderRadius: '4px' }} /> Remember me
                            </label>
                            <a href="#" className="forgot-password" style={{ textDecoration: 'none', color: 'var(--clr-primary)', fontWeight: '500' }}>Forgot Password?</a>
                        </div>
                        
                        <button type="submit" className="btn btn-primary auth-btn" disabled={loading} style={{ width: '100%', padding: '1rem', borderRadius: '12px', fontSize: '1.1rem', fontWeight: '600', color: '#fff', backgroundColor: 'var(--clr-primary)', border: 'none', cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 10px 20px rgba(11, 37, 69, 0.15)' }}>
                            {loading ? 'Logging in...' : 'Login to Dashboard'}
                        </button>
                    </form>
                    
                    <div className="auth-footer" style={{ marginTop: '2rem', textAlign: 'center', color: '#64748b' }}>
                        <p>Don't have an account? <Link to="/register" style={{ textDecoration: 'none', color: 'var(--clr-primary)', fontWeight: '600' }}>Create account</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
