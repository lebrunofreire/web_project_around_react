export default function EditProfile() {
  return (
    <form id="profileForm">
      <input
        type="text"
        id="nameInput"
        name="nameInput"
        value="Jacques Cousteau"
        minlength="2"
        maxlength="40"
        required
      />
      <span class="error-Message"></span>
      <input
        type="text"
        id="titleInput"
        name="titleInput"
        value="Explorador"
        minlength="2"
        maxlength="200"
        required
      />
      <span class="error-Message"></span>
      <button class="modal-save-button" type="submit">
        Salvar...
      </button>
    </form>
  );
}
