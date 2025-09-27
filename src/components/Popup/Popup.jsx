export default function Popup({ onClose, title, children }) {
  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }
  const isImagePopup = !title && children?.type?.name === "ImagePopup";

  return (
    <div className="modal" onClick={handleOverlayClick}>
      <div className={isImagePopup ? "modal-image" : "modal-content"}>
        <button className="close-button" onClick={onClose} type="button">
          ×
        </button>
        {!isImagePopup && title && <h3>{title}</h3>}
        {children}
      </div>
    </div>
  );
}
