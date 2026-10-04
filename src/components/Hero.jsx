import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import BookingSearch from "./BookingSearch";
import { hotelInfo } from "../data/hotelInfo";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            {/* Luxury Badge */}
            <div className="hero-badge">
              <Sparkles size={16} />
              <span>5-Star Luxury in Central Bengaluru</span>
            </div>

            {/* Headline */}
            <h1 className="hero-title">
              Stay Comfortable. <br />
              <span>Experience Bengaluru.</span>
            </h1>

            {/* Short Hotel Description */}
            <p className="hero-description">
              Welcome to {hotelInfo.name} on prestigious Residency Road. Immerse
              yourself in unmatched five-star hospitality, lush garden serenity,
              Michelin-curated gastronomy, and modern architectural elegance.
            </p>

            {/* Quick Action CTA Buttons */}
            <div className="hero-cta-group">
              <Link to="/rooms" className="btn btn-primary btn-lg">
                <span>Explore Rooms</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn btn-outline-light btn-lg">
                <span>Discover Hotel</span>
              </Link>
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap", fontSize: "0.85rem", color: "#D3DDE8" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                <ShieldCheck size={16} color="var(--champagne-gold)" /> Best Direct Rate Guarantee
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                <Sparkles size={16} color="var(--champagne-gold)" /> Free High-Speed Fiber WiFi
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                <ShieldCheck size={16} color="var(--champagne-gold)" /> Free Cancellation Available
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Booking Search Bar */}
      <div className="container booking-search-wrapper">
        <BookingSearch />
      </div>
    </>
  );
}
