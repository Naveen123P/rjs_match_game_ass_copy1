import './index.css'

const ImageItems = props => {
  const {imageDetails, getClickedImageId} = props
  const {imageUrl, thumbnailUrl} = imageDetails

  const onClickedImage = () => {
    getClickedImageId(thumbnailUrl)
  }

  return (
    <li className="img-container">
      <button type="button" onClick={onClickedImage}>
        <img src={imageUrl} alt="match" className="img-style" />
      </button>
    </li>
  )
}
export default ImageItems