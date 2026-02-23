import { useState } from "react";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
style= {{
        backgroundColor: darkMode ? "#121212" : "#f5f5f5",
        color: darkMode ? "#ffffff" : "#111111",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
        fontFamily: "Arial, sans-serif",
      }} 
    >
      <h1>{darkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}</h1>
      <p>Welcome to my portfolio!</p>

      <button
        onClick={toggleDarkMode}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          marginTop: "20px",
          cursor: "pointer",
          backgroundColor: darkMode ? "#333" : "#ddd",
          color: darkMode ? "#fff" : "#111",
          border: "none",
          borderRadius: "5px",
        }}
      >
        {darkMode ? "Switch to Light Mode ☀️" : "Switch to Dark Mode 🌙"}
      </button>
    </div>
  );
}

export default DarkModeToggle;