import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PatientSignup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const submit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:4000/api/patient/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Account created successfully");
      navigate("/patient/login");
    } else {
      alert(data.message || "Signup failed");
    }
  };

  return (
    <div style={styles.page}>
      <form onSubmit={submit} style={styles.card}>
        <h2 style={styles.title}>Patient Signup</h2>

        <input
          style={styles.input}
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        <input
          style={styles.input}
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <input
          style={styles.input}
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          required
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        <button style={styles.button}>Create Account</button>
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
  },
  title: {
    textAlign: "center",
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
  },
};
