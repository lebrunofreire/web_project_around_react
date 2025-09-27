export default function ImagePopup({ image }) {
  return (
    <>
      <img src={image.link} alt={image.name} className="image-modal-content" />
      <p className="image-modal-title">{image.name}</p>
    </>
  );
}
