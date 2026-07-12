import personWearingHeadphones from '../pictures/person.png'

export default function About() {
  return (
    <section className="about-section">
      <div className="container about-wrap">
        <div className="about-info">
          <h2>
            BRINGING YOU THE <span className="highlight">BEST</span> AUDIO GEAR
          </h2>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="about-img">
          <img src={personWearingHeadphones} alt="Person wearing headphones" />
        </div>
      </div>
    </section>
  )
}
