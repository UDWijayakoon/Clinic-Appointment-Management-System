const API_URL = 'http://localhost:5000/api';

const getAuthHeader = () => {
    const token = localStorage.getItem('token');
    return token ? { 'Authorization': `Bearer ${token}` } : {};
};

export const api = {
    // Auth
    login: async (credentials) => {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || 'Login failed');
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        return data;
    },

    register: async (userData) => {
        const response = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || 'Registration failed');
        return data;
    },

    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    },

    // Appointments
    getAppointments: async () => {
        const response = await fetch(`${API_URL}/appointments`, {
            headers: { ...getAuthHeader() }
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || 'Failed to fetch appointments');
        return data;
    },

    bookAppointment: async (appointmentData) => {
        const response = await fetch(`${API_URL}/appointments`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                ...getAuthHeader()
            },
            body: JSON.stringify(appointmentData)
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || 'Failed to book appointment');
        return data;
    },

    updateAppointment: async (id, statusData) => {
        const response = await fetch(`${API_URL}/appointments/${id}`, {
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json',
                ...getAuthHeader()
            },
            body: JSON.stringify(statusData)
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || 'Failed to update appointment');
        return data;
    },

    // User Profile
    getProfile: async (role) => {
        const response = await fetch(`${API_URL}/${role}s/profile`, {
            headers: { ...getAuthHeader() }
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || 'Failed to fetch profile');
        return data;
    }
};
