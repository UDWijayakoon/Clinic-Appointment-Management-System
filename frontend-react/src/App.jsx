import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import PatientDashboard from './pages/PatientDashboard';
import BookAppointment from './pages/BookAppointment';
import MyAppointments from './pages/MyAppointments';
import PatientProfile from './pages/PatientProfile';
import DoctorDashboard from './pages/DoctorDashboard';
import DoctorAppointments from './pages/DoctorAppointments';
import DoctorProfile from './pages/DoctorProfile';
import AdminDashboard from './pages/AdminDashboard';
import ManageDoctors from './pages/ManageDoctors';
import ManagePatients from './pages/ManagePatients';
import SystemAppointments from './pages/SystemAppointments';
import SharedProfile from './pages/SharedProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Navigate to="/" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Patient Routes */}
        <Route path="/patient_dashboard" element={<PatientDashboard />} />
        <Route path="/book_appointment" element={<BookAppointment />} />
        <Route path="/my_appointments" element={<MyAppointments />} />
        <Route path="/patient_profile" element={<PatientProfile />} />
        
        {/* Doctor Routes */}
        <Route path="/doctor_dashboard" element={<DoctorDashboard />} />
        <Route path="/doctor_appointments" element={<DoctorAppointments />} />
        <Route path="/doctor_profile" element={<DoctorProfile />} />
        
        {/* Admin Routes */}
        <Route path="/admin_dashboard" element={<AdminDashboard />} />
        <Route path="/admin_doctors" element={<ManageDoctors />} />
        <Route path="/admin_patients" element={<ManagePatients />} />
        <Route path="/admin_appointments" element={<SystemAppointments />} />
        
        {/* Shared */}
        <Route path="/profile" element={<SharedProfile />} />
        
        {/* Catch-all 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
