import {
  Waves,
  Utensils,
  Sparkles,
  Dumbbell,
  Wifi,
  Car,
  Briefcase,
  Compass
} from "lucide-react";
import { hotelInfo } from "../data/hotelInfo";

const iconMap = {
  Waves,
  Utensils,
  Sparkles,
  Dumbbell,
  Wifi,
  Car,
  Briefcase,
  Compass
};

export default function Amenities() {
  return (
    <section className="section section-subtle" id="amenities">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-subtitle">World-Class Facilities</span>
          <h2 className="section-title">Indulge in 5-Star Amenities</h2>
          <p className="section-desc">
            Every moment at {hotelInfo.name} is designed to elevate your stay,
            whether you seek serene relaxation or productive executive spaces.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="amenities-grid">
          {hotelInfo.amenities.map((item) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div key={item.id} className="amenity-card">
                <div className="amenity-icon-wrap">
                  <IconComponent size={28} />
                </div>
                <h3 className="amenity-card-title">{item.name}</h3>
                <p className="amenity-card-desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
