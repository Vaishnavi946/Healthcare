const jwt = require("jsonwebtoken");
const prisma = require("../prismaClient");

const authPatient = async (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: "Unauthorized" });
  const token = auth.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const patient = await prisma.patient.findUnique({ where: { id: decoded.id } });
    if (!patient) return res.status(401).json({ error: "Invalid token" });
    req.patient = patient;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = { authPatient };
