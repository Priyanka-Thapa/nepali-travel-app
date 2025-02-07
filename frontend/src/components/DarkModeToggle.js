import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Button } from "react-bootstrap";

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <Button
      onClick={() => setDarkMode(!darkMode)}
      variant={darkMode ? "light" : "dark"}
      className="dark-mode-toggle"
    >
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </Button>
  );
};

export default DarkModeToggle;
