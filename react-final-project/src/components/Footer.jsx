import React from 'react';

export default function Footer() {
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