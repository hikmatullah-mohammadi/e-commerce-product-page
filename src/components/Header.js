import { useState } from 'react'
import Cart from './Cart'

const Header = () => {
  const [cartOpen, toggleCart] = useState(false)
  return (
    <header>
      <span className="logo"><img src="./images/logo.svg" alt="sneakers"/></span>
      <nav>
        <ul>
          <li><a href="#!" className="nav-link">Collections</a></li>
          <li><a href="#!" className="nav-link">Men</a></li>
          <li><a href="#!" className="nav-link">Women</a></li>
          <li><a href="#!" className="nav-link">About</a></li>
          <li><a href="#!" className="nav-link">Contact</a></li>
        </ul>
      </nav>
      <div className="user">
        <button className="btn-cart" onClick={() => toggleCart(!cartOpen)}>
          <img src="./images/icon-cart.svg" alt="cart" />
        </button><span className="cart-status">3</span>
        <img className="avatar" src="./images/image-avatar.png" alt="avatar" />
        { cartOpen && <Cart />}
      </div>
      <hr />
    </header>
  )
}

export default Header