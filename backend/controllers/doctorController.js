const pool = require("../config/db");

const loginDoctor = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query(
      "SELECT id, name, specialization, email, password FROM doctors WHERE email = $1",
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const doctor = result.rows[0];

    // plain password check (as per your DB)
    if (doctor.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({
      doctor: {
        id: doctor.id,
        name: doctor.name,
        email: doctor.email,
        specialization: doctor.specialization
      }
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Login failed" });
  }
};

module.exports = { loginDoctor };
