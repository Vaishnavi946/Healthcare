const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// GET DOCTORS
router.get("/doctors", async (req, res) => {
  const result = await pool.query(
    "SELECT id, name, specialization FROM doctors ORDER BY id"
  );
  res.json(result.rows);
});

// PATIENT APPOINTMENTS
router.get("/patient/:id", async (req, res) => {
  const result = await pool.query(
    `SELECT 
      a.id,
      d.name AS doctor_name,
      d.specialization,
      a.appointment_date,
      a.appointment_time
     FROM appointments a
     JOIN doctors d ON a.doctor_id = d.id
     WHERE a.patient_id = $1`,
    [req.params.id]
  );
  res.json(result.rows);
});

// DOCTOR APPOINTMENTS
router.get("/doctor/:id", async (req, res) => {
  const result = await pool.query(
    `SELECT
      a.id,
      p.name AS patient_name,
      p.phone AS patient_phone,
      a.appointment_date,
      a.appointment_time
     FROM appointments a
     JOIN patients p ON a.patient_id = p.id
     WHERE a.doctor_id = $1
     ORDER BY a.appointment_date, a.appointment_time`,
    [req.params.id]
  );
  res.json(result.rows);
});

// BOOK APPOINTMENT
router.post("/book", async (req, res) => {
  const { patientId, doctorId, date, time } = req.body;

  await pool.query(
    `INSERT INTO appointments (patient_id, doctor_id, appointment_date, appointment_time)
     VALUES ($1, $2, $3, $4)`,
    [patientId, doctorId, date, time]
  );

  res.json({ message: "Appointment booked" });
});

module.exports = router;
