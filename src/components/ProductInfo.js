const ProductInfo = () => {
  return (
    <div className="product-info">
        <p className="company">SNEAKER COMPANY</p>
        <h3 className="product-title">Fall Limited Edition Sneakers</h3>
        <p className="description">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything the weahter can offer.
        </p>
        <div className='price'>
          <span className="current-price">$125.00 </span>
          <span className="discount">50% </span>
          <span className="original-price">$250.00 </span>
        </div>
        <div className="add-to-cart">
          <span className="number">
            <button className="add"><img src="./images/icon-minus.svg" alt="-"/></button>
            <span className="number-of-product"> 0 </span>
            <button className="remove"><img src="./images/icon-plus.svg" alt="+"/></button>
          </span>
          <button className="btn-add-to-cart">
            <img src="./images/icon-cart.svg" alt="" /> Add to cart 
          </button>
        </div>
      </div>
  )
}

export default ProductInfo