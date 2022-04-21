const Cart = () => {
  return (
    <div className="cart-content">
      <h5>Cart</h5>
      <hr />
      <img src="./images/" alt="" className="thumbnail" />
      <span className="product-info">
        <p className="produc-title">Fall Edition Sneakers</p>
        <p className="price">$125.00 x 3 $375.00</p>
      </span>
      <button className="delete-from-cart">
        <img src="./images/icon-delete.svg" alt="Del"/>
      </button>
      <button className="checkout">Checkout</button>
    </div>
  )
}

export default Cart