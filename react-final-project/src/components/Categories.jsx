import { Link } from 'react-router-dom'
import headphonesSmall from '../pictures/headphones2.png'
import speakers from '../pictures/speakers.png'
import earphones from '../pictures/earphones.png'

export default function Categories() {
  const items = [
    { name: 'Headphones', link: '/category/headphones', img: headphonesSmall },
    { name: 'Speakers', link: '/category/speakers', img: speakers },
    { name: 'Earphones', link: '/category/earphones', img: earphones },
  ]

  return (
    <section className="categories">
      <div className="container grid">
        {items.map((item) => (
          <div key={item.name} className="card">
            <div className="card-thumb">
              <img src={item.img} alt={item.name} />
            </div>
            <h3 className="card-title">{item.name}</h3>
            <Link to={item.link} className="shop-link">
              Shop <span className="arrow">&rarr;</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
