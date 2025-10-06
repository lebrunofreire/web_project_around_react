import { useState, useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function NewCard() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { handleAddPlaceSubmit } = useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();
    handleAddPlaceSubmit({ name: title, link: imageUrl });
  }

  return (
    <form id="placeForm" onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        id="placeTitleInput"
        name="placeTitleInput"
        placeholder="Title"
        minLength="2"
        maxLength="30"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <span className="error-Message"></span>
      <input
        type="url"
        id="placeImageUrl"
        name="placeImageUrl"
        placeholder="Image URL"
        required
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <span className="error-Message"></span>
      <button className="modal-save-button" type="submit" id="savePlaceBtn">
        Crie
      </button>
    </form>
  );
}
