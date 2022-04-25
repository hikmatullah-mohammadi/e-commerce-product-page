import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../actions/actions'

const ProductInfo = props => {
  const dispatch = useDispatch()

  const [isToSave, setIsToSave] = useState(false)
  const [numberOfProduct, setNumberOfProduct] = useState(props.product.numberInCart)

  const handleAddToCart = () => {
    if (numberOfProduct > 0) {
      dispatch(addToCart(props.product.id, numberOfProduct))
      setIsToSave(false)
    }
  }
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
          <button className="remove" onClick={() => {
              if (numberOfProduct > 0) {
                setNumberOfProduct(numberOfProduct - 1)
                setIsToSave(true)
              }
            }}>
            <img src="./images/icon-minus.svg" alt="-"/>
          </button>
          <span className="number-of-product" style={{color: isToSave && 'red'}}> { isToSave ? numberOfProduct : props.product.numberInCart} </span>
          <button className="add" onClick={() => {
              setNumberOfProduct(numberOfProduct + 1)
              setIsToSave(true)
            }}>
            <img src="./images/icon-plus.svg" alt="+"/>
          </button>
        </div>
        <button className="btn-add-to-cart" onClick={ handleAddToCart }>
          <img src="./images/icon-cart.svg" alt=""/>{" "}Add to cart 
        </button>
      </div>
    </div>
  )
}

export default ProductInfo