import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Users,
  BedDouble,
  Maximize2,
  Eye,
  Star,
  CheckCircle2,
  ShieldCheck,
  Calendar,
  ArrowLeft,
  Sparkles,
  Wifi,
  Wind,
  Tv,
  Coffee,
  Droplets,
  Bell,
  Wine,
  Award,
  Briefcase,
  Music,
  UserCheck,
  UtensilsCrossed,
  Waves,
  Key,
  Crown,
  Car,
  Heart,
  Gamepad2,
  Moon
} from "lucide-react";
import { getRoomById, roomsData } from "../data/rooms";
import { hotelInfo } from "../data/hotelInfo";
import RoomCard from "../components/RoomCard";

// Icon mapping dictionary
const iconMap = {
  Wifi,
  Wind,
  Tv,
  Coffee,
  Droplets,
  Bell,
  Wine,
  ShieldCheck,
  Sparkles,
  Award,
  Briefcase,
  Music,
  UserCheck,
  UtensilsCrossed,
  Waves,
  Key,
  Crown,
  Car,
  Heart,
  Gamepad2,
  Moon
};

export default function RoomDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const room = getRoomById(id);

  // Active gallery image
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Reset active image when id changes
  useEffect(() => {
    setActiveImageIndex(0);
  }, [id]);

  if (!room) {
    return (
      <div className="container" style={{ padding: "6rem 1.5rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Room Not Found</h2>
        <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>
          We could not locate the room you are looking for.
        </p>
        <Link to="/rooms" className="btn btn-primary">
          <ArrowLeft size={18} />
          <span>Back to All Rooms</span>
        </Link>
      </div>
    );
  }

  // Format currency
  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(room.price);

  // Other related rooms
  const otherRooms = roomsData.filter((r) => r.id !== room.id).slice(0, 3);

  return (
    <div className="room-details-page">
      {/* Breadcrumb Bar */}
      <div style={{ backgroundColor: "var(--secondary-navy)", borderBottom: "1px solid rgba(201, 169, 110, 0.2)", padding: "1.25rem 0", color: "#D3DDE8", fontSize: "0.85rem" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Link to="/" style={{ color: "#D3DDE8" }}>Home</Link>
          <span>/</span>
          <Link to="/rooms" style={{ color: "#D3DDE8" }}>Rooms & Suites</Link>
          <span>/</span>
          <span style={{ color: "var(--champagne-gold)", fontWeight: 600 }}>{room.name}</span>
        </div>
      </div>

      {/* Hero Header */}
      <section
        className="room-details-hero"
        style={{ backgroundImage: `url('${room.gallery[activeImageIndex] || room.image}')` }}
      >
        <div className="container">
          <div className="room-details-hero-content">
            {room.badge && (
              <span className="badge badge-gold" style={{ marginBottom: "1rem" }}>
                {room.badge}
              </span>
            )}
            <h1 style={{ fontSize: "3rem", color: "#FFFFFF", marginBottom: "0.5rem" }}>
              {room.name}
            </h1>
            <p style={{ fontSize: "1.2rem", color: "#CBD5E1", maxWidth: "680px", margin: 0 }}>
              {room.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Main Details Body */}
      <div className="container">
        <div className="room-details-layout">
          {/* Left Column: Images, Specs, Narrative, Amenities */}
          <div>
            {/* Gallery Thumbnail Strip */}
            <div style={{ marginTop: "2rem" }}>
              <h4 style={{ fontSize: "1.1rem", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <Eye size={18} color="var(--gold-primary)" /> Room Photography Gallery ({room.gallery.length} Views)
              </h4>
              <div className="room-gallery-thumbs">
                {room.gallery.map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className={`thumb-item ${activeImageIndex === idx ? "active" : ""}`}
                    onClick={() => setActiveImageIndex(idx)}
                    title={`View photo ${idx + 1}`}
                  >
                    <img src={imgUrl} alt={`${room.name} view ${idx + 1}`} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>

            {/* Room Specifications Strip */}
            <div className="spec-strip">
              <div className="spec-strip-item">
                <div className="spec-strip-label">Max Occupancy</div>
                <div className="spec-strip-value" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.3rem" }}>
                  <Users size={16} color="var(--gold-dark)" /> {room.capacity} Guests
                </div>
              </div>
              <div className="spec-strip-item">
                <div className="spec-strip-label">Bedding Type</div>
                <div className="spec-strip-value" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.3rem" }}>
                  <BedDouble size={16} color="var(--gold-dark)" /> {room.bedType}
                </div>
              </div>
              <div className="spec-strip-item">
                <div className="spec-strip-label">Room Area</div>
                <div className="spec-strip-value" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.3rem" }}>
                  <Maximize2 size={16} color="var(--gold-dark)" /> {room.roomSize}
                </div>
              </div>
              <div className="spec-strip-item">
                <div className="spec-strip-label">Guest Rating</div>
                <div className="spec-strip-value" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.3rem" }}>
                  <Star size={16} fill="var(--champagne-gold)" color="var(--champagne-gold)" /> {room.rating} ({room.reviewCount} reviews)
                </div>
              </div>
            </div>

            {/* Room Narrative Description */}
            <div style={{ marginBottom: "3rem" }}>
              <h3 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>
                Experience Refined Comfort
              </h3>
              <p style={{ fontSize: "1.05rem", color: "var(--text-body)", lineHeight: 1.8 }}>
                {room.description}
              </p>
              <p style={{ fontSize: "1rem", color: "var(--text-body)", lineHeight: 1.8 }}>
                Every element has been custom-commissioned for {hotelInfo.name},
                from the acoustic soundproofing that shields you from city buzz to
                the Italian marble bathroom fitted with rainfall showers and plush
                robes. Wake up refreshed and savor morning Bengaluru sunrises.
              </p>
            </div>

            {/* Room Amenities Section */}
            <div style={{ marginBottom: "3rem" }}>
              <h3 style={{ fontSize: "1.75rem", marginBottom: "1.25rem" }}>
                Included Room Amenities
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                  gap: "1rem"
                }}
              >
                {room.amenities.map((amenity, idx) => {
                  const IconComp = iconMap[amenity.icon] || Sparkles;
                  return (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        padding: "0.85rem 1rem",
                        backgroundColor: "var(--bg-card)",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid var(--border-light)"
                      }}
                    >
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "50%",
                          backgroundColor: "var(--gold-light)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "var(--gold-dark)"
                        }}
                      >
                        <IconComp size={18} />
                      </div>
                      <span style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--text-dark)" }}>
                        {amenity.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Complimentary Privileges & Perks */}
            <div style={{ marginBottom: "3rem", backgroundColor: "var(--bg-subtle)", padding: "2rem", borderRadius: "var(--radius-md)" }}>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Sparkles size={20} color="var(--gold-dark)" /> Complimentary Privileges with this Room
              </h3>
              <ul className="details-perks-list">
                {room.perks.map((perk, idx) => (
                  <li key={idx} className="details-perk-item">
                    <CheckCircle2 size={18} className="check-icon" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cancellation Policy */}
            <div style={{ borderLeft: "4px solid var(--gold-primary)", padding: "1rem 1.5rem", backgroundColor: "var(--bg-card)", borderRadius: "0 var(--radius-sm) var(--radius-sm) 0" }}>
              <h4 style={{ fontSize: "1rem", color: "var(--text-dark)", marginBottom: "0.25rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <ShieldCheck size={18} color="var(--gold-primary)" /> Flexible Cancellation Policy
              </h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", margin: 0 }}>
                {room.cancellationPolicy}
              </p>
            </div>
          </div>

          {/* Right Column: Sticky Booking Action Card */}
          <div>
            <div className="sticky-book-card">
              <span className="section-subtitle">Reserve Your Stay</span>
              <div className="price-callout">
                <span className="amount">{formattedPrice}</span>
                <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                  / night (excl. taxes)
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", margin: "1.5rem 0", fontSize: "0.9rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--text-muted)" }}>Room Category:</span>
                  <strong>{room.name}</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--text-muted)" }}>Max Capacity:</span>
                  <strong>{room.capacity} Guests</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--text-muted)" }}>Bedding:</span>
                  <strong>{room.bedType}</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--text-muted)" }}>View:</span>
                  <strong>{room.view}</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--text-muted)" }}>Availability:</span>
                  <strong style={{ color: "var(--success)" }}>Available for Booking</strong>
                </div>
              </div>

              <Link
                to={`/booking?room=${room.id}`}
                className="btn btn-primary btn-lg"
                style={{ width: "100%", marginBottom: "1rem" }}
              >
                <Calendar size={18} />
                <span>Book This Room Now</span>
              </Link>

              <button
                onClick={() => navigate("/rooms")}
                className="btn btn-outline-gold btn-sm"
                style={{ width: "100%" }}
              >
                <ArrowLeft size={16} />
                <span>Compare Other Rooms</span>
              </button>

              <div style={{ marginTop: "1.5rem", borderTop: "1px solid var(--border-light)", paddingTop: "1rem", textAlign: "center" }}>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  Need assistance? Call concierge: <br />
                  <strong style={{ color: "var(--primary-navy)" }}>{hotelInfo.contact.phone}</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Other Similar Accommodations */}
        <div style={{ marginTop: "4rem", marginBottom: "5rem" }}>
          <div className="section-header" style={{ marginBottom: "2.5rem" }}>
            <span className="section-subtitle">Discover More</span>
            <h2 className="section-title">Other Luxury Accommodations</h2>
          </div>
          <div className="rooms-grid">
            {otherRooms.map((r) => (
              <RoomCard key={r.id} room={r} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
