export default function logout(role = "patient") {
  if (role === "doctor") {
    localStorage.removeItem("doctor");
  } else {
    localStorage.removeItem("patient");
  }

  window.location.href = "/";
}
