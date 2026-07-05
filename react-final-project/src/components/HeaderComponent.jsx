import React from 'react';
import headphonesImg from '../pictures/headphones.png';

export default function HeaderComponent({ heroProduct, currentPage, setCurrentPage }) {
    const handleNavigation = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
  };

  return (
    <>
      <header className="header">
        <div className="container header-wrap">
          <a 
            href="/" 
            className="logo" 
            onClick={(e) => handleNavigation(e, 'home')}
          >
            audiophile
          </a>
          <nav className="menu">
            <a 
              href="/" 
              className={`menu-link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={(e) => handleNavigation(e, 'home')}
            >
              Home
            </a>
            <a 
              href="/headphones" 
              className={`menu-link ${currentPage === 'headphones' ? 'active' : ''}`}
              onClick={(e) => handleNavigation(e, 'headphones')}
            >
              Headphones
            </a>
            <a 
              href="/speakers" 
              className={`menu-link ${currentPage === 'speakers' ? 'active' : ''}`}
              onClick={(e) => handleNavigation(e, 'speakers')}
            >
              Speakers
            </a>
            <a 
              href="/earphones" 
              className={`menu-link ${currentPage === 'earphones' ? 'active' : ''}`}
              onClick={(e) => handleNavigation(e, 'earphones')}
            >
              Earphones
            </a>
          </nav>
          <button className="cart-btn" aria-label="Cart">
            <i className="fa-solid fa-cart-shopping cart-icon"></i>
          </button>
        </div>
      </header>

      {currentPage === 'home' && (
        <section className="hero">
          <div className="container hero-wrap">
            <div className="hero-info">
              {(heroProduct?.new || heroProduct?.isNew) && <span className="subtitle">New Product</span>}
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
      )}
    </>
  );
}