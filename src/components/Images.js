import { useState } from "react"

const Images = props => {
  const [displiedImage, setImage] = useState('0')
  const handleClick = e => {
    setImage(e.target.id)
  }

  return (
    <div className="images">
      <div className="display">
        <button className="prev">
          <img src="./images/icon-previous.svg" alt="prev"/>
        </button>
        <img className="display-img" src={props.images.main[displiedImage] } alt="Sneaker"/>
        <button className="next">
          <img src="./images/icon-next.svg" alt="next"/>
        </button>
      </div>
      <ul className="thumbnails">
        <li className="selected"><img src={props.images.thumbnails[0]} alt="Product 1" id="0" onClick={ handleClick } /></li>
        <li><img src={props.images.thumbnails[1]} alt="Product 2" id="1" onClick={ handleClick } /></li>
        <li><img src={props.images.thumbnails[2]} alt="Product 3" id="2" onClick={ handleClick } /></li>
        <li><img src={props.images.thumbnails[3]} alt="Product 4" id="3" onClick={ handleClick } /></li>
      </ul>
    </div>
  )
}

export default Images