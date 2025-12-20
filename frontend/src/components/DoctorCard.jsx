export default function DoctorCard({ doctor }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "20px",
      margin: "10px",
      width: "250px",
      textAlign: "center"
    }}>
      <h3>{doctor.name}</h3>
      <p>Specialization: {doctor.specialization}</p>
      <p>Fees: ₹{doctor.fees}</p>
      <button style={{
        padding: "8px 12px",
        marginTop: "10px",
        background: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer"
      }}>
        Book Appointment
      </button>
    </div>
  );
}
