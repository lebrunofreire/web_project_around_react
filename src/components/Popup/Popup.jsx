export default function Popup({ onClose, title, children }) {
  const isImagePopup = !title && children?.type?.name === "ImagePopup";

  return (
    <div className="modal">
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
