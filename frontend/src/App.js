import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import RoleSelect from "./pages/RoleSelect";

/* PATIENT */
import PatientLogin from "./pages/patient/PatientLogin";
import PatientSignup from "./pages/patient/PatientSignup";
import PatientDashboard from "./pages/patient/PatientDashboard";
import BookAppointment from "./pages/patient/BookAppointment";
import MyAppointments from "./pages/patient/MyAppointments";
import PatientProfile from "./pages/patient/PatientProfile";

/* DOCTOR */
import DoctorLogin from "./pages/doctor/DoctorLogin";
import DoctorDashboard from "./pages/doctor/DoctorDashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />
        <Route path="/role-select" element={<RoleSelect />} />

        {/* PATIENT */}
        <Route path="/patient/login" element={<PatientLogin />} />
        <Route path="/patient/signup" element={<PatientSignup />} />
        <Route path="/patient/dashboard" element={<PatientDashboard />} />
        <Route path="/patient/book-appointment" element={<BookAppointment />} />
        <Route path="/patient/appointments" element={<MyAppointments />} />
        <Route path="/patient/profile" element={<PatientProfile />} />

        {/* DOCTOR */}
        <Route path="/doctor/login" element={<DoctorLogin />} />
        <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
