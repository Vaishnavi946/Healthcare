const pool = require("../config/db");

// GET DOCTORS
exports.getDoctors = async (req, res) => {
  const result = await pool.query("SELECT * FROM doctors");
  res.json(result.rows);
};

// BOOK APPOINTMENT
exports.bookAppointment = async (req, res) => {
  const { patientId, doctorId, date, time } = req.body;

  await pool.query(
    `INSERT INTO appointments (patient_id, doctor_id, appointment_date, appointment_time)
     VALUES ($1,$2,$3,$4)`,
    [patientId, doctorId, date, time]
  );

  res.json({ message: "Appointment booked" });
};

// GET PATIENT APPOINTMENTS
exports.getAppointments = async (req, res) => {
  const { patientId } = req.params;

  const result = await pool.query(
    `SELECT a.*, d.name AS doctor_name
     FROM appointments a
     JOIN doctors d ON a.doctor_id = d.id
     WHERE patient_id=$1`,
    [patientId]
  );

  res.json(result.rows);
};

// CANCEL
exports.cancelAppointment = async (req, res) => {
  await pool.query(
    "UPDATE appointments SET status='Cancelled' WHERE id=$1",
    [req.params.id]
  );
  res.json({ message: "Cancelled" });
};

// RESCHEDULE
exports.rescheduleAppointment = async (req, res) => {
  const { date, time } = req.body;

  await pool.query(
    `UPDATE appointments
     SET appointment_date=$1, appointment_time=$2
     WHERE id=$3`,
    [date, time, req.params.id]
  );

  res.json({ message: "Rescheduled" });
};
