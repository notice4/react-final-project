import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import headphonesImg from '../pictures/headphones.png';

export default function HeaderComponent({ heroProduct }) {
  const location = useLocation();

  return (
    <>
      <header className="header">
        <div className="container header-wrap">
          <Link to="/" className="logo">
            audiophile
          </Link>
          <nav className="menu">
            <NavLink 
              to="/" 
              className={({ isActive }) => `menu-link ${isActive ? 'active' : ''}`}
            >
              Home
            </NavLink>
            <NavLink 
              to="/category/headphones" 
              className={({ isActive }) => `menu-link ${isActive ? 'active' : ''}`}
            >
              Headphones
            </NavLink>
            <NavLink 
              to="/category/speakers" 
              className={({ isActive }) => `menu-link ${isActive ? 'active' : ''}`}
            >
              Speakers
            </NavLink>
            <NavLink 
              to="/category/earphones" 
              className={({ isActive }) => `menu-link ${isActive ? 'active' : ''}`}
            >
              Earphones
            </NavLink>
          </nav>
          <button className="cart-btn" aria-label="Cart">
            <i className="fa-solid fa-cart-shopping cart-icon"></i>
          </button>
        </div>
      </header>

      {location.pathname === '/' && (
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