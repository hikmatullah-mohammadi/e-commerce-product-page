import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, toggleLightbox } from '../actions/actions'
import Images from './Images'
import Lightbox from './Lightbox'
import ProductInfo from './ProductInfo'

const Main = () => {
  const dispatch = useDispatch()
  const { isLightBoxOpen, lightboxId } = useSelector(state => state.productsReducer.navigation)
  
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  
  window.addEventListener('resize', () => {
    if (window.outerWidth <= 768 && isLightBoxOpen) {
      dispatch(toggleLightbox(-1, -1))
    }
  })
  
  const products = useSelector(state => state.productsReducer.products)
  const elements = products.map(item => (
    <div className="products" key={item.id}>
      <Images images={item.images} productId={item.id} />
      <ProductInfo product={item}/>
      {
        isLightBoxOpen && lightboxId === item.id && window.outerWidth > 768 && 
        <Lightbox images={item.images} productId={item.id} />
      }
    </div>
  ))
  
  return (
    <main>
      { elements }
    </main>
  )
}

export default Main