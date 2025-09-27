export default function EditAvatar() {
  return (
    <form id="avatarForm">
      <input
        type="url"
        id="avatarUrlInput"
        name="avatarUrlInput"
        placeholder="URL da nova imagem"
        required
      />
      <span className="error-Message"></span>
      <button className="modal-save-button" type="submit">
        Salvar...
      </button>
    </form>
  );
}
