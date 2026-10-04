import { MapPin, Navigation, Compass, Clock, ExternalLink } from "lucide-react";
import { hotelInfo } from "../data/hotelInfo";

export default function Location() {
  return (
    <section className="section" id="location">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-subtitle">Heart of Bengaluru</span>
          <h2 className="section-title">Prime Central Connectivity</h2>
          <p className="section-desc">
            Nestled on prestigious Residency Road, {hotelInfo.name} places you
            moments away from tech corporate parks, premier shopping at UB City,
            and the serene greenery of Cubbon Park.
          </p>
        </div>

        {/* Location Grid */}
        <div className="location-grid">
          {/* Left Details Card */}
          <div className="location-details-card">
            <div className="location-address-box">
              <MapPin size={28} className="location-icon-pin" />
              <div>
                <h3 style={{ fontSize: "1.3rem", marginBottom: "0.25rem" }}>
                  {hotelInfo.name}
                </h3>
                <p style={{ color: "var(--text-body)", marginBottom: "0.5rem", fontSize: "0.95rem" }}>
                  {hotelInfo.location.address}, {hotelInfo.location.city},{" "}
                  {hotelInfo.location.state} {hotelInfo.location.pincode},{" "}
                  {hotelInfo.location.country}
                </p>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", fontSize: "0.85rem", color: "var(--gold-dark)", fontWeight: 600 }}>
                  <Compass size={15} /> Landmark: {hotelInfo.location.landmark}
                </div>
              </div>
            </div>

            <h4 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
              Nearby Destinations & Transit
            </h4>
            <div className="nearby-list">
              {hotelInfo.nearbyAttractions.map((attraction, idx) => (
                <div key={idx} className="nearby-item">
                  <div>
                    <div className="nearby-name">{attraction.name}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.25rem", color: "var(--text-muted)", fontSize: "0.75rem", marginTop: "2px" }}>
                      <Clock size={12} /> {attraction.time}
                    </div>
                  </div>
                  <div className="nearby-dist">{attraction.distance}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  hotelInfo.name + " " + hotelInfo.location.address + " " + hotelInfo.location.city
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-navy btn-sm"
              >
                <Navigation size={16} />
                <span>Open in Google Maps</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Right Visual Image Card (Replaces the slow iframe map) */}
          <div className="location-map-wrap" style={{ position: "relative" }}>
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
              alt="Grand Horizon Hotel Bengaluru Location"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              loading="lazy"
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "1.75rem",
                background: "linear-gradient(to top, rgba(11, 31, 51, 0.95) 0%, rgba(11, 31, 51, 0.1) 100%)",
                color: "#FFFFFF"
              }}
            >
              <span className="badge badge-gold" style={{ marginBottom: "0.5rem" }}>
                Residency Road • Ashok Nagar
              </span>
              <p style={{ margin: 0, fontSize: "0.9rem", color: "#D3DDE8" }}>
                Walking distance to MG Road metro station, UB City & Cubbon Park
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
