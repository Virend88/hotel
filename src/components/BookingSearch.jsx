import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Users, Home, Search } from "lucide-react";
import { roomsData } from "../data/rooms";

export default function BookingSearch({ onSearch }) {
  const navigate = useNavigate();

  // Calculate default dates: tomorrow and day after tomorrow
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(dayAfter.getDate() + 3);

  const formatDate = (date) => date.toISOString().split("T")[0];

  const [checkIn, setCheckIn] = useState(formatDate(tomorrow));
  const [checkOut, setCheckOut] = useState(formatDate(dayAfter));
  const [guests, setGuests] = useState("2");
  const [roomType, setRoomType] = useState("all");
  const [dateError, setDateError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (new Date(checkOut) <= new Date(checkIn)) {
      setDateError("Check-out date must be after check-in date.");
      return;
    }
    setDateError("");

    if (onSearch) {
      onSearch({ checkIn, checkOut, guests, roomType });
    } else {
      // Navigate to /rooms with search parameters
      const queryParams = new URLSearchParams({
        checkIn,
        checkOut,
        guests,
        type: roomType
      });
      navigate(`/rooms?${queryParams.toString()}`);
    }
  };

  return (
    <div className="booking-search-card">
      <form onSubmit={handleSubmit} className="booking-search-form">
        {/* Check-in Date */}
        <div className="search-field">
          <label>
            <Calendar size={15} className="icon" /> Check-In
          </label>
          <div className="search-input-wrap">
            <input
              type="date"
              className="search-input"
              value={checkIn}
              min={formatDate(today)}
              onChange={(e) => setCheckIn(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Check-out Date */}
        <div className="search-field">
          <label>
            <Calendar size={15} className="icon" /> Check-Out
          </label>
          <div className="search-input-wrap">
            <input
              type="date"
              className="search-input"
              value={checkOut}
              min={checkIn || formatDate(tomorrow)}
              onChange={(e) => setCheckOut(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Number of Guests */}
        <div className="search-field">
          <label>
            <Users size={15} className="icon" /> Guests
          </label>
          <div className="search-input-wrap">
            <select
              className="search-input"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            >
              <option value="1">1 Adult (Solo)</option>
              <option value="2">2 Adults (Couple)</option>
              <option value="3">3 Adults / Small Group</option>
              <option value="4">4+ Guests / Family</option>
            </select>
          </div>
        </div>

        {/* Room Type */}
        <div className="search-field">
          <label>
            <Home size={15} className="icon" /> Room Category
          </label>
          <div className="search-input-wrap">
            <select
              className="search-input"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
            >
              <option value="all">All Room Types</option>
              {roomsData.map((room) => (
                <option key={room.id} value={room.id}>
                  {room.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="booking-search-btn-wrap">
          <button type="submit" className="btn btn-primary" style={{ width: "100%", height: "46px" }}>
            <Search size={18} />
            <span>Search Rooms</span>
          </button>
        </div>
      </form>

      {dateError && (
        <p style={{ color: "var(--error)", fontSize: "0.85rem", marginTop: "0.75rem", marginBottom: 0 }}>
          {dateError}
        </p>
      )}
    </div>
  );
}
