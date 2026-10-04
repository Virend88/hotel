import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, X, Eye } from "lucide-react";
import { galleryData } from "../data/galleryData";

export default function GalleryPreview() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Take top 6 photos for home preview
  const previewPhotos = galleryData.slice(0, 6);

  return (
    <section className="section section-subtle" id="gallery-preview">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-subtitle">Visual Tour</span>
          <h2 className="section-title">A Glimpse of Grand Horizon</h2>
          <p className="section-desc">
            Explore our sophisticated architecture, tranquil poolside lounges,
            sumptuous culinary creations, and tranquil private sanctuaries.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {previewPhotos.map((photo) => (
            <div
              key={photo.id}
              className="gallery-item"
              onClick={() => setSelectedPhoto(photo)}
              title="Click to view full photo"
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
                <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "#CBD5E1", fontSize: "0.8rem" }}>
                  <Eye size={14} /> Click to expand
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery Button */}
        <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
          <Link to="/gallery" className="btn btn-outline-gold btn-lg">
            <span>Explore Complete Photo Gallery</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="lightbox-modal" onClick={() => setSelectedPhoto(null)}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close photo view"
            >
              <X size={20} />
            </button>
            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
              className="lightbox-image"
            />
            <div className="lightbox-info">
              <span className="gallery-badge">{selectedPhoto.category}</span>
              <h3 style={{ fontSize: "1.4rem", margin: "0.35rem 0" }}>
                {selectedPhoto.title}
              </h3>
              <p style={{ color: "#CBD5E1", fontSize: "0.95rem", margin: 0 }}>
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
