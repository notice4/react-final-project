import React from 'react';
import headphonesSmall from '../pictures/headphones2.png';
import speakers from '../pictures/speakers.png';  
import earphones from '../pictures/earphones.png'; 

export default function Categories() {
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