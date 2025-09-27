import { useState } from "react";
import avatar from "../../../images/Avatar.png";
import Card from "../Card/Card";
import Popup from "../Popup/Popup";
import NewCard from "../NewCard/NewCard";
import ImagePopup from "../ImagePopup/ImagePopup";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

console.log(cards);

export default function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "New card", children: <NewCard /> };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }

  function handleCardClick(card) {
    const imagePopup = {
      title: null,
      children: <ImagePopup image={card} />,
    };
    setPopup(imagePopup);
  }

  return (
    <main className="page">
      <div className="author">
        <div className="author-avatar-container">
          <img className="author-image" src={avatar} alt="Autor" />
          <button
            className="author-avatar-edit-button"
            type="button"
            onClick={() => handleOpenPopup(newCardPopup)}
          ></button>
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
      <ul className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={handleCardClick} />
        ))}
      </ul>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
