import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DoctorLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:4000/api/doctor/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Invalid credentials");
      return;
    }

    // ✅ SAVE LOGGED-IN DOCTOR
    localStorage.setItem("doctor", JSON.stringify(data.doctor));

    // ✅ GO TO DASHBOARD
    navigate("/doctor/dashboard");
  };

  return (
    <div style={page}>
      <form style={card} onSubmit={submit}>
        <h2>Doctor Login</h2>

        <input
          style={input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          style={input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button style={btn} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#f1f5f9",
};

const card = {
  background: "#fff",
  padding: "30px",
  width: "320px",
  borderRadius: "10px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  textAlign: "center",
};

const input = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const btn = {
  width: "100%",
  padding: "10px",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};
