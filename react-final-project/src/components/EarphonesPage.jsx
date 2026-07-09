import React from "react";
import earphonesYx1 from '../pictures/earphones_yx1.png';

function EarphonesPage({ products }) {
  const yx1 = products.find((p) => p.slug === "yx1-earphones");

  return (
    <div className="category-page">
      <div className="category-title-banner">
        <h2>EARPHONES</h2>
      </div>
      
      <div className="container products-category-list">
        <div className="category-product-card">
          <div className="product-image-box">
            <img src={earphonesYx1} alt="YX1 Wireless Earphones" />
          </div>
          <div className="product-details-box">
            {yx1?.new && <span className="new-tag">NEW PRODUCT</span>}
            <h3 className="product-title">{yx1?.name}</h3>
            <p className="product-desc">{yx1?.description}</p>
            <button className="btn">See Product</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EarphonesPage;