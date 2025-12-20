const pool = require("../config/db");
const bcrypt = require("bcrypt");

// ================= PATIENT SIGNUP =================
const signup = async (req, res) => {
  const { name, email, password, phone } = req.body;

  try {
    // check existing
    const check = await pool.query(
      "SELECT id FROM patients WHERE email = $1",
      [email]
    );

    if (check.rows.length > 0) {
      return res.status(400).json({ message: "Patient already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      `INSERT INTO patients (name, email, password, phone)
       VALUES ($1, $2, $3, $4)
       RETURNING id, name, email, phone`,
      [name, email, hashedPassword, phone]
    );

    res.json({ patient: result.rows[0] });
  } catch (err) {
    console.error("PATIENT SIGNUP ERROR:", err);
    res.status(500).json({ message: "Signup failed" });
  }
};

// ================= PATIENT LOGIN =================
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query(
      "SELECT * FROM patients WHERE email = $1",
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const patient = result.rows[0];

    const isMatch = await bcrypt.compare(password, patient.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({
      patient: {
        id: patient.id,
        name: patient.name,
        email: patient.email,
        phone: patient.phone,
      },
    });
  } catch (err) {
    console.error("PATIENT LOGIN ERROR:", err);
    res.status(500).json({ message: "Login failed" });
  }
};

module.exports = { signup, login };
