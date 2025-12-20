import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Healthcare</h2>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/role-select" style={styles.link}>Get Started</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 40px",
    background: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  logo: { color: "#007bff" },
  link: {
    marginLeft: "20px",
    textDecoration: "none",
    color: "#333",
  },
};
