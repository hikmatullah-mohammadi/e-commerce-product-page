import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from "../actions/actions"

const Cart = () => {
  const dispatch = useDispatch()

  const cart = useSelector(state => state.productsReducer.cart)
  const productElements = cart.products.map(item => (
    <div className="product" key={item.id}>
      <img src={item.thumbnail} alt="" className="thumbnail" />
      <div className="product-info">
        <p className="product-title">{item.title}</p>
        <p className="price">${item.price.current} x {item.number} 
          <span className='total'> ${parseFloat(item.price.current) * parseFloat(item.number)}</span>
        </p>
      </div>
      <button className="delete-from-cart" onClick={() => dispatch(removeFromCart({id: item.id}))}>
        <img src="./images/icon-delete.svg" alt="Del"/>
      </button>
    </div>
  ))

  return (
    <div className="cart-content">
      <div>
        <h3>Cart</h3>
        <hr />
        { 
          cart.products.length > 0 ?
          productElements :
          <p className="cart-empty">Your cart is empty.</p>
        }
        <button className="checkout">Checkout</button>
      </div>
    </div>
  )
}


export default Cart