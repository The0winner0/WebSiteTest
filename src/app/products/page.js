// /app/page.js
// This component is now styled with custom CSS from styles.css

'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import '../Css/Products.css'; // Import the new CSS file

// --- Single, Centralized Data Source ---
const allProducts = [
  {
    id: 1,
    category: 'AgTags',
    name: 'Kinesis Asset Tag',
    imageUrl: 'https://i0.wp.com/atollsolutions.com/wp-content/uploads/2025/03/asset.webp',
    description: 'Kinesis Asset Tags are small, low-power, wireless devices that use BLE technology to advertise their presence and proximity. This allows smart devices to track assets, enable indoor positioning, and provide wayfinding, Ideal for Fixed assets.',
    specs: [
      { label: 'Bluetooth', value: '5.x Compatible' },
      { label: 'Battery', value: 'CR2450 Coin Cell' },
      { label: 'Weight', value: '30g +/-10%' },
      { label: 'Dimensions', value: '42 x 42 x 12mm' },
      { label: 'IP class', value: 'IP56' },
    ],
  },
  {
    id: 2,
    category: 'AgTags',
    name: 'Kinesis Lanyard Tag',
    imageUrl: 'https://i0.wp.com/atollsolutions.com/wp-content/uploads/2025/03/tag.webp',
    description: 'The Kinesis RTLS Lanyard Tag is a wearable BLE-enabled device designed for real-time personnel tracking in workplaces, hospitals, and secure facilities. With low power consumption, instant location updates, and seamless integration, it ensures safety, security, and operational efficiency. Ideal for People tracking.',
    specs: [
      { label: 'Bluetooth', value: '5.x Compatible' },
      { label: 'Battery', value: 'CR2032 Coin Cell' },
      { label: 'Weight', value: '20g +/-10%' },
      { label: 'Dimensions', value: '40 x 30 x 11mm' },
      { label: 'IP class', value: 'IP54' },
    ],
  },
  {
    id: 3,
    category: 'AgTags',
    name: 'Kinesis Low Profile Tag',
    imageUrl: 'https://i0.wp.com/atollsolutions.com/wp-content/uploads/2025/03/chip.webp',
    description: 'Our Low-Profile RTLS Tag is a compact, ultra-thin tracking device designed for seamless real-time location tracking. Its slim and lightweight design makes it easy to attach to equipment, assets, or personnel badges without adding bulk.',
    specs: [
      { label: 'Bluetooth', value: '5.x Compatible' },
      { label: 'Battery', value: 'CR2025 Coin Cell' },
      { label: 'Weight', value: '40g +/-5%' },
      { label: 'Dimensions', value: '60 x 30 x 5 mm' },
      { label: 'IP class', value: 'IP64' },
    ],
  },
  {
    id: 4,
    category: 'AgTags',
    name: 'Wearable Tag',
    modalName: 'Kinesis Wearable Tag',
    imageUrl: 'https://i0.wp.com/atollsolutions.com/wp-content/uploads/2025/03/ble-tag-1-hd-side-view.webp',
    description: 'The Kinesis Wearable Tag is a small, lightweight, wrist-worn device that uses BLE for real-time indoor tracking. Its low power consumption, instant location updates, and seamless integration ensure safety, security, and operational efficiency, making it perfect for all-day wear.',
    specs: [
      { label: 'Bluetooth', value: '5.x Compatible' },
      { label: 'Battery', value: 'CR2032 Coin Cell' },
      { label: 'Weight', value: '20g +/-10%' },
      { label: 'Dimensions', value: '36 x 26 x 8 mm' },
      { label: 'IP class', value: 'IP54' },
    ],
  },
  {
    id: 5,
    category: 'AuTags',
    name: 'Kinesis UWB Tag',
    modalName: 'Kinesis UWB Tag (Compact)',
    imageUrl: 'https://i0.wp.com/atollsolutions.com/wp-content/uploads/2025/03/asset.webp',
    description: 'Kinesis UWB tag uses ultra-wideband radio technology to accurately track the location or relative distance of an object or person in real-time providing centimeter-level precision, making it well-suited to areas requiring the most precision.',
    specs: [
      { label: 'Bluetooth', value: '5.x Compatible' },
      { label: 'Battery', value: 'CR2032 Coin Cell' },
      { label: 'Weight', value: '50g +/-20%' },
      { label: 'Dimensions', value: '36 x 32 x 11 mm' },
      { label: 'IP class', value: 'IP56' },
    ],
  },
  {
    id: 6,
    category: 'AuTags',
    name: 'Kinesis UWB Tag',
    imageUrl: 'https://i0.wp.com/atollsolutions.com/wp-content/uploads/2025/03/tag.webp',
    description: 'Kinesis UWB tag uses ultra-wideband radio technology to accurately track the location or relative distance of an object or person in real-time providing centimeter-level precision, making it well-suited to areas requiring the most precision.',
    specs: [
      { label: 'Bluetooth', value: '5.x Compatible' },
      { label: 'Battery', value: 'CR2477 Coin Cell' },
      { label: 'Weight', value: '55g +/-20%' },
      { label: 'Dimensions', value: '61 x 38 x 20 mm' },
      { label: 'IP class', value: 'IP56' },
    ],
  },
  {
    id: 7,
    category: 'Environmental Tags',
    name: 'Kinesis Sensor Tag',
    imageUrl: 'https://i0.wp.com/atollsolutions.com/wp-content/uploads/2025/03/sensor-tag.webp',
    description: 'Kinesis Environmental sensor tag monitors presence, proximity, and environment. Customizable and built with industrial-grade materials, it’s ideal for asset tracking with environmental sensing.',
    specs: [
      { label: 'Bluetooth', value: '5.x Compatible' },
      { label: 'Battery', value: 'CR2477 x 2 Coin Cell' },
      { label: 'Weight', value: '55g +/-5%' },
      { label: 'Dimensions', value: '80 x 40 x 20 mm' },
      { label: 'IP class', value: 'IP56' },
    ],
  },
];

// --- Simplified and Stable Modal Component ---
// All exit animation logic has been removed to ensure stability.

const ProductModal = ({ product, onClose }) => {
  const closeButtonRef = useRef(null);

  // Effect to focus the close button when the modal opens for accessibility.
  // This part is safe and does not affect closing.
  useEffect(() => {
    if (product) {
      // A tiny delay can help ensure the element is ready to be focused.
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 0);
    }
  }, [product]);

  // If there is no product data, the modal is not rendered. Simple and effective.
  if (!product) {
    return null;
  }

  return (
    <div
      className="modal-overlay"
      onClick={onClose} // The overlay click now directly triggers onClose.
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // Prevents clicks inside the modal from closing it.
      >
        <button
          ref={closeButtonRef}
          onClick={onClose} // The close button now directly triggers onClose.
          className="modal-close-button"
          aria-label="Close modal"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="modal-body">
          <h3 id="modal-title" className="modal-title">
            {product.modalName || product.name}
          </h3>

          <div className="modal-description-container">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={120}
              height={120}
              className="modal-image"
            />
            <p className="modal-description-text">{product.description}</p>
          </div>

          <div className="modal-specs-container">
            <h4 className="modal-specs-title">Specifications</h4>
            <div className="modal-specs-table-wrapper">
              <table className="modal-specs-table">
                <tbody>
                  {product.specs.map((spec, index) => (
                    <tr key={index} className="modal-spec-row">
                      <td className="modal-spec-label">{spec.label}</td>
                      <td className="modal-spec-value">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Reusable Product Card Component ---
const ProductCard = ({ product, onViewMore }) => (
  <div className="product-card">
    <div className="product-card-image-wrapper">
      <Image src={product.imageUrl} alt={product.name} width={250} height={250} className="product-card-image" />
    </div>
    <div className="product-card-content">
      <h4 className="product-card-title">{product.name}</h4>
    </div>
    <button onClick={() => onViewMore(product)} className="product-card-button">
      View More
    </button>
  </div>
);

// --- Main Page Component ---
export default function KinesisTagsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Group products by category dynamically
  const groupedProducts = allProducts.reduce((acc, product) => {
    (acc[product.category] = acc[product.category] || []).push(product);
    return acc;
  }, {});

  const handleViewMore = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <main className="page-container products-page-main">
        {/* Hero Image */}
        <div className="hero-banner">
          <Image
            src="https://i0.wp.com/atollsolutions.com/wp-content/uploads/2025/03/fina-walla-photo.png"
            alt="Kinesis RTLS Devices Banner"
            width={2048}
            height={751}
            priority={true}
            className="hero-banner-image"
          />
        </div>

        <div className="content-wrapper">
          {/* Introduction Section */}
          <section className="intro-section">
            <h2 className="intro-title">Kinesis RTLS Tags</h2>
            <p className="intro-paragraph">
              Atoll Solutions offers a wide range of standard and customisable Tags for all your Location Visibility needs. These devices can be used wherever you need low power sensors, widgets or location identifiers. Tags may be used for either movable applications (as a Tracker) or immovable applications (as a Beacon).
            </p>
          </section>

          {/* Dynamically Rendered Product Sections */}
          <div className="product-sections-container">
            {Object.entries(groupedProducts).map(([category, products]) => (
              <section key={category} className="product-category-section">
                <h3 className="product-category-title">{category}</h3>
                <div className="product-grid">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} onViewMore={handleViewMore} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      {/* Modal is rendered here and controlled by state */}
      <ProductModal product={selectedProduct} onClose={handleCloseModal} />
    </>
  );
}
