import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cart from './Cart'

const Header = () => {
  const cart = useSelector(state => state.productsReducer.cart)
  const dispatch = useDispatch()
  let cartStatus = 0;
  cart.products.forEach(item => { cartStatus += item.number })

  const [cartOpen, toggleCart] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(true)
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  useEffect(() => {
    const setMenuOpen = () => {
      if (window.outerWidth > 425) {
        setIsMenuOpen(true)
      }
    }
    window.addEventListener('resize', setMenuOpen)
    // clean up function
    return () => window.removeEventListener('resize', setMenuOpen)
  }, [dispatch])
  
  return (
    <header >
      <button className="bars" onClick={handleToggleMenu}>
        {
          isMenuOpen ?
          <img src="./images/icon-close.svg" alt="x"/> :
          <img src="./images/icon-menu.svg" alt="bars"/>
        }
      </button>
      <span className="logo"><img src="./images/logo.svg" alt="sneakers"/></span>
      <nav style={{display: !isMenuOpen ? "none" : "block"}}>
        <ul>
          <li><a href="#!" className="nav-link">Collections</a></li>
          <li><a href="#!" className="nav-link">Men</a></li>
          <li><a href="#!" className="nav-link nav-active">Women</a></li>
          <li><a href="#!" className="nav-link">About</a></li>
          <li><a href="#!" className="nav-link">Contact</a></li>
        </ul>
      </nav>
      <div className="user">
        <button className="btn-cart" onClick={() => toggleCart(!cartOpen)}>
          <img src="./images/icon-cart.svg" alt="cart" />
        </button>
        <span className="cart-status" onClick={() => toggleCart(!cartOpen)}>
          { cartStatus }
        </span>
        <img className="avatar" src="./images/image-avatar.png" alt="avatar" />
      </div>
      <hr />
      { cartOpen && <Cart />}
    </header>
  )
}

export default Header