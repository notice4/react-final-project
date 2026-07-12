import headphonesMark2 from '../pictures/headphones_mark2.png'
import headphonesMark1 from '../pictures/headphones_mark1.png'
import headphonesXX59 from '../pictures/headphones_xx59.png'

function HeadphonesPage({ products }) {
  const mark2 = products.find((p) => p.slug === 'xx99-mark-two-headphones')
  const mark1 = products.find((p) => p.slug === 'xx99-mark-one-headphones')
  const xx59 = products.find((p) => p.slug === 'xx59-headphones')

  return (
    <div className="category-page">
      <div className="category-title-banner">
        <h2>HEADPHONES</h2>
      </div>

      <div className="container products-category-list">
        <div className="category-product-card">
          <div className="product-image-box">
            <img src={headphonesMark2} alt="XX99 Mark II Headphones" />
          </div>
          <div className="product-details-box">
            {mark2?.new && <span className="new-tag">NEW PRODUCT</span>}
            <h3 className="product-title">{mark2?.name}</h3>
            <p className="product-desc">{mark2?.description}</p>
            <button className="btn">See Product</button>
          </div>
        </div>

        <div className="category-product-card reverse">
          <div className="product-image-box">
            <img src={headphonesMark1} alt="XX99 Mark I Headphones" />
          </div>
          <div className="product-details-box">
            {mark1?.new && <span className="new-tag">NEW PRODUCT</span>}
            <h3 className="product-title">{mark1?.name}</h3>
            <p className="product-desc">{mark1?.description}</p>
            <button className="btn">See Product</button>
          </div>
        </div>

        <div className="category-product-card">
          <div className="product-image-box">
            <img src={headphonesXX59} alt="XX59 Headphones" />
          </div>
          <div className="product-details-box">
            {xx59?.new && <span className="new-tag">NEW PRODUCT</span>}
            <h3 className="product-title">{xx59?.name}</h3>
            <p className="product-desc">{xx59?.description}</p>
            <button className="btn">See Product</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeadphonesPage
