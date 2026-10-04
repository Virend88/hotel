import { useState } from "react";
import { X, Eye } from "lucide-react";
import { galleryData, galleryCategories } from "../data/galleryData";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxPhoto, setLightboxPhoto] = useState(null);

  // Filter gallery items
  const filteredPhotos =
    selectedCategory === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory);

  return (
    <div className="gallery-page">
      {/* Banner */}
      <section
        className="section section-dark"
        style={{
          padding: "5rem 0 4rem 0",
          backgroundImage:
            "linear-gradient(rgba(11, 31, 51, 0.85), rgba(11, 31, 51, 0.95)), url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-subtitle">Visual Experience</span>
          <h1 className="section-title">Hotel Photo Gallery</h1>
          <p className="section-desc" style={{ maxWidth: "640px", margin: "0 auto" }}>
            Explore high-resolution visual vignettes of our suites, culinary
            establishments, wellness havens, and striking Bengaluru architecture.
          </p>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="section">
        <div className="container">
          {/* Category Filter Tabs */}
          <div className="gallery-categories">
            {galleryCategories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Photos Grid */}
          <div className="gallery-grid">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                className="gallery-item"
                onClick={() => setLightboxPhoto(photo)}
                title="Click to expand"
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <span className="gallery-badge">{photo.category}</span>
                  <h4 className="gallery-title">{photo.title}</h4>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "#CBD5E1", fontSize: "0.85rem" }}>
                    <Eye size={15} /> Click to expand
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxPhoto && (
        <div className="lightbox-modal" onClick={() => setLightboxPhoto(null)}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={() => setLightboxPhoto(null)}
              aria-label="Close photo view"
            >
              <X size={20} />
            </button>
            <img
              src={lightboxPhoto.image}
              alt={lightboxPhoto.title}
              className="lightbox-image"
            />
            <div className="lightbox-info">
              <span className="gallery-badge">{lightboxPhoto.category}</span>
              <h3 style={{ fontSize: "1.45rem", margin: "0.35rem 0" }}>
                {lightboxPhoto.title}
              </h3>
              <p style={{ color: "#CBD5E1", fontSize: "0.95rem", margin: 0 }}>
                {lightboxPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
