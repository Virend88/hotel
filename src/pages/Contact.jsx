import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { hotelInfo } from "../data/hotelInfo";

const faqs = [
  {
    q: "What are your check-in and check-out timings?",
    a: "Standard check-in begins at 2:00 PM and check-out is by 12:00 PM noon. Early check-in and late check-out can be requested subject to room availability."
  },
  {
    q: "Do you offer airport transfers from Bengaluru Kempegowda Airport (BLR)?",
    a: "Yes, we offer roundtrip airport transfers in luxury sedans (Mercedes E-Class and BMW 5 Series) with personalized chauffeur meet-and-greet at arrivals. Executive and Presidential suites include complimentary transfers."
  },
  {
    q: "Is parking available on property?",
    a: "We offer complimentary 24/7 valet parking for all resident guests and restaurant visitors, including dedicated DC Fast EV charging stations."
  },
  {
    q: "What is your reservation cancellation policy?",
    a: "Direct bookings on our website enjoy free cancellation up to 24 to 48 hours prior to check-in (depending on the suite selected). Specific details are highlighted on each room voucher."
  },
  {
    q: "Are pets allowed at Grand Horizon Hotel?",
    a: "We welcome small service animals and well-behaved domestic pets in select ground-level garden terrace rooms with prior intimation to the concierge."
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Room Reservation Inquiry",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 3) {
      newErrors.name = "Please enter your full name.";
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      newErrors.email = "Please provide a valid email address.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Please write a message with at least 10 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "Room Reservation Inquiry",
      message: ""
    });
  };

  return (
    <div className="contact-page">
      {/* Banner */}
      <section
        className="section section-dark"
        style={{
          padding: "5rem 0 4rem 0",
          backgroundImage:
            "linear-gradient(rgba(11, 31, 51, 0.85), rgba(11, 31, 51, 0.95)), url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-subtitle">Get In Touch</span>
          <h1 className="section-title">Contact & Concierge</h1>
          <p className="section-desc" style={{ maxWidth: "640px", margin: "0 auto" }}>
            Our dedicated guest relations team is available 24 hours a day to
            assist with reservations, dining bookings, and custom itinerary requests.
          </p>
        </div>
      </section>

      {/* Main Layout */}
      <section className="section">
        <div className="container">
          <div className="contact-layout">
            {/* Contact Info Column */}
            <div>
              <div className="contact-card">
                <div className="contact-icon-bubble">
                  <MapPin size={24} />
                </div>
                <h4 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                  Physical Location
                </h4>
                <p style={{ color: "var(--text-body)", fontSize: "0.95rem", marginBottom: 0 }}>
                  {hotelInfo.location.address}, {hotelInfo.location.city},{" "}
                  {hotelInfo.location.state} {hotelInfo.location.pincode}, India
                </p>
                <div style={{ fontSize: "0.85rem", color: "var(--gold-dark)", marginTop: "0.5rem" }}>
                  Landmark: {hotelInfo.location.landmark}
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon-bubble">
                  <Phone size={24} />
                </div>
                <h4 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                  Telephone & WhatsApp
                </h4>
                <p style={{ color: "var(--text-body)", fontSize: "0.95rem", marginBottom: "0.25rem" }}>
                  Direct: <strong>{hotelInfo.contact.phone}</strong>
                </p>
                <p style={{ color: "var(--text-body)", fontSize: "0.95rem", marginBottom: 0 }}>
                  WhatsApp Concierge: <strong>{hotelInfo.contact.whatsapp}</strong>
                </p>
              </div>

              <div className="contact-card">
                <div className="contact-icon-bubble">
                  <Mail size={24} />
                </div>
                <h4 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                  Electronic Inquiries
                </h4>
                <p style={{ color: "var(--text-body)", fontSize: "0.95rem", marginBottom: "0.25rem" }}>
                  Reservations: <strong>{hotelInfo.contact.email}</strong>
                </p>
                <p style={{ color: "var(--text-body)", fontSize: "0.95rem", marginBottom: 0 }}>
                  General Inquiries: <strong>{hotelInfo.contact.inquiriesEmail}</strong>
                </p>
              </div>

              <div className="contact-card">
                <div className="contact-icon-bubble">
                  <Clock size={24} />
                </div>
                <h4 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                  Hours of Operation
                </h4>
                <p style={{ color: "var(--text-body)", fontSize: "0.95rem", marginBottom: 0 }}>
                  Front Desk & Concierge: 24 Hours / 7 Days a Week <br />
                  Check-in: 2:00 PM | Check-out: 12:00 PM
                </p>
              </div>
            </div>

            {/* Message Form Column */}
            <div className="booking-form-box">
              <h3 style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>
                Send Us a Message
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "2rem" }}>
                Have a special inquiry or group event requirement? Fill in the
                form and our concierge will respond within 4 business hours.
              </p>

              {submitted ? (
                <div
                  style={{
                    backgroundColor: "var(--success-bg)",
                    border: "1px solid var(--success)",
                    borderRadius: "var(--radius-md)",
                    padding: "2rem",
                    textAlign: "center"
                  }}
                >
                  <CheckCircle2
                    size={48}
                    color="var(--success)"
                    style={{ margin: "0 auto 1rem auto" }}
                  />
                  <h4 style={{ fontSize: "1.3rem", color: "var(--primary-navy)", marginBottom: "0.5rem" }}>
                    Message Dispatched Successfully!
                  </h4>
                  <p style={{ color: "var(--text-body)", marginBottom: "1.5rem" }}>
                    Thank you for reaching out to {hotelInfo.name}. Our concierge
                    team has received your inquiry and will connect with you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn btn-outline-gold btn-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`form-control ${errors.name ? "error" : ""}`}
                      placeholder="e.g. Priyanshu Sharma"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <span className="field-error-msg">{errors.name}</span>
                    )}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className={`form-control ${errors.email ? "error" : ""}`}
                        placeholder="e.g. priyanshu@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <span className="field-error-msg">{errors.email}</span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone Number (Optional)</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-control"
                        placeholder="e.g. +91 98450 12345"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      className="form-control"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="Room Reservation Inquiry">Room Reservation Inquiry</option>
                      <option value="Banquet & Wedding Hall Booking">Banquet & Wedding Hall Booking</option>
                      <option value="Fine Dining Restaurant Table">Fine Dining Restaurant Table</option>
                      <option value="Airport Chauffeur Transfer">Airport Chauffeur Transfer</option>
                      <option value="Corporate Tech Event / Conference">Corporate Tech Event / Conference</option>
                      <option value="Other Feedback or Query">Other Feedback or Query</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className={`form-control ${errors.message ? "error" : ""}`}
                      placeholder="Please share details about your inquiry or upcoming stay..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {errors.message && (
                      <span className="field-error-msg">{errors.message}</span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ width: "100%" }}
                  >
                    <Send size={18} />
                    <span>Send Message to Concierge</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="section section-subtle">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Common Questions</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="faq-item">
                  <button
                    className="faq-question"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {isOpen && <div className="faq-answer">{faq.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
