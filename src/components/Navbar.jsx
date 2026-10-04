import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Hotel, Menu, X, Calendar } from "lucide-react";
import { hotelInfo } from "../data/hotelInfo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-inner">
          {/* Hotel Brand Logo */}
          <Link to="/" className="brand-logo" onClick={closeMobileMenu}>
            <div className="brand-icon">
              <Hotel size={24} />
            </div>
            <div className="brand-text">
              <span className="brand-name">{hotelInfo.name}</span>
              <span className="brand-tagline">Bengaluru • 5-Star Luxury</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav>
            <ul className="nav-menu">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/rooms"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Rooms
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="nav-actions">
            <Link to="/booking" className="btn btn-primary btn-sm btn-book-nav">
              <Calendar size={16} />
              <span>Book Your Stay</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-toggle-btn"
              onClick={toggleMobileMenu}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <ul className="mobile-nav-list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "mobile-nav-link active" : "mobile-nav-link"
              }
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/rooms"
              className={({ isActive }) =>
                isActive ? "mobile-nav-link active" : "mobile-nav-link"
              }
              onClick={closeMobileMenu}
            >
              Rooms & Suites
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "mobile-nav-link active" : "mobile-nav-link"
              }
              onClick={closeMobileMenu}
            >
              About Hotel
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive ? "mobile-nav-link active" : "mobile-nav-link"
              }
              onClick={closeMobileMenu}
            >
              Photo Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "mobile-nav-link active" : "mobile-nav-link"
              }
              onClick={closeMobileMenu}
            >
              Contact & Location
            </NavLink>
          </li>
        </ul>

        <Link
          to="/booking"
          className="btn btn-primary btn-lg"
          onClick={closeMobileMenu}
        >
          <Calendar size={18} />
          <span>Book Your Stay Now</span>
        </Link>
      </div>
    </header>
  );
}
