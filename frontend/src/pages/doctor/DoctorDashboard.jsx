import { useEffect, useState } from "react";
import logout from "../../utils/logout";

export default function DoctorDashboard() {
  const [appointments, setAppointments] = useState([]);
  const doctor = JSON.parse(localStorage.getItem("doctor"));

  useEffect(() => {
    if (!doctor) return;

    fetch(`http://localhost:4000/api/appointment/doctor/${doctor.id}`)
      .then(res => res.json())
      .then(data => setAppointments(data))
      .catch(err => console.error(err));
  }, [doctor]);

  if (!doctor) {
    return <h2 style={{ textAlign: "center" }}>Please login again</h2>;
  }

  return (
    <div style={page}>
      <div style={card}>
        <h2>Doctor Dashboard</h2>
        <p><b>Name:</b> {doctor.name}</p>
        <p><b>Email:</b> {doctor.email}</p>

        <h3 style={{ marginTop: "20px" }}>Appointments</h3>

        {appointments.length === 0 ? (
          <p>No appointments yet.</p>
        ) : (
          appointments.map(a => (
            <div key={a.id} style={apptCard}>
              <p><b>Patient:</b> {a.patient_name}</p>
              <p><b>Phone:</b> {a.patient_phone}</p>
              <p><b>Date:</b> {a.appointment_date}</p>
              <p><b>Time:</b> {a.appointment_time}</p>
            </div>
          ))
        )}

        <button style={logoutBtn} onClick={() => logout("doctor")}>
          Logout
        </button>
      </div>
    </div>
  );
}
const logoutBtn = {
  marginTop: "20px",
  width: "100%",
  padding: "10px",
  background: "#ef4444",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};


const page = {
  minHeight: "100vh",
  background: "#f1f5f9",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const card = {
  background: "#fff",
  padding: "30px",
  width: "420px",
  borderRadius: "10px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
};

const apptCard = {
  background: "#f8fafc",
  padding: "10px",
  borderRadius: "6px",
  marginBottom: "10px"
};
