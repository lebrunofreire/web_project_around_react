export default function NewCard() {
  return (
    <form id="placeForm">
      <input
        type="text"
        id="placeTitleInput"
        name="placeTitleInput"
        placeholder="Title"
        minLength="2"
        maxLength="30"
        required
      />
      <span className="error-Message"></span>
      <input
        type="url"
        id="placeImageUrl"
        name="placeImageUrl"
        placeholder="Image URL"
        required
      />
      <span className="error-Message"></span>
      <button className="modal-save-button" type="submit" id="savePlaceBtn">
        Crie
      </button>
    </form>
  );
}
