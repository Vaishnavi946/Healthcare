import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      {/* NAVBAR */}
      <nav style={styles.nav}>
        <h2 style={styles.logo}>HealthCare+</h2>
        <button style={styles.loginBtn} onClick={() => navigate("/role-select")}>
          Login / Signup
        </button>
      </nav>

      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>
          Book Doctor Appointments <br /> Anytime, Anywhere
        </h1>
        <p style={styles.heroText}>
          Find trusted doctors, book appointments instantly, and manage your
          healthcare online.
        </p>
        <button style={styles.primaryBtn} onClick={() => navigate("/role-select")}>
          Get Started
        </button>
      </section>

      {/* ROLE SELECTION */}
      <section style={styles.roleSection}>
        <h2 style={styles.sectionTitle}>Choose Your Role</h2>

        <div style={styles.cards}>
          <div style={styles.card} onClick={() => navigate("/doctor/login")}>
            <h3>👨‍⚕️ Doctor</h3>
            <p>Manage appointments, patients, and availability</p>
          </div>

          <div style={styles.card} onClick={() => navigate("/patient/login")}>
            <h3>🧑‍💼 Patient</h3>
            <p>Search doctors and book appointments easily</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={styles.features}>
        <div style={styles.featureCard}>
          <h4>⏱ Fast Booking</h4>
          <p>Book appointments in just a few clicks</p>
        </div>
        <div style={styles.featureCard}>
          <h4>🔒 Secure Data</h4>
          <p>Your medical data is safe and protected</p>
        </div>
        <div style={styles.featureCard}>
          <h4>📅 Easy Management</h4>
          <p>Doctors & patients manage schedules easily</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © 2025 HealthCare+ | All Rights Reserved
      </footer>
    </div>
  );
};

export default Home;

/* ================= STYLES ================= */

const styles = {
  page: {
    fontFamily: "Segoe UI, sans-serif",
    backgroundColor: "#f9fafb",
    minHeight: "100vh",
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  },

  logo: {
    color: "#2563eb",
    fontSize: "24px",
    fontWeight: "700",
  },

  loginBtn: {
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    padding: "10px 18px",
    borderRadius: "6px",
    cursor: "pointer",
  },

  hero: {
    textAlign: "center",
    padding: "90px 20px",
    background: "linear-gradient(135deg, #2563eb, #1e40af)",
    color: "#fff",
  },

  heroTitle: {
    fontSize: "42px",
    fontWeight: "700",
    marginBottom: "20px",
  },

  heroText: {
    fontSize: "18px",
    maxWidth: "650px",
    margin: "0 auto 30px",
    lineHeight: "1.6",
  },

  primaryBtn: {
    backgroundColor: "#fff",
    color: "#2563eb",
    border: "none",
    padding: "14px 28px",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },

  roleSection: {
    padding: "70px 20px",
    textAlign: "center",
  },

  sectionTitle: {
    fontSize: "30px",
    marginBottom: "40px",
  },

  cards: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
  },

  card: {
    backgroundColor: "#ffffff",
    padding: "30px",
    width: "260px",
    borderRadius: "12px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    cursor: "pointer",
    transition: "transform 0.2s",
  },

  features: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    padding: "60px 20px",
    backgroundColor: "#eef2ff",
    flexWrap: "wrap",
  },

  featureCard: {
    backgroundColor: "#ffffff",
    padding: "25px",
    borderRadius: "10px",
    width: "230px",
    textAlign: "center",
    boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
  },

  footer: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#1e293b",
    color: "#fff",
    marginTop: "40px",
  },
};
