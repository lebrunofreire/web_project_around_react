import { useRef, useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function EditAvatar() {
  const { currentUser, handleUpdateAvatar } = useContext(CurrentUserContext);
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateAvatar({ avatar: avatarRef.current.value });
  }

  return (
    <form id="avatarForm" onSubmit={handleSubmit} noValidate>
      <input
        type="url"
        id="avatarUrlInput"
        name="avatarUrlInput"
        placeholder="URL da nova imagem"
        ref={avatarRef}
        defaultValue={currentUser.avatar}
        required
      />
      <span className="error-Message"></span>
      <button className="modal-save-button" type="submit">
        Salvar...
      </button>
    </form>
  );
}
