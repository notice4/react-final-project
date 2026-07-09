import React from "react";
import speakerZx9 from '../pictures/speaker_zx9.png';
import speakerZx7 from '../pictures/speaker_zx7.png';

function SpeakersPage({ products }) {
  const zx9 = products.find((p) => p.slug === "zx9-speaker");
  const zx7 = products.find((p) => p.slug === "zx7-speaker");

  return (
    <div className="category-page">
      <div className="category-title-banner">
        <h2>SPEAKERS</h2>
      </div>

      <div className="container products-category-list">
        <div className="category-product-card">
          <div className="product-image-box">
            <img src={speakerZx9} alt="ZX9 Speaker" />
          </div>
          <div className="product-details-box">
            {zx9?.new && <span className="new-tag">NEW PRODUCT</span>}
            <h3 className="product-title">{zx9?.name}</h3>
            <p className="product-desc">{zx9?.description}</p>
            <button className="btn">See Product</button>
          </div>
        </div>

        <div className="category-product-card reverse">
          <div className="product-image-box">
            <img src={speakerZx7} alt="ZX7 Speaker" />
          </div>
          <div className="product-details-box">
            {zx7?.new && <span className="new-tag">NEW PRODUCT</span>}
            <h3 className="product-title">{zx7?.name}</h3>
            <p className="product-desc">{zx7?.description}</p>
            <button className="btn">See Product</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SpeakersPage;