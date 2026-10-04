import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import RoomDetails from "./pages/RoomDetails";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";

// 404 Not Found Page Component
function NotFound() {
  return (
    <div
      className="container"
      style={{
        textAlign: "center",
        padding: "8rem 1.5rem",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <span className="section-subtitle">404 Error</span>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        Page Not Found
      </h1>
      <p style={{ color: "var(--text-muted)", maxWidth: "500px", marginBottom: "2rem" }}>
        The luxury suite or page you are searching for does not exist or has been relocated.
      </p>
      <Link to="/" className="btn btn-primary btn-lg">
        Return to Grand Horizon Home
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        {/* Sticky Luxury Navbar */}
        <Navbar />

        {/* Dynamic Route Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/rooms/:id" element={<RoomDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}
