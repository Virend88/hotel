import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, Filter, RotateCcw, Sparkles } from "lucide-react";
import RoomCard from "../components/RoomCard";
import { roomsData } from "../data/rooms";

export default function Rooms() {
  const [searchParams] = useSearchParams();

  // Read query params from URL (e.g. from Hero search)
  const initialGuests = searchParams.get("guests") || "all";
  const initialType = searchParams.get("type") || "all";

  const [searchTerm, setSearchTerm] = useState("");
  const [guestFilter, setGuestFilter] = useState(initialGuests);
  const [typeFilter, setTypeFilter] = useState(initialType);
  const [maxPrice, setMaxPrice] = useState(30000);
  const [sortBy, setSortBy] = useState("recommended");

  // Filter and sort rooms using useMemo
  const filteredRooms = useMemo(() => {
    return roomsData
      .filter((room) => {
        // Keyword Search
        const matchesSearch =
          room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          room.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
          room.description.toLowerCase().includes(searchTerm.toLowerCase());

        // Guest capacity filter
        const matchesGuests =
          guestFilter === "all" || room.capacity >= parseInt(guestFilter);

        // Room type filter
        const matchesType =
          typeFilter === "all" || room.id === typeFilter;

        // Max price filter
        const matchesPrice = room.price <= maxPrice;

        return matchesSearch && matchesGuests && matchesType && matchesPrice;
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        return 0; // default order
      });
  }, [searchTerm, guestFilter, typeFilter, maxPrice, sortBy]);

  const handleReset = () => {
    setSearchTerm("");
    setGuestFilter("all");
    setTypeFilter("all");
    setMaxPrice(30000);
    setSortBy("recommended");
  };

  return (
    <div className="rooms-page">
      {/* Page Header Banner */}
      <section
        className="section section-dark"
        style={{
          padding: "4rem 0 3.5rem 0",
          backgroundImage:
            "linear-gradient(rgba(11, 31, 51, 0.85), rgba(11, 31, 51, 0.95)), url('https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-subtitle">Accommodations</span>
          <h1 className="section-title">Rooms & Suites</h1>
          <p className="section-desc" style={{ maxWidth: "640px", margin: "0 auto" }}>
            Choose from our refined collection of deluxe bedrooms, executive
            club floors, and expansive family suites crafted for ultimate indulgence.
          </p>
        </div>
      </section>

      {/* Main Content & Filter Section */}
      <section className="section" style={{ paddingTop: "3rem" }}>
        <div className="container">
          {/* Filter Bar */}
          <div className="rooms-filter-bar">
            {/* Search Input */}
            <div className="search-field">
              <label>
                <Search size={14} className="icon" /> Search Room
              </label>
              <input
                type="text"
                className="search-input"
                placeholder="e.g. Deluxe, Suite, King, City View..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Guests Filter */}
            <div className="search-field">
              <label>
                <Filter size={14} className="icon" /> Min Guests
              </label>
              <select
                className="search-input"
                value={guestFilter}
                onChange={(e) => setGuestFilter(e.target.value)}
              >
                <option value="all">Any Capacity</option>
                <option value="2">2+ Guests</option>
                <option value="3">3+ Guests</option>
                <option value="4">4+ Guests</option>
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="search-field">
              <label>
                <Sparkles size={14} className="icon" /> Sort By
              </label>
              <select
                className="search-input"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="recommended">Featured / Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Guest Rating</option>
              </select>
            </div>

            {/* Reset Button */}
            <div style={{ paddingTop: "1.4rem" }}>
              <button
                onClick={handleReset}
                className="btn btn-outline-gold btn-sm"
                title="Reset all filters"
                style={{ height: "42px" }}
              >
                <RotateCcw size={15} />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Results Summary Counter */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "2rem",
              paddingBottom: "1rem",
              borderBottom: "1px solid var(--border-light)"
            }}
          >
            <span style={{ fontWeight: 600, color: "var(--text-dark)" }}>
              Showing {filteredRooms.length} of {roomsData.length} Accommodations
            </span>
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              All reservations include complimentary gourmet breakfast & high-speed WiFi
            </span>
          </div>

          {/* Rooms Grid */}
          {filteredRooms.length > 0 ? (
            <div className="rooms-grid">
              {filteredRooms.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "5rem 2rem",
                backgroundColor: "var(--bg-card)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-light)"
              }}
            >
              <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                No rooms match your search filters
              </h3>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                Try adjusting your search criteria or resetting filters to view all available accommodations.
              </p>
              <button onClick={handleReset} className="btn btn-primary">
                <RotateCcw size={16} />
                <span>Reset All Filters</span>
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
