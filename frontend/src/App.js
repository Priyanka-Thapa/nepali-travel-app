import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppNavbar from "./components/Navbar";
import Destinations from "./pages/Destinations";
import { motion } from "framer-motion";


const pageVariants = {
  initial: { opacity: 0, y: -20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: 20 }
};

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/destinations" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
            <Destinations />
          </motion.div>
        } />
        <Route path="/" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
            <h2 className="text-center mt-4">Welcome to Nepali Travel App</h2>
          </motion.div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
