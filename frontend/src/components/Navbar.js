import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import DarkModeToggle from "./DarkModeToggle";
import { DarkModeContext } from "../context/DarkModeContext";

const Navbar = ({ onLoginClick }) => {
  const { darkMode } = useContext(DarkModeContext);
  const { token } = useContext(AuthContext); // ✅ Get token from AuthContext

  return (
    <>
      {/* Top Bar */}
      <div className={`container-fluid ${darkMode ? "bg-dark text-white" : "bg-light"} pt-3 d-none d-lg-block`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                <p><i className="fa fa-envelope mr-2"></i>info@techgaun.com</p>
                <p className="text-body px-3">|</p>
                <p><i className="fa fa-phone-alt mr-2"></i>+977 9867179133</p>
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
              <div className="d-inline-flex align-items-center">
                <a className="text-primary px-3" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="text-primary px-3" href="#"><i className="fab fa-twitter"></i></a>
                <a className="text-primary px-3" href="#"><i className="fab fa-linkedin-in"></i></a>
                <a className="text-primary px-3" href="#"><i className="fab fa-instagram"></i></a>
                <a className="text-primary pl-3" href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="container-fluid position-relative nav-bar p-0">
        <div className="container-lg position-relative p-0 px-lg-3" style={{ zIndex: 9 }}>
          <nav className={`navbar navbar-expand-lg ${darkMode ? "bg-dark navbar-dark" : "bg-light navbar-light"} shadow-lg py-3 py-lg-0 pl-3 pl-lg-5`}>
            <Link to="/" className="navbar-brand">
              <h1 className={`m-0 ${darkMode ? "text-light" : "text-primary"} fs-3 fs-lg-1`}>
                <span className={darkMode ? "text-white" : "text-dark"}>TRAVEL </span>NEPAL
              </h1>
            </Link>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
              <div className="navbar-nav ml-auto py-0">
                <Link to="/" className="nav-item nav-link">Home</Link>
                <Link to="/" className="nav-item nav-link">About</Link>
                <Link to="/" className="nav-item nav-link">Services</Link>
                <Link to="/" className="nav-item nav-link">Tour Packages</Link>

                {/* ✅ Show Login if not logged in, otherwise show Admin */}
                {!token ? (
                  <Link to="/login" className="nav-item nav-link" onClick={onLoginClick}>Login</Link>
                ) : (
                  <Link to="/admin" className="nav-item nav-link">Admin Panel</Link>
                )}

                <div className="nav-item d-flex align-items-center">
                  <DarkModeToggle />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;