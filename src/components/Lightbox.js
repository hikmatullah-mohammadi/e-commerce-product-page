import { useDispatch } from "react-redux"
import Images from "./Images"
import { toggleLightbox } from './../actions/actions'

const Lightbox = props => {
  const dispatch = useDispatch()
  const handleToggleLightbox = () => {
    dispatch(toggleLightbox(-1, -1))
  }

  return (
    <div className="lightbox-bg">
      <div className="lightbox">
        <button className="close" onClick={handleToggleLightbox}>
          &times;
        </button>
        <Images images={props.images} productId={props.productId}/>
      </div>
    </div>
  )
}

export default Lightbox