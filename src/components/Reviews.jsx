import { Star, Quote } from "lucide-react";
import { reviewsData } from "../data/reviews";
import { hotelInfo } from "../data/hotelInfo";

export default function Reviews() {
  return (
    <section className="section" id="reviews">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-subtitle">Guest Experiences</span>
          <h2 className="section-title">Words from Our Valued Guests</h2>
          <p className="section-desc">
            Rated {hotelInfo.rating} out of 5 stars by over {hotelInfo.totalReviews}+ travelers,
            executives, and families from across the globe.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {reviewsData.map((review) => (
            <div key={review.id} className="review-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div className="review-stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--champagne-gold)" color="var(--champagne-gold)" />
                  ))}
                </div>
                <Quote size={20} color="var(--gold-border)" />
              </div>

              <h4 className="review-title">"{review.title}"</h4>
              <p className="review-comment">"{review.comment}"</p>

              <div className="reviewer-meta">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="reviewer-avatar"
                  loading="lazy"
                />
                <div>
                  <div className="reviewer-name">{review.name}</div>
                  <div className="reviewer-role">{review.role}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--gold-dark)", marginTop: "2px" }}>
                    Stayed in: {review.roomStayed}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
