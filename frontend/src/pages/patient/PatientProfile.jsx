import React from "react";

const PatientProfile = () => {
  const patient = JSON.parse(localStorage.getItem("patient"));

  if (!patient) {
    return <p style={{ textAlign: "center" }}>No patient data found</p>;
  }

  return (
    <div style={styles.card}>
      <h2>Patient Profile</h2>
      <p><b>Name:</b> {patient.name}</p>
      <p><b>Email:</b> {patient.email}</p>
      <p><b>Phone:</b> {patient.phone || "Not provided"}</p>
      <p><b>Age:</b> {patient.age || "Not provided"}</p>
    </div>
  );
};

const styles = {
  card: {
    padding: "20px",
    maxWidth: "400px",
    margin: "40px auto",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    background: "#fff"
  }
};

export default PatientProfile;
