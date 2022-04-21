import { useState } from "react"

const Images = () => {
  const [displiedImage, setImage] = useState('1')
  const handleClick = e => {
    setImage(e.target.id)
  }
  return (
    <div className="images">
      <div className="display">
        <img src={"./images/image-product-"+displiedImage+".jpg"} alt=""/>
      </div>
      <ul className="thumbnails">
        <li className="selected"><img src="./images/image-product-1-thumbnail.jpg" alt="" id="1" onClick={ handleClick } /></li>
        <li><img src="./images/image-product-2-thumbnail.jpg" alt="" id="2" onClick={ handleClick } /></li>
        <li><img src="./images/image-product-3-thumbnail.jpg" alt="" id="3" onClick={ handleClick } /></li>
        <li><img src="./images/image-product-4-thumbnail.jpg" alt="" id="4" onClick={ handleClick } /></li>
      </ul>
    </div>
  )
}

export default Images