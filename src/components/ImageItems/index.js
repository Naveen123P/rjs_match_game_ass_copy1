import './index.css'

const ImageItems = props => {
  const {imageDetails, getClickedImageId} = props
  const {imageUrl, thumbnailUrl} = imageDetails

  const onClickedImage = () => {
    getClickedImageId(imageUrl)
  }

  return (
    <li className="img-container">
      <button type="button" onClick={onClickedImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="img-style" />
      </button>
    </li>
  )
}

export default ImageItems
