import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CreditCard,
  CheckCircle2,
  Printer,
  Sparkles
} from "lucide-react";
import { roomsData, getRoomById } from "../data/rooms";
import { hotelInfo } from "../data/hotelInfo";

export default function BookingForm({ initialRoomId, initialDates }) {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(dayAfter.getDate() + 3);

  const formatDate = (d) => d.toISOString().split("T")[0];

  // State fields
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    checkIn: initialDates?.checkIn || formatDate(tomorrow),
    checkOut: initialDates?.checkOut || formatDate(dayAfter),
    guests: initialDates?.guests || "2",
    roomId: initialRoomId || "deluxe-room",
    specialRequests: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(null);

  // Update roomId if prop changes
  useEffect(() => {
    if (initialRoomId) {
      setFormData((prev) => ({ ...prev, roomId: initialRoomId }));
    }
  }, [initialRoomId]);

  // Selected room details
  const selectedRoom = getRoomById(formData.roomId) || roomsData[0];

  // Calculate nights
  const checkInDate = new Date(formData.checkIn);
  const checkOutDate = new Date(formData.checkOut);
  const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
  const calculatedNights = Math.max(1, Math.ceil(timeDiff / (1000 * 3600 * 24)));

  // Pricing calculations
  const subtotal = selectedRoom.price * calculatedNights;
  const gstTax = Math.round(subtotal * 0.18); // 18% GST
  const grandTotal = subtotal + gstTax;

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // Clear error for field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Form Validation
  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      newErrors.fullName = "Please enter your full name (at least 3 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    const phoneRegex = /^[0-9+() -]{10,15}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number (at least 10 digits).";
    }

    if (!formData.checkIn) {
      newErrors.checkIn = "Please choose a check-in date.";
    }

    if (!formData.checkOut) {
      newErrors.checkOut = "Please choose a check-out date.";
    } else if (new Date(formData.checkOut) <= new Date(formData.checkIn)) {
      newErrors.checkOut = "Check-out date must be at least 1 day after check-in.";
    }

    if (parseInt(formData.guests) > selectedRoom.capacity) {
      newErrors.guests = `This room fits up to ${selectedRoom.capacity} guests. Please select fewer guests or choose a larger suite.`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate reservation engine processing
    setTimeout(() => {
      const confirmationNumber = "GHB-" + Math.floor(100000 + Math.random() * 900000);
      setBookingConfirmed({
        referenceNumber: confirmationNumber,
        createdAt: new Date().toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric"
        }),
        guest: {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          guests: formData.guests,
          specialRequests: formData.specialRequests || "None"
        },
        stay: {
          roomName: selectedRoom.name,
          roomImage: selectedRoom.image,
          checkIn: formData.checkIn,
          checkOut: formData.checkOut,
          nights: calculatedNights,
          bedType: selectedRoom.bedType
        },
        pricing: {
          nightlyRate: selectedRoom.price,
          subtotal: subtotal,
          tax: gstTax,
          grandTotal: grandTotal
        }
      });
      setIsSubmitting(false);
    }, 1000);
  };

  // Format currency helper
  const formatRupees = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(amount);

  // If booking is confirmed, show the voucher view
  if (bookingConfirmed) {
    return (
      <div className="confirmation-voucher">
        <div className="voucher-icon-success">
          <CheckCircle2 size={40} />
        </div>

        <span className="section-subtitle">Reservation Confirmed</span>
        <h2 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
          Thank You, {bookingConfirmed.guest.fullName}!
        </h2>
        <p style={{ color: "var(--text-muted)", marginBottom: "1rem" }}>
          Your reservation has been confirmed at {hotelInfo.name}, Bengaluru. A
          confirmation voucher and arrival guide have been sent to{" "}
          <strong>{bookingConfirmed.guest.email}</strong>.
        </p>

        {/* Reference Code Box */}
        <div className="voucher-ref-box">
          <div style={{ fontSize: "0.8rem", color: "var(--text-dark)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Booking Confirmation Reference
          </div>
          <div className="voucher-ref-code">
            {bookingConfirmed.referenceNumber}
          </div>
        </div>

        {/* Voucher Table Details */}
        <div className="voucher-details-table">
          <div style={{ display: "flex", gap: "1.25rem", alignItems: "center", marginBottom: "1.25rem", paddingBottom: "1.25rem", borderBottom: "1px solid var(--border-light)" }}>
            <img
              src={bookingConfirmed.stay.roomImage}
              alt={bookingConfirmed.stay.roomName}
              style={{ width: "90px", height: "70px", objectFit: "cover", borderRadius: "6px" }}
            />
            <div>
              <h4 style={{ fontSize: "1.2rem", margin: 0 }}>
                {bookingConfirmed.stay.roomName}
              </h4>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                {bookingConfirmed.stay.bedType} • {bookingConfirmed.guest.guests} Guests
              </span>
            </div>
          </div>

          <div className="summary-line">
            <span>Check-in Date:</span>
            <strong>{bookingConfirmed.stay.checkIn} (from 2:00 PM)</strong>
          </div>
          <div className="summary-line">
            <span>Check-out Date:</span>
            <strong>{bookingConfirmed.stay.checkOut} (until 12:00 PM)</strong>
          </div>
          <div className="summary-line">
            <span>Duration of Stay:</span>
            <strong>{bookingConfirmed.stay.nights} Night(s)</strong>
          </div>
          <div className="summary-line">
            <span>Guest Contact:</span>
            <strong>{bookingConfirmed.guest.phone}</strong>
          </div>
          <div className="summary-line">
            <span>Special Requests:</span>
            <span>{bookingConfirmed.guest.specialRequests}</span>
          </div>

          <div className="summary-line summary-total">
            <span>Total Payable Amount (incl. 18% GST):</span>
            <span style={{ color: "var(--gold-dark)" }}>
              {formatRupees(bookingConfirmed.pricing.grandTotal)}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <button
            onClick={() => window.print()}
            className="btn btn-navy"
          >
            <Printer size={18} />
            <span>Print Reservation Voucher</span>
          </button>
          <button
            onClick={() => {
              setBookingConfirmed(null);
              setFormData({
                fullName: "",
                email: "",
                phone: "",
                checkIn: formatDate(tomorrow),
                checkOut: formatDate(dayAfter),
                guests: "2",
                roomId: "deluxe-room",
                specialRequests: ""
              });
            }}
            className="btn btn-outline-gold"
          >
            <span>Book Another Room</span>
          </button>
          <Link to="/" className="btn btn-primary">
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-page-wrap">
      {/* Form Left Column */}
      <div className="booking-form-box">
        <h3 style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>
          Guest & Reservation Details
        </h3>
        <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "2rem" }}>
          Fill in your details below to secure your stay at guaranteed direct rates.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          {/* Guest Name & Email */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fullName">
                Full Name <span style={{ color: "var(--error)" }}>*</span>
              </label>
              <div style={{ position: "relative" }}>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className={`form-control ${errors.fullName ? "error" : ""}`}
                  placeholder="e.g. Aarav Sharma"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              {errors.fullName && (
                <span className="field-error-msg">{errors.fullName}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email Address <span style={{ color: "var(--error)" }}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-control ${errors.email ? "error" : ""}`}
                placeholder="e.g. aarav@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <span className="field-error-msg">{errors.email}</span>
              )}
            </div>
          </div>

          {/* Phone Number & Room Type */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">
                Phone Number <span style={{ color: "var(--error)" }}>*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className={`form-control ${errors.phone ? "error" : ""}`}
                placeholder="e.g. +91 98450 12345"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {errors.phone && (
                <span className="field-error-msg">{errors.phone}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="roomId">
                Room Category <span style={{ color: "var(--error)" }}>*</span>
              </label>
              <select
                id="roomId"
                name="roomId"
                className="form-control"
                value={formData.roomId}
                onChange={handleChange}
              >
                {roomsData.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.name} — {formatRupees(room.price)} / night
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Dates & Guests */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="checkIn">
                Check-in Date <span style={{ color: "var(--error)" }}>*</span>
              </label>
              <input
                type="date"
                id="checkIn"
                name="checkIn"
                className={`form-control ${errors.checkIn ? "error" : ""}`}
                value={formData.checkIn}
                min={formatDate(today)}
                onChange={handleChange}
                required
              />
              {errors.checkIn && (
                <span className="field-error-msg">{errors.checkIn}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="checkOut">
                Check-out Date <span style={{ color: "var(--error)" }}>*</span>
              </label>
              <input
                type="date"
                id="checkOut"
                name="checkOut"
                className={`form-control ${errors.checkOut ? "error" : ""}`}
                value={formData.checkOut}
                min={formData.checkIn || formatDate(tomorrow)}
                onChange={handleChange}
                required
              />
              {errors.checkOut && (
                <span className="field-error-msg">{errors.checkOut}</span>
              )}
            </div>
          </div>

          {/* Guest Count */}
          <div className="form-group">
            <label htmlFor="guests">
              Number of Guests (Max {selectedRoom.capacity} for {selectedRoom.name})
            </label>
            <select
              id="guests"
              name="guests"
              className={`form-control ${errors.guests ? "error" : ""}`}
              value={formData.guests}
              onChange={handleChange}
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5+ Guests</option>
            </select>
            {errors.guests && (
              <span className="field-error-msg">{errors.guests}</span>
            )}
          </div>

          {/* Special Requests */}
          <div className="form-group" style={{ marginBottom: "2rem" }}>
            <label htmlFor="specialRequests">
              Special Requests (Optional)
            </label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              rows="3"
              className="form-control"
              placeholder="e.g. Quiet high floor room, airport pickup needed, dietary requests, early check-in preference..."
              value={formData.specialRequests}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            style={{ width: "100%" }}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span>Securing Your Reservation...</span>
            ) : (
              <>
                <CreditCard size={18} />
                <span>Confirm Reservation ({formatRupees(grandTotal)})</span>
              </>
            )}
          </button>

          <p style={{ textAlign: "center", fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "1rem", marginBottom: 0 }}>
            🔒 Direct Booking Guarantee. No upfront prepayment required. Free cancellation policy applies.
          </p>
        </form>
      </div>

      {/* Right Column: Live Price & Room Summary */}
      <div className="booking-summary-sidebar">
        <div className="summary-header">
          <div>
            <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--gold-light)" }}>
              Reservation Summary
            </span>
            <h4 style={{ margin: 0, color: "#FFFFFF", fontSize: "1.25rem" }}>
              {selectedRoom.name}
            </h4>
          </div>
          <span className="badge badge-gold">{selectedRoom.badge}</span>
        </div>

        <div className="summary-body">
          <img
            src={selectedRoom.image}
            alt={selectedRoom.name}
            className="summary-room-thumb"
          />

          <div className="summary-line">
            <span>Check-in:</span>
            <strong>{formData.checkIn}</strong>
          </div>
          <div className="summary-line">
            <span>Check-out:</span>
            <strong>{formData.checkOut}</strong>
          </div>
          <div className="summary-line">
            <span>Length of Stay:</span>
            <strong>{calculatedNights} Night(s)</strong>
          </div>
          <div className="summary-line">
            <span>Occupancy:</span>
            <strong>{formData.guests} Guest(s)</strong>
          </div>

          <div style={{ margin: "1.25rem 0", borderTop: "1px solid var(--border-light)", paddingTop: "1rem" }}>
            <div className="summary-line">
              <span>{formatRupees(selectedRoom.price)} × {calculatedNights} night(s):</span>
              <span>{formatRupees(subtotal)}</span>
            </div>

            <div className="summary-line">
              <span>Estimated Taxes & GST (18%):</span>
              <span>{formatRupees(gstTax)}</span>
            </div>

            <div className="summary-line summary-total">
              <span>Estimated Total:</span>
              <span style={{ color: "var(--gold-dark)" }}>
                {formatRupees(grandTotal)}
              </span>
            </div>
          </div>

          <div style={{ backgroundColor: "var(--bg-subtle)", padding: "1rem", borderRadius: "8px", fontSize: "0.8rem", color: "var(--text-body)" }}>
            <div style={{ fontWeight: 700, marginBottom: "0.35rem", display: "flex", alignItems: "center", gap: "0.3rem" }}>
              <Sparkles size={14} color="var(--gold-dark)" /> Included in Your Stay:
            </div>
            <ul style={{ paddingLeft: "1.2rem", margin: 0, lineHeight: 1.5 }}>
              <li>Complimentary Daily Gourmet Breakfast</li>
              <li>High-speed Fiber WiFi throughout property</li>
              <li>Rooftop Infinity Pool & Gym access</li>
              <li>{selectedRoom.cancellationPolicy}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
