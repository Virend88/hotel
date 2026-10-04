import { Link } from "react-router-dom";
import {
  Users,
  BedDouble,
  Maximize2,
  Star,
  ArrowRight,
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
} from "lucide-react";

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

export default function RoomCard({ room }) {
  // Format price in Indian Rupee format
  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(room.price);

  return (
    <div className="room-card">
      {/* Room Photo with Badges */}
      <div className="room-card-image-wrap">
        <img src={room.image} alt={room.name} className="room-card-image" loading="lazy" />
        {room.badge && (
          <div className="room-card-badge">
            <span className="badge badge-gold">{room.badge}</span>
          </div>
        )}
        <div className="room-card-rating">
          <Star size={14} className="star" fill="var(--champagne-gold)" color="var(--champagne-gold)" />
          <span>{room.rating}</span>
        </div>
      </div>

      {/* Room Card Body */}
      <div className="room-card-body">
        <div className="room-card-header">
          <h3 className="room-card-title">{room.name}</h3>
        </div>

        <p className="room-card-tagline">{room.tagline}</p>

        {/* Room Specifications (Guests, Bed, Size) */}
        <div className="room-card-specs">
          <div className="room-spec-item" title="Max Occupancy">
            <Users size={16} className="icon" />
            <span>Up to {room.capacity} Guests</span>
          </div>
          <div className="room-spec-item" title="Bed Configuration">
            <BedDouble size={16} className="icon" />
            <span>{room.bedType}</span>
          </div>
          {room.roomSize && (
            <div className="room-spec-item" title="Floor Area">
              <Maximize2 size={15} className="icon" />
              <span>{room.roomSize.split(" ")[0]} sq.ft</span>
            </div>
          )}
        </div>

        {/* Top Amenities Chips */}
        <div className="room-card-amenities">
          {room.amenities.slice(0, 4).map((amenity, idx) => {
            const IconComponent = iconMap[amenity.icon] || Sparkles;
            return (
              <span key={idx} className="amenity-chip">
                <IconComponent size={13} className="icon" />
                {amenity.name}
              </span>
            );
          })}
        </div>

        {/* Pricing & Action Buttons */}
        <div className="room-card-footer">
          <div className="room-price-box">
            <span className="room-price-amount">{formattedPrice}</span>
            <span className="room-price-sub">/ night (excl. taxes)</span>
          </div>

          <div className="room-card-actions">
            <Link
              to={`/rooms/${room.id}`}
              className="btn btn-outline-gold btn-sm"
              title="View full room details and photos"
            >
              <span>View Details</span>
            </Link>
            <Link
              to={`/booking?room=${room.id}`}
              className="btn btn-primary btn-sm"
              title="Book this room now"
            >
              <span>Book Now</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
