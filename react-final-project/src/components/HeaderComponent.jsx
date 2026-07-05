import React from 'react';
import headphonesImg from '../pictures/headphones.png';

export default function HeaderComponent({ heroProduct }) {
  return (
    <>
      <header className="header">
        <div className="container header-wrap">
          <a href="/" className="logo">audiophile</a>
          <nav className="menu">
            <a href="/" className="menu-link active">Home</a>
            <a href="/headphones" className="menu-link">Headphones</a>
            <a href="/speakers" className="menu-link">Speakers</a>
            <a href="/earphones" className="menu-link">Earphones</a>
          </nav>
          <button className="cart-btn" aria-label="Cart">
            <i className="fa-solid fa-cart-shopping cart-icon"></i>
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-wrap">
          <div className="hero-info">
            {heroProduct?.new && <span className="subtitle">New Product</span>}
            <h1 className="title">{heroProduct?.name}</h1>
            <p className="description">
              {heroProduct?.description}
            </p>
            <button className="btn">See Product</button>
          </div>
          <div className="hero-img">
            <img src={headphonesImg} alt="Headphones XX99" />
          </div>
        </div>
      </section>
    </>
  );
}