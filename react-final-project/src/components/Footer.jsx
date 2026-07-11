import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [message, setMessage] = useState('');
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors, isSubmitting } 
  } = useForm();

  const onSubmit = async (data) => {
    setMessage('');
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await res.json();
      
      if (res.ok) {
        setMessage(result.message);
        reset();
      } else {
        setMessage(result.error || 'Submission failed');
      }
    } catch (err) {
      setMessage('Network error. Please try again later.');
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-wrap">
        <div className="footer-line"></div>
        <div className="footer-top">
          <Link to="/" className="logo">audiophile</Link>
          <nav className="footer-nav">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/category/headphones" className="footer-link">Headphones</Link>
            <Link to="/category/speakers" className="footer-link">Speakers</Link>
            <Link to="/category/earphones" className="footer-link">Earphones</Link>
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
          <div className="footer-contact" style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '350px' }}>
            <h4 style={{ color: 'white', margin: 0 }}>Contact Us</h4>
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  {...register("name", { required: "Name is required" })}
                  style={{ padding: '10px', width: '100%', boxSizing: 'border-box' }}
                />
                {errors.name && <span style={{ color: 'red', fontSize: '12px', display: 'block', marginTop: '4px' }}>{errors.name.message}</span>}
              </div>
              
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  style={{ padding: '10px', width: '100%', boxSizing: 'border-box' }}
                />
                {errors.email && <span style={{ color: 'red', fontSize: '12px', display: 'block', marginTop: '4px' }}>{errors.email.message}</span>}
              </div>

              <div>
                <textarea 
                  placeholder="Your Message"
                  {...register("message", { 
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters long"
                    }
                  })}
                  style={{ padding: '10px', width: '100%', height: '80px', boxSizing: 'border-box', resize: 'vertical' }}
                />
                {errors.message && <span style={{ color: 'red', fontSize: '12px', display: 'block', marginTop: '4px' }}>{errors.message.message}</span>}
              </div>

              <button type="submit" disabled={isSubmitting} className="btn" style={{ padding: '10px 20px', border: 'none', cursor: 'pointer' }}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            {message && <p style={{ color: '#D87D4A', margin: 0 }}>{message}</p>}
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