import { useEffect, useState } from "react";

export default function MyAppointments() {
  const [appointments, setAppointments] = useState([]);
  const patient = JSON.parse(localStorage.getItem("patient"));

  useEffect(() => {
    if (!patient) return;

    fetch(`http://localhost:4000/api/appointment/patient/${patient.id}`)
      .then(res => res.json())
      .then(data => {
        console.log("APPOINTMENTS:", data);
        setAppointments(data);
      })
      .catch(err => console.error(err));
  }, [patient]);

  return (
    <div style={{ padding: "30px" }}>
      <h2>My Appointments</h2>

      {appointments.length === 0 ? (
        <p>No appointments booked yet.</p>
      ) : (
        appointments.map(app => (
          <div key={app.id} style={card}>
            <h4>{app.name}</h4>
            <p>{app.specialization}</p>
            <p>Date: {app.appointment_date}</p>
            <p>Time: {app.appointment_time}</p>
          </div>
        ))
      )}
    </div>
  );
}

const card = {
  background: "#fff",
  padding: "15px",
  marginBottom: "10px",
  borderRadius: "8px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
};
