export default function Popup(props) {
  const { onClose, title, children } = props;

  return (
    <div className="popup modal" id="modal">
      <div className="modal-content">
        <button className="popup__close close-button" id="closeModalBtn">
          ×
        </button>
        <h3 className="popup__title">{title}</h3>
        {children}
      </div>
    </div>
  );
}
