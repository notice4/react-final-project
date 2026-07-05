import React from 'react';
import orange_speaker from '../pictures/orange_speaker.png';
import speakerZx7 from '../pictures/zx7 speaker.png'; 
import small_earphones from '../pictures/small_earphones.png';

export default function ProductFeatures({ zx9, zx7, yx1 }) {
  return (
    <section className="features-section">
      <div className="container">
        
        <div className="feature-orange">
          <div className="feature-orange-img">
            <img src={orange_speaker} alt="ZX9 Speaker" />
          </div>
          <div className="feature-orange-info">
            <h2>{zx9?.name?.toUpperCase()}</h2>
            <p>{zx9?.description}</p>
            <button className="btn-dark">See Product</button>
          </div>
        </div>

        <div className="feature-grey-row">
          <div className="feature-grey-info">
            <h2>{zx7?.name?.toUpperCase()}</h2>
            <button className="btn-outline">See Product</button>
          </div>
          <div className="feature-grey-img">
            <img src={speakerZx7} alt="ZX7 Speaker" />
          </div>
        </div>

        <div className="feature-twocol">
          <div className="feature-col-img">
            <img src={small_earphones} alt="YX1 Earphones" />
          </div>
          <div className="feature-col-info">
            <h2>{yx1?.name?.toUpperCase()}</h2>
            <button className="btn-outline">See Product</button>
          </div>
        </div>

      </div>
    </section>
  );
}