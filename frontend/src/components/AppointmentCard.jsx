import React, { useState } from "react";

function AppointmentCard({ appointment, refreshAppointments }) {
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");

  // Cancel appointment
  const handleCancel = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/appointments/cancel/${appointment.id}`, {
        method: "PUT",
      });
      const data = await response.json();
      alert(data.message);

      // Remove canceled appointment from screen
      refreshAppointments();
    } catch (err) {
      console.error("Error canceling appointment:", err);
    }
  };

  // Reschedule appointment
  const handleReschedule = async () => {
    if (!newDate || !newTime) return alert("Please select new date and time");

    try {
      const response = await fetch(`http://localhost:4000/api/appointments/reschedule/${appointment.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newDate, newTime }),
      });
      const data = await response.json();
      alert(data.message);

      setNewDate("");
      setNewTime("");
      refreshAppointments(); // Updates appointment on screen
    } catch (err) {
      console.error("Error rescheduling appointment:", err);
    }
  };

  return (
    <div className="border p-3 mb-3 rounded shadow-sm">
      <p><strong>Doctor:</strong> {appointment.doctorname}</p>
      <p><strong>Date:</strong> {new Date(appointment.date).toLocaleDateString()}</p>
      <p><strong>Time:</strong> {appointment.time}</p>
      <p><strong>Status:</strong> {appointment.status}</p>

      {appointment.status !== "canceled" && (
        <>
          <button className="btn btn-danger me-2" onClick={handleCancel}>
            Cancel
          </button>

          <div className="mt-2">
            <input
              type="date"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
              className="form-control mb-1"
            />
            <input
              type="time"
              value={newTime}
              onChange={(e) => setNewTime(e.target.value)}
              className="form-control mb-1"
            />
            <button className="btn btn-warning btn-sm" onClick={handleReschedule}>
              Reschedule
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default AppointmentCard;
