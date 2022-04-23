import Images from "./Images"

const Lightbox = () => {
  return (
    <div className="lightbox-bg">
      <div className="lightbox">
        <button className="close">
          &times;
        </button>
        <Images />
      </div>
    </div>
  )
}

export default Lightbox