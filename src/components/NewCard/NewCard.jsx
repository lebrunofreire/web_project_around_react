export default function NewCard() {
  return (
    <form id="profileForm" name="card-form" noValidate>
      <input
        type="text"
        id="nameInput"
        name="nameInput"
        minlength="2"
        maxlength="40"
        required
      />
      <span className="error-Message"></span>
      <input
        type="text"
        id="titleInput"
        name="titleInput"
        minlength="2"
        maxlength="200"
        required
      />
      <span className="error-Message"></span>
      <button className="modal-save-button" type="submit">
        Salvar...
      </button>
    </form>
  );
}
