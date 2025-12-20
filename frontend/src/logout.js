export function logout() {
  localStorage.removeItem("patient");
  localStorage.removeItem("doctor");
  window.location.href = "/";
}
