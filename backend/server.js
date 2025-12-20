const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
const doctorRoutes = require("./routes/doctorRoutes");

app.use("/api/doctor", require("./routes/doctorRoutes"));
app.use("/api/appointment", require("./routes/appointmentRoutes"));
app.use("/api/patient", require("./routes/patientRoutes"));

app.get("/", (req, res) => res.send("API running"));

app.listen(4000, () => console.log("Server running on 4000"));
