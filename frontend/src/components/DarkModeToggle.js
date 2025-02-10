import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <button
      onClick={toggleDarkMode}
      className="btn btn-outline-primary ml-3"
      style={{ transition: "0.3s", borderRadius: "50%" }}
    >
      <i className={`fas ${darkMode ? "fa-moon" : "fa-sun"}`}></i>
    </button>
  );
};

export default DarkModeToggle;
