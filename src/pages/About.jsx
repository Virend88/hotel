import { Link } from "react-router-dom";
import {
  Sparkles,
  Heart,
  Globe,
  ShieldCheck,
  ArrowRight
} from "lucide-react";
import { hotelInfo } from "../data/hotelInfo";

export default function About() {
  return (
    <div className="about-page">
      {/* Header Banner */}
      <section
        className="section section-dark"
        style={{
          padding: "5rem 0 4rem 0",
          backgroundImage:
            "linear-gradient(rgba(11, 31, 51, 0.85), rgba(11, 31, 51, 0.95)), url('https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-subtitle">Our Heritage & Vision</span>
          <h1 className="section-title">The Grand Horizon Story</h1>
          <p className="section-desc" style={{ maxWidth: "680px", margin: "0 auto" }}>
            A harmonious symphony of contemporary five-star indulgence and
            timeless Karnataka hospitality in Bengaluru's cultural core.
          </p>
        </div>
      </section>

      {/* Main Story & Collage */}
      <section className="section">
        <div className="container">
          <div className="about-story-grid">
            <div>
              <span className="section-subtitle">Established 2018</span>
              <h2 style={{ fontSize: "2.3rem", marginBottom: "1.25rem" }}>
                Where Garden City Charm Meets Global Luxury
              </h2>
              <p style={{ color: "var(--text-body)", fontSize: "1.05rem", lineHeight: 1.8 }}>
                Founded on Bengaluru's historic Residency Road, {hotelInfo.name}{" "}
                was conceived as a tranquil sanctuary amidst the rapid cadence of
                India's leading technological capital.
              </p>
              <p style={{ color: "var(--text-body)", fontSize: "1rem", lineHeight: 1.8 }}>
                Our architectural blueprint pays homage to Karnataka’s storied
                dynasties — subtle brass fretwork reminiscent of Hoysala temples,
                indigenous rosewood craftsmanship, and sunlit courtyards — effortlessly
                married with Italian marble floors, smart climate technology, and
                acclaimed modern art.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "2rem" }}>
                <div style={{ padding: "1.25rem", backgroundColor: "var(--bg-subtle)", borderRadius: "8px" }}>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", color: "var(--gold-dark)", fontWeight: 700 }}>
                    180+
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                    Opulent Rooms & Suites
                  </div>
                </div>
                <div style={{ padding: "1.25rem", backgroundColor: "var(--bg-subtle)", borderRadius: "8px" }}>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", color: "var(--gold-dark)", fontWeight: 700 }}>
                    4.9 / 5
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                    Verified Guest Satisfaction
                  </div>
                </div>
              </div>
            </div>

            <div className="about-image-collage">
              <img
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
                alt="Grand Horizon Hotel Entrance"
                style={{ width: "100%", height: "480px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="section section-subtle">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Guiding Pillars</span>
            <h2 className="section-title">Values That Define Our Service</h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "2rem"
            }}
          >
            <div className="amenity-card">
              <div className="amenity-icon-wrap">
                <Heart size={28} />
              </div>
              <h3 className="amenity-card-title">Atithi Devo Bhava</h3>
              <p className="amenity-card-desc">
                Rooted in the sacred Indian ethos of "The Guest is Divine", our team
                anticipates every comfort before you even ask.
              </p>
            </div>

            <div className="amenity-card">
              <div className="amenity-icon-wrap">
                <Sparkles size={28} />
              </div>
              <h3 className="amenity-card-title">Artisan Gastronomy</h3>
              <p className="amenity-card-desc">
                From morning filter coffee made with Chikmagalur beans to evening
                tasting menus by Michelin-trained master chefs.
              </p>
            </div>

            <div className="amenity-card">
              <div className="amenity-icon-wrap">
                <Globe size={28} />
              </div>
              <h3 className="amenity-card-title">Eco-Sensibility</h3>
              <p className="amenity-card-desc">
                100% solar water heating, zero single-use plastics, and organic
                waste composting that nourishes our gardens.
              </p>
            </div>

            <div className="amenity-card">
              <div className="amenity-icon-wrap">
                <ShieldCheck size={28} />
              </div>
              <h3 className="amenity-card-title">Uncompromising Privacy</h3>
              <p className="amenity-card-desc">
                High-security biometric room floors, discreet butler service, and
                sound-isolated suites for total discretion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Hospitality Team */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Executive Team</span>
            <h2 className="section-title">The Curators of Your Stay</h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "2rem"
            }}
          >
            {[
              {
                name: "Vikramaditya Rao",
                role: "General Manager",
                experience: "25+ Years at Taj & Four Seasons",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Chef Ananya Kulkarni",
                role: "Executive Culinary Director",
                experience: "Le Cordon Bleu Paris Alumna",
                image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Marcus Dupont",
                role: "Head Sommelier & Mixologist",
                experience: "Best in Asia Mixology Award",
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Dr. Lakshmi Prasad",
                role: "Ayurvedic Sanctuary Director",
                experience: "Holistic Wellness Physician",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
              }
            ].map((member, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  border: "1px solid var(--border-light)",
                  boxShadow: "var(--shadow-sm)"
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  style={{ width: "100%", height: "260px", objectFit: "cover" }}
                  loading="lazy"
                />
                <div style={{ padding: "1.25rem", textAlign: "center" }}>
                  <h4 style={{ fontSize: "1.15rem", marginBottom: "0.25rem" }}>
                    {member.name}
                  </h4>
                  <div style={{ color: "var(--gold-dark)", fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.25rem" }}>
                    {member.role}
                  </div>
                  <div style={{ color: "var(--text-muted)", fontSize: "0.78rem" }}>
                    {member.experience}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <Link to="/rooms" className="btn btn-primary btn-lg">
              <span>View Available Suites</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
