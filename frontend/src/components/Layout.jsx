// src/components/Layout.jsx
import React from "react";

export default function Layout({ children }) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "0 20px" }}>
      {/* Navbar */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 0"
      }}>
        <h2>Healthcare</h2>
        <div>
          <button style={{ marginRight: "10px" }}>Login</button>
          <button>Signup</button>
        </div>
      </header>

      {/* Main content */}
      <main style={{ marginTop: "30px" }}>
        {children}
      </main>
    </div>
  );
}
