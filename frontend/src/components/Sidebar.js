import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/sidebar.css";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const Sidebar = () => {
  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
    window.location.href = BASE_URL; // Redirect manually
  };

  return (
    <div className="sidebar">
      <h3 className="text-center py-3">Admin Panel</h3>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/admin" className="nav-link">🏠 Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">📍 Destinations</Link>
        </li>
        {/* <li className="nav-item">
          <Link to="/admin/settings" className="nav-link">⚙️ Settings</Link>
        </li> */}
        <li className="nav-item">
          <button className="btn btn-danger w-100 mt-3" onClick={handleLogout}>🚪 Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
