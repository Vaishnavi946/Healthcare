import { useNavigate } from "react-router-dom";

import { logout } from "../../utils/logout";

export default function PatientDashboard() {
  const navigate = useNavigate();
  const patient = JSON.parse(localStorage.getItem("patient"));

  const logout = () => {
    localStorage.removeItem("patient");
    navigate("/patient/login");
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Patient Dashboard</h1>

      {/* ✅ FIX: Welcome text INSIDE JSX */}
      <h2 style={{ marginBottom: "20px" }}>
        Welcome {patient?.name || "Patient"}
      </h2>

      <div style={styles.cards}>
        <div
          style={styles.card}
          onClick={() => navigate("/patient/book-appointment")}
        >
          📅 Book Appointment
        </div>

        {/* ✅ CONNECTED */}
        <div
          style={styles.card}
          onClick={() => navigate("/patient/appointments")}
        >
          📄 My Appointments
        </div>

        {/* ✅ CONNECTED */}
        <div
          style={styles.card}
          onClick={() => navigate("/patient/profile")}
        >
          👤 Profile
        </div>
      </div>
<button onClick={() => logout("patient")}>Logout</button>


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
const styles = {
  page: {
    padding: "40px",
    background: "#f8fafc",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "28px",
    marginBottom: "10px",
  },
  cards: {
    display: "flex",
    gap: "20px",
    marginBottom: "30px",
  },
  card: {
    background: "#fff",
    padding: "25px",
    width: "220px",
    borderRadius: "10px",
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    fontSize: "16px",
    textAlign: "center",
  },
  logout: {
    padding: "10px 20px",
    borderRadius: "6px",
    border: "1px solid #2563eb",
    background: "transparent",
    color: "#2563eb",
    cursor: "pointer",
  },
};
