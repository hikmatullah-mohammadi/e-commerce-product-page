import { useState } from "react"

const Images = () => {
  const [displiedImage, setImage] = useState('1')
  const handleClick = e => {
    setImage(e.target.id)
  }
  return (
    <div className="images">
      <div className="display">
        <button className="prev">
          <img src="./images/icon-previous.svg" alt="prev"/>
        </button>
        <img className="display-img" src={"./images/image-product-"+displiedImage+".jpg"} alt="Sneaker"/>
        <button className="next">
          <img src="./images/icon-next.svg" alt="next"/>
        </button>
      </div>
      <ul className="thumbnails">
        <li className="selected"><img src="./images/image-product-1-thumbnail.jpg" alt="Product 1" id="1" onClick={ handleClick } /></li>
        <li><img src="./images/image-product-2-thumbnail.jpg" alt="Product 2" id="2" onClick={ handleClick } /></li>
        <li><img src="./images/image-product-3-thumbnail.jpg" alt="Product 3" id="3" onClick={ handleClick } /></li>
        <li><img src="./images/image-product-4-thumbnail.jpg" alt="Product 4" id="4" onClick={ handleClick } /></li>
      </ul>
    </div>
  )
}

export default Images