import React from "react";
import Destination from "../src/pages/Destinations";  // ✅ Ensure correct import
import Login from "./pages/Login";
import Footer from "./components/Footer";
import './styles/global.css';
import TravelCarousel from "./pages/TravelCarousel";
import Navbar from "./components/Navbar";
import { DarkModeProvider } from "./context/DarkModeContext"; // ✅ Import Provider

function App() {
    return (
        <div>
            {/* Favicon */}
            <link rel="icon" href="img/favicon.ico" />
            {/* Google Web Fonts */}
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
                rel="stylesheet"
            />

            {/* Font Awesome */}
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
                rel="stylesheet"
            />

            {/* Libraries Stylesheet */}
            <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
            <link
                href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css"
                rel="stylesheet"
            />
            <DarkModeProvider> {/* ✅ Wrap your app with this */}
                <Navbar />
                <TravelCarousel />
                <Destination />
                <Footer />
            </DarkModeProvider>
            {/* ✅ This should render the list */}
        </div>
    );
}

export default App;







// import React from "react";
// import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
// import AppNavbar from "./components/Navbar";
// import Destinations from "./pages/Destinations";
// import { motion } from "framer-motion";
// import { AuthProvider, AuthContext } from "./context/AuthContext";
// const pageVariants = {
//   initial: { opacity: 0, y: -20 },
//   in: { opacity: 1, y: 0 },
//   out: { opacity: 0, y: 20 }
// };

// const ProtectedRoute = ({ children }) => {
//   const { token } = useContext(AuthContext);
//   return token ? children : <Navigate to="/login" />;
// };

// const App = () => {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// };

// function App() {
//   return (
//       <AppNavbar />
//     // <Router>
//     //   <Routes>
//     //     <Route path="/destinations" element={
//     //       <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
//     //         <Destinations />
//     //       </motion.div>
//     //     } />
//     //     <Route path="/" element={
//     //       <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
//     //         <h2 className="text-center mt-4">Welcome to Nepali Travel App</h2>
//     //       </motion.div>
//     //     } />
//     //   </Routes>
//     // </Router>
//   );
// }

// export default App;
