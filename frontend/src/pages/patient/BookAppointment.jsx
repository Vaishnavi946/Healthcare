import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookAppointment() {
  const navigate = useNavigate();
  const patient = JSON.parse(localStorage.getItem("patient"));

  const [doctors, setDoctors] = useState([]);
  const [doctorId, setDoctorId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/appointment/doctors")
      .then(res => res.json())
      .then(data => setDoctors(data))
      .catch(err => console.error(err));
  }, []);

  const bookAppointment = async () => {
    // ✅ ADDED: patient check
    if (!patient?.id) {
      alert("Please login again");
      navigate("/patient/login");
      return;
    }

    if (!doctorId || !date || !time) {
      alert("Please fill all fields");
      return;
    }

    await fetch("http://localhost:4000/api/appointment/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        patientId: patient.id,          // ✅ ensured
        doctorId: Number(doctorId),     // ✅ IMPORTANT FIX
        date,
        time,
      }),
    });

    alert("Appointment booked successfully");
    navigate("/patient/dashboard");
  };

  return (
    <div style={page}>
      <div style={card}>
        <h2>Book Appointment</h2>

        <select
          style={input}
          value={doctorId}
          onChange={(e) => setDoctorId(e.target.value)}
        >
          <option value="">Select Doctor</option>
          {doctors.map((doc) => (
            <option key={doc.id} value={doc.id}>
              {doc.name} ({doc.specialization})
            </option>
          ))}
        </select>

        <input
          style={input}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          style={input}
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <button style={btn} onClick={bookAppointment}>
          Book Appointment
        </button>

        <button style={linkBtn} onClick={() => navigate("/patient/dashboard")}>
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#f4f6f8",
};

const card = {
  background: "#fff",
  padding: "30px",
  width: "350px",
  borderRadius: "10px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const input = {
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const btn = {
  padding: "10px",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const linkBtn = {
  background: "transparent",
  border: "none",
  color: "#2563eb",
  cursor: "pointer",
};
