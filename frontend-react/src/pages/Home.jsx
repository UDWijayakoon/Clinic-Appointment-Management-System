import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            <nav className="navbar" style={{ padding: '1rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'var(--clr-white)', boxShadow: 'var(--shadow-sm)' }}>
                <div className="nav-brand" style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--clr-primary)' }}>
                    <i className="fa-solid fa-stethoscope" style={{ color: 'var(--clr-secondary)', marginRight: '0.5rem' }}></i>
                    MediCore
                </div>
                <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <a href="#services" style={{ textDecoration: 'none', color: 'var(--clr-text-main)', fontWeight: '500' }}>Services</a>
                    <a href="#about" style={{ textDecoration: 'none', color: 'var(--clr-text-main)', fontWeight: '500' }}>About Us</a>
                    <Link to="/login" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', borderRadius: '50px', textDecoration: 'none', color: '#fff', backgroundColor: 'var(--clr-primary)' }}>Login / Register</Link>
                </div>
            </nav>

            <header className="hero" style={{ padding: '5rem 5%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'var(--clr-bg)' }}>
                <div className="hero-content" style={{ maxWidth: '600px' }}>
                    <h1 style={{ fontSize: '3.5rem', color: 'var(--clr-primary)', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                        Modern Healthcare,<br />Compassionate Care.
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--clr-text-light)', marginBottom: '2rem', lineHeight: '1.6' }}>
                        Book your appointments online, manage your health records, and connect with top-tier medical professionals anytime, anywhere. Experience the future of clinic management with MediCore.
                    </p>
                    <div className="hero-buttons" style={{ display: 'flex', gap: '1rem' }}>
                        <Link to="/login" className="btn btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem', borderRadius: '8px', textDecoration: 'none', color: '#fff', backgroundColor: 'var(--clr-primary)' }}>
                            Book an Appointment
                        </Link>
                        <a href="#services" className="btn btn-outline" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem', borderRadius: '8px', textDecoration: 'none', color: 'var(--clr-primary)', border: '2px solid var(--clr-primary)' }}>
                            Explore Services
                        </a>
                    </div>
                </div>
                <div className="hero-image" style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
                    <img 
                        src="/images/clinic_hero_image_1778886325578.png" 
                        alt="Medical Professionals" 
                        style={{ width: '100%', maxWidth: '600px', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
                    />
                </div>
            </header>

            <section id="services" style={{ padding: '5rem 5%', backgroundColor: 'var(--clr-white)', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', color: 'var(--clr-primary)', marginBottom: '3rem' }}>Our Premium Services</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    <div style={{ padding: '2rem', borderRadius: '16px', backgroundColor: 'var(--clr-bg)', boxShadow: 'var(--shadow-sm)' }}>
                        <i className="fa-solid fa-calendar-check" style={{ fontSize: '3rem', color: 'var(--clr-accent)', marginBottom: '1rem' }}></i>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--clr-primary)' }}>Easy Booking</h3>
                        <p style={{ color: 'var(--clr-text-light)' }}>Schedule appointments with just a few clicks. Real-time availability tracking.</p>
                    </div>
                    <div style={{ padding: '2rem', borderRadius: '16px', backgroundColor: 'var(--clr-bg)', boxShadow: 'var(--shadow-sm)' }}>
                        <i className="fa-solid fa-file-medical" style={{ fontSize: '3rem', color: 'var(--clr-accent)', marginBottom: '1rem' }}></i>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--clr-primary)' }}>Digital Records</h3>
                        <p style={{ color: 'var(--clr-text-light)' }}>Access your medical history securely from anywhere, anytime.</p>
                    </div>
                    <div style={{ padding: '2rem', borderRadius: '16px', backgroundColor: 'var(--clr-bg)', boxShadow: 'var(--shadow-sm)' }}>
                        <i className="fa-solid fa-user-doctor" style={{ fontSize: '3rem', color: 'var(--clr-accent)', marginBottom: '1rem' }}></i>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--clr-primary)' }}>Expert Doctors</h3>
                        <p style={{ color: 'var(--clr-text-light)' }}>Consult with our team of experienced and specialized medical professionals.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
