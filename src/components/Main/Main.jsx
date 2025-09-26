import avatar from "../../../images/Avatar.png";
import { useState } from "react";

export default function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "New card", children: <NewCard /> };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="page">
      <div className="author">
        <div className="author-avatar-container">
          <img className="author-image" src={avatar} alt="Autor" />
          <button className="author-avatar-edit-button" type="button"></button>
        </div>
        <div className="author-info">
          <div className="author-name-wrapper">
            <h1 id="profileName" className="author-name">
              Jacques Cousteau
            </h1>
            <button id="openModalBtn" className="author-edit"></button>
          </div>
          <p className="author-subtitle" id="profileTitle">
            Explorador
          </p>
        </div>
        <button id="openPlaceModalBtn" className="author-add"></button>
      </div>
      <section className="elements">
        <template id="card-template">
          <div className="element">
            <img className="element-image" src="" alt="" />
            <button className="element-delete-btn"></button>
            <p className="element-image-title">
              <span></span>
              <button className="element-image-like"></button>
            </p>
          </div>
        </template>
      </section>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
