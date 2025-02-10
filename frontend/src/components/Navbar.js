import React, { useContext } from "react";
import DarkModeToggle from "./DarkModeToggle"; // Import Toggle
import { DarkModeContext } from "../context/DarkModeContext"; // Import Dark Mode Context

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext); // ✅ Use DarkModeContext

  return (
    <>
      {/* Topbar Start */}
      <div className={`container-fluid ${darkMode ? "bg-dark text-white" : "bg-light"} pt-3 d-none d-lg-block`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                <p>
                  <i className="fa fa-envelope mr-2"></i>info@example.com
                </p>
                <p className="text-body px-3">|</p>
                <p>
                  <i className="fa fa-phone-alt mr-2"></i>+012 345 6789
                </p>
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
              <div className="d-inline-flex align-items-center">
                <a className="text-primary px-3" href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="text-primary px-3" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="text-primary px-3" href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a className="text-primary px-3" href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="text-primary pl-3" href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <div className="container-fluid position-relative nav-bar p-0">
        <div className="container-lg position-relative p-0 px-lg-3" style={{ zIndex: 9 }}>
          <nav className={`navbar navbar-expand-lg ${darkMode ? "bg-dark navbar-dark" : "bg-light navbar-light"} shadow-lg py-3 py-lg-0 pl-3 pl-lg-5`}>
            <a href="#" className="navbar-brand">
              <h1 className={`m-0 ${darkMode ? "text-light" : "text-primary"}`}>
                <span className={darkMode ? "text-white" : "text-dark"}>NEPAL TRAVEL </span>DESTINATION
              </h1>
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
              <div className="navbar-nav ml-auto py-0">
                <a href="index.html" className="nav-item nav-link active">Home</a>
                <a href="about.html" className="nav-item nav-link">About</a>
                <a href="service.html" className="nav-item nav-link">Services</a>
                <a href="package.html" className="nav-item nav-link">Tour Packages</a>
                <a href="contact.html" className="nav-item nav-link">Contact</a>

                {/* Dark Mode Toggle placed here */}
                <div className="nav-item d-flex align-items-center">
                  <DarkModeToggle />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}
    </>
  );
};

export default Navbar;
