import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../actions/actions'
import Images from './Images'
import Lightbox from './Lightbox'
import ProductInfo from './ProductInfo'

const Main = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const products = useSelector(state => state.products)
  const items = products.map(item => (
    <div className="products" key={item.id}>
      <Images images={item.images}/>
      <ProductInfo product={item}/>
      <Lightbox images={item.images}/>
    </div>
  ))
  
  return (
    <main>
      { items }
    </main>
  )
}

export default Main