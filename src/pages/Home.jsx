import Hero from "../components/Hero";
import FeaturedRooms from "../components/FeaturedRooms";
import Amenities from "../components/Amenities";
import WhyChooseUs from "../components/WhyChooseUs";
import Reviews from "../components/Reviews";
import GalleryPreview from "../components/GalleryPreview";
import Location from "../components/Location";

export default function Home() {
  return (
    <div>
      {/* Hero with embedded search */}
      <Hero />

      {/* Featured Rooms */}
      <FeaturedRooms />

      {/* World-Class Amenities */}
      <Amenities />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Verified Guest Reviews */}
      <Reviews />

      {/* Photo Gallery Preview */}
      <GalleryPreview />

      {/* Location & Connectivity */}
      <Location />
    </div>
  );
}
