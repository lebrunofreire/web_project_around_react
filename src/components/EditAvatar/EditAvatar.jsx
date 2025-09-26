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
      <span class="error-Message"></span>
      <button class="modal-save-button" type="submit">
        Salvar...
      </button>
    </form>
  );
}
