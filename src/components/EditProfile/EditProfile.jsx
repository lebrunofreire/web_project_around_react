import { useState, useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function EditProfile() {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name || "");
  const [description, setDescription] = useState(currentUser.about || "");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateUser({ name, about: description });
  }
  
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
