export default function EditProfile() {
  return (
    <form id="profileForm">
      <input
        type="text"
        id="nameInput"
        name="nameInput"
        placeholder="Name"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="error-Message"></span>
      <input
        type="text"
        id="titleInput"
        name="titleInput"
        placeholder="Title"
        minLength="2"
        maxLength="200"
        required
      />
      <span className="error-Message"></span>
      <button className="modal-save-button" type="submit">
        Salvar...
      </button>
    </form>
  );
}
