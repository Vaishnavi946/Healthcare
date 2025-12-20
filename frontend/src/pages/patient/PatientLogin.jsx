import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function PatientLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
  e.preventDefault();

  const res = await fetch("http://localhost:4000/api/patient/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  console.log("LOGIN RESPONSE:", data);

  if (res.ok && data.patient) {
    localStorage.setItem("patient", JSON.stringify(data.patient));
    navigate("/patient/dashboard");
  } else {
    alert(data.message || "Login failed");
  }
};

  return (
    <div style={styles.page}>
      <form onSubmit={submit} style={styles.card}>
        <h2 style={styles.title}>Patient Login</h2>

        <input
          style={styles.input}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button style={styles.button}>Login</button>

        <p style={styles.text}>
          Don’t have an account?{" "}
          <Link to="/patient/signup" style={styles.link}>
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f1f5f9",
  },
  card: {
    background: "#fff",
    padding: "30px",
    width: "320px",
    borderRadius: "10px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginBottom: "10px",
  },
  text: {
    fontSize: "14px",
    marginTop: "10px",
  },
  link: {
    color: "#2563eb",
    textDecoration: "none",
    fontWeight: "500",
  },
};
