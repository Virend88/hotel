import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import RoomCard from "./RoomCard";
import { roomsData } from "../data/rooms";

export default function FeaturedRooms() {
  // Select featured rooms (Deluxe, Premium, Executive, Family Suite)
  const featuredRooms = roomsData.filter((room) => room.featured);

  return (
    <section className="section" id="featured-rooms">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Luxury Accommodations</span>
          <h2 className="section-title">Designed for Exceptional Rest</h2>
          <p className="section-desc">
            Immerse yourself in thoughtfully curated interiors, custom plush
            bedding, Italian marble baths, and panoramic vistas of Bengaluru.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="rooms-grid">
          {featuredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        {/* View All CTA */}
        <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
          <Link to="/rooms" className="btn btn-navy btn-lg">
            <span>Explore All Rooms & Suites</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
