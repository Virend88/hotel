import { useSearchParams } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import { ShieldCheck, CreditCard, Sparkles } from "lucide-react";

export default function Booking() {
  const [searchParams] = useSearchParams();

  const selectedRoomId = searchParams.get("room") || "deluxe-room";
  const checkIn = searchParams.get("checkIn") || "";
  const checkOut = searchParams.get("checkOut") || "";
  const guests = searchParams.get("guests") || "2";

  return (
    <div className="booking-page">
      {/* Banner */}
      <section
        className="section section-dark"
        style={{
          padding: "4.5rem 0 3.5rem 0",
          backgroundImage:
            "linear-gradient(rgba(11, 31, 51, 0.88), rgba(11, 31, 51, 0.95)), url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-subtitle">Official Direct Booking</span>
          <h1 className="section-title">Reserve Your Stay</h1>
          <p className="section-desc" style={{ maxWidth: "620px", margin: "0 auto" }}>
            Experience 5-star luxury at guaranteed direct rates with complimentary
            breakfast, flexible cancellation, and exclusive privileges.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              flexWrap: "wrap",
              marginTop: "2rem",
              fontSize: "0.85rem",
              color: "#E2E8F0"
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <ShieldCheck size={16} color="var(--gold-primary)" /> Best Price Guaranteed
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <CreditCard size={16} color="var(--gold-primary)" /> Pay at Hotel Option
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <Sparkles size={16} color="var(--gold-primary)" /> Instant Booking Confirmation
            </span>
          </div>
        </div>
      </section>

      {/* Main Reservation Section */}
      <section className="section">
        <div className="container">
          <BookingForm
            initialRoomId={selectedRoomId}
            initialDates={{ checkIn, checkOut, guests }}
          />
        </div>
      </section>
    </div>
  );
}
