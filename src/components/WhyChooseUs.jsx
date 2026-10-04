import { hotelInfo } from "../data/hotelInfo";

export default function WhyChooseUs() {
  return (
    <section className="section section-dark" id="why-choose-us">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-subtitle">The Grand Horizon Difference</span>
          <h2 className="section-title">Why Discerning Guests Choose Us</h2>
          <p className="section-desc">
            We honor Bengaluru's heritage of hospitality while providing
            uncompromising modern comfort, personalized service, and architectural serenity.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="why-us-grid">
          {hotelInfo.whyChooseUs.map((pillar, index) => (
            <div key={index} className="why-us-card">
              <div className="why-us-stat">{pillar.stat}</div>
              <h3 className="why-us-title">{pillar.title}</h3>
              <p className="why-us-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
