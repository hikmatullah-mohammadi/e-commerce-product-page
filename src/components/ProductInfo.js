const ProductInfo = props => {
  return (
    <div className="product-info">
        <h2 className="type">{ props.product.type }</h2>
        <h1 className="product-title">{ props.product.title }</h1>
        <p className="description">{ props.product.description }</p>
        <div className='price'>
          <span className="current-price">${props.product.price.current} </span>
          <span className="discount">{props.product.price.discount} </span>
          <span className="original-price">${props.product.price.original} </span>
        </div>
        <div className="add-to-cart">
          <div className="number">
            <button className="remove"><img src="./images/icon-minus.svg" alt="-"/></button>
            <span className="number-of-product"> 0 </span>
            <button className="add"><img src="./images/icon-plus.svg" alt="+"/></button>
          </div>
          <button className="btn-add-to-cart">
            <img src="./images/icon-cart.svg" alt=""/>{" "}Add to cart 
          </button>
        </div>
      </div>
  )
}

export default ProductInfo