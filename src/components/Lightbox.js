import Images from "./Images"

const Lightbox = props => {
  return (
    <div className="lightbox-bg">
      <div className="lightbox">
        <button className="close">
          &times;
        </button>
        <Images images={props.images}/>
      </div>
    </div>
  )
}

export default Lightbox