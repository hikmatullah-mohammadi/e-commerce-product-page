import { useState } from 'react'
import Cart from './Cart'

const Header = () => {
  const [cartOpen, toggleCart] = useState(false)
  const [menuOpen, toggleMenu] = useState(true)

  const handleToggleMenu = () => {
    toggleMenu(!menuOpen)
  }
  return (
    <header>
      <button className="bars" onClick={handleToggleMenu}>
        {
          menuOpen ?
          <img src="./images/icon-close.svg" alt="x"/> :
          <img src="./images/icon-menu.svg" alt="bars"/>
        }
      </button>
      <span className="logo"><img src="./images/logo.svg" alt="sneakers"/></span>
      <nav style={{display: menuOpen ? "block" : "none"}}>
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
        </button><span className="cart-status" onClick={() => toggleCart(!cartOpen)}>3</span>
        <img className="avatar" src="./images/image-avatar.png" alt="avatar" />
      </div>
      <hr />
      { cartOpen && <Cart />}
    </header>
  )
}

export default Header