const Cart = () => {
  return (
    <div className="cart-content">
      <h3>Cart</h3>
      <hr />
      <div className="product">
        <img src="./images/image-product-1-thumbnail.jpg" alt="" className="thumbnail" />
        <div className="product-info">
          <p className="product-title">Fall Limited Edition Sneakers</p>
          <p className="price">$125.00 x 3 <span className='total'>$375.00</span></p>
        </div>
        <button className="delete-from-cart">
          <img src="./images/icon-delete.svg" alt="Del"/>
        </button>
      </div>
      {/* <p className="cart-empty">Your cart is empty.</p> */}
      <button className="checkout">Checkout</button>
    </div>
  )
}

export default Cart