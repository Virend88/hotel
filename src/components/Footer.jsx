import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Hotel,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { hotelInfo } from "../data/hotelInfo";
import { roomsData } from "../data/rooms";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim() && newsletterEmail.includes("@")) {
      setSubscribed(true);
      setNewsletterEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div>
            <div className="brand-logo" style={{ marginBottom: "1.25rem" }}>
              <div className="brand-icon">
                <Hotel size={24} />
              </div>
              <div className="brand-text">
                <span className="brand-name">{hotelInfo.name}</span>
                <span className="brand-tagline">Bengaluru, Karnataka</span>
              </div>
            </div>

            <p style={{ fontSize: "0.9rem", color: "#94A3B8", lineHeight: 1.6, marginBottom: "1.5rem" }}>
              An oasis of contemporary five-star indulgence, intuitive Indian
              hospitality, and bespoke architectural serenity in the heart of
              India's Silicon Valley.
            </p>

            <div style={{ fontSize: "0.85rem", color: "var(--gold-primary)", fontWeight: 600 }}>
              ★ 5-Star Luxury Certified Property
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Navigation</h4>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">Home</Link>
              </li>
              <li>
                <Link to="/rooms" className="footer-link">Rooms & Suites</Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">About Hotel</Link>
              </li>
              <li>
                <Link to="/gallery" className="footer-link">Photo Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">Contact & Inquiries</Link>
              </li>
              <li>
                <Link to="/booking" className="footer-link">Book Online</Link>
              </li>
            </ul>
          </div>

          {/* Room Categories */}
          <div>
            <h4 className="footer-col-title">Our Rooms</h4>
            <ul className="footer-links">
              {roomsData.map((room) => (
                <li key={room.id}>
                  <Link to={`/rooms/${room.id}`} className="footer-link">
                    {room.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="footer-col-title">Contact & Location</h4>
            <div className="footer-contact-item">
              <MapPin size={18} className="icon" />
              <span>{hotelInfo.location.address}, {hotelInfo.location.city} {hotelInfo.location.pincode}</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} className="icon" />
              <span>{hotelInfo.contact.phone}</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} className="icon" />
              <span>{hotelInfo.contact.email}</span>
            </div>
            <div className="footer-contact-item">
              <Clock size={18} className="icon" />
              <span>Check-in: {hotelInfo.contact.checkInTime} | Check-out: {hotelInfo.contact.checkOutTime}</span>
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <span style={{ fontSize: "0.85rem", color: "#CBD5E1", fontWeight: 600 }}>
                Receive Exclusive Privileges & Offers
              </span>
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="newsletter-input"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-primary btn-sm" aria-label="Subscribe">
                  <ArrowRight size={16} />
                </button>
              </form>
              {subscribed && (
                <p style={{ color: "var(--success)", fontSize: "0.8rem", marginTop: "0.5rem", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                  <CheckCircle2 size={14} /> Thank you! You're subscribed to luxury privileges.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} {hotelInfo.name}. All rights reserved. Designed for Frontend Portfolio.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <span style={{ cursor: "pointer" }}>Privacy Policy</span>
            <span style={{ cursor: "pointer" }}>Terms of Service</span>
            <span style={{ cursor: "pointer" }}>Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
