import React from 'react';
import './App.css';
import headphonesImg from './pictures/headphones.png';
import headphonesSmall from './pictures/headphones2.png';
import earphones from './pictures/earphones.png'; 
import speakers from './pictures/speakers.png';  
import orange_speaker from './pictures/orange_speaker.png';
import speakerZx7 from './pictures/zx7 speaker.png'; 
import small_earphones from './pictures/small_earphones.png';
import personWearingHeadphones from './pictures/person.png';

function Navbar() {
  return (
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
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-wrap">
        <div className="hero-info">
          <span className="subtitle">New Product</span>
          <h1 className="title">XX99 Mark II Headphones</h1>
          <p className="description">
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </p>
          <button className="btn">See Product</button>
        </div>
        <div className="hero-img">
          <img src={headphonesImg} alt="Headphones XX99" />
        </div>
      </div>
    </section>
  );
}

function Categories() {
  const items = [
    { name: 'Headphones', link: '/headphones', img: headphonesSmall },
    { name: 'Speakers', link: '/speakers', img: speakers },
    { name: 'Earphones', link: '/earphones', img: earphones },
  ];

  return (
    <section className="categories">
      <div className="container grid">
        {items.map((item) => (
          <div key={item.name} className="card">
            <div className="card-thumb">
              <img src={item.img} alt={item.name} />
            </div>
            <h3 className="card-title">{item.name}</h3>
            <a href={item.link} className="shop-link">
              Shop <span className="arrow">&rarr;</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProductFeatures() {
  return (
    <section className="features-section">
      <div className="container">
        
        <div className="feature-orange">
          <div className="feature-orange-img">
            <img src={orange_speaker} alt="ZX9 Speaker" />
          </div>
          <div className="feature-orange-info">
            <h2>ZX9 SPEAKER</h2>
            <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <button className="btn-dark">See Product</button>
          </div>
        </div>

        <div className="feature-grey-row">
          <div className="feature-grey-info">
            <h2>ZX7 SPEAKER</h2>
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
            <h2>YX1 EARPHONES</h2>
            <button className="btn-outline">See Product</button>
          </div>
        </div>

      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about-section">
      <div className="container about-wrap">
        <div className="about-info">
          <h2>BRINGING YOU THE <span className="highlight">BEST</span> AUDIO GEAR</h2>
          <p>
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
            earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
            rooms available for you to browse and experience a wide range of our products. Stop by our store 
            to meet some of the fantastic people who make Audiophile the best place to buy your portable 
            audio equipment.
          </p>
        </div>
        <div className="about-img">
          <img src={personWearingHeadphones} alt="Person wearing headphones" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-wrap">
        <div className="footer-line"></div>
        
        <div className="footer-top">
          <a href="/" className="logo">audiophile</a>
          <nav className="footer-nav">
            <a href="/" className="footer-link">Home</a>
            <a href="/headphones" className="footer-link">Headphones</a>
            <a href="/speakers" className="footer-link">Speakers</a>
            <a href="/earphones" className="footer-link">Earphones</a>
          </nav>
        </div>

        <div className="footer-bottom">
          <div className="footer-description">
            <p>
              Audiophile is an all in one stop to fulfill your audio needs. We're a small team 
              of music lovers and sound specialists who are devoted to helping you get the 
              most out of personal audio. Come and visit our demo facility - we're open 7 
              days a week.
            </p>
            <p className="copyright">Copyright 2021. All Rights Reserved</p>
          </div>

          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <ProductFeatures />
        <About />
      </main>
      <Footer />
    </div>
  );
}