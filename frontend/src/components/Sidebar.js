import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/sidebar.css";

const Sidebar = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <h3 className="text-center py-3">Admin Panel</h3>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/admin" className="nav-link">🏠 Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/destinations" className="nav-link">📍 Destinations</Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/settings" className="nav-link">⚙️ Settings</Link>
        </li>
        <li className="nav-item">
          <button className="btn btn-danger w-100 mt-3" onClick={handleLogout}>🚪 Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
