import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleLightbox } from "../actions/actions"

const Images = props => {
  const defaultImage = useSelector(state => state.productsReducer.navigation.defaultImage)
  const [displiedImage, setImage] = useState(defaultImage)
  const dispatch = useDispatch()
  const thumbnail0 = useRef()
  const thumbnail1 = useRef()
  const thumbnail2 = useRef()
  const thumbnail3 = useRef()
  
  // set the default thumbnail - selected
  useEffect(() => {
    eval('thumbnail'+defaultImage).current.className = 'selected'
  }, [])

  const resetSelected = () => {
    thumbnail0.current.className = ''
    thumbnail1.current.className = ''
    thumbnail2.current.className = ''
    thumbnail3.current.className = ''
  }

  const handleClick = e => {
    setImage(parseInt(e.target.id))
    resetSelected()
    e.target.className = 'selected'
  }

  const handleNext = () => {
    setImage(displiedImage < 3 ? displiedImage + 1 : 0)
    resetSelected()
    eval('thumbnail'+(displiedImage < 3 ? displiedImage + 1 : 0)).current.className = 'selected'
  }
  
  const handlePrev = () => {
    setImage(displiedImage > 0 ? displiedImage - 1 : 3)
    resetSelected()
    eval('thumbnail'+(displiedImage > 0 ? displiedImage - 1 : 3)).current.className = 'selected'
  }

  const handleToggleLightbox = () => {
    dispatch(toggleLightbox(props.productId, displiedImage))
  }
  return (
    <div className="images">
      <div className="display">
        <button className="prev" onClick={handlePrev}>
          <img src="./images/icon-previous.svg" alt="prev"/>
        </button>
        <img 
          className="display-img"
          src={props.images.main[displiedImage] }
          onClick={handleToggleLightbox}
          alt="Sneaker"
          />
        <button className="next" onClick={ handleNext }>
          <img src="./images/icon-next.svg" alt="next"/>
        </button>
      </div>
      <ul className="thumbnails">
        <li>
          <img src={props.images.thumbnails[0]} alt="Product 1" id="0" onClick={ handleClick } ref={thumbnail0} />
        </li>
        <li>
          <img src={props.images.thumbnails[1]} alt="Product 2" id="1" onClick={ handleClick } ref={thumbnail1} />
        </li>
        <li>
          <img src={props.images.thumbnails[2]} alt="Product 3" id="2" onClick={ handleClick } ref={thumbnail2} />
        </li>
        <li>
          <img src={props.images.thumbnails[3]} alt="Product 4" id="3" onClick={ handleClick } ref={thumbnail3} />
        </li>
      </ul>
    </div>
  )
}

export default Images