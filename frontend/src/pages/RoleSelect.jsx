import { useNavigate } from "react-router-dom";

export default function RoleSelect() {
  const navigate = useNavigate();

  return (
    <div className="center" style={{ height: "100vh" }}>
      <div className="card" style={{ width: "350px", textAlign: "center" }}>
        <h2>Select Your Role</h2>

        <button
          className="btn-primary"
          style={{ width: "100%", marginTop: "20px" }}
          onClick={() => navigate("/patient/login")}
        >
          Patient
        </button>

        <button
          className="btn-secondary"
          style={{ width: "100%", marginTop: "15px" }}
          onClick={() => navigate("/doctor/login")}
        >
          Doctor
        </button>
      </div>
    </div>
  );
}
