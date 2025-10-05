import { useState, useContext, useEffect } from "react";
import avatar from "../../../images/Avatar.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import Popup from "../Popup/Popup";
import NewCard from "../NewCard/NewCard";
import ImagePopup from "../ImagePopup/ImagePopup";
import EditAvatar from "../EditAvatar/EditAvatar";
import EditProfile from "../EditProfile/EditProfile";
import api from "../../utils/api";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Main() {
  const { currentUser } = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.error("Erro ao buscar cartões:", err);
      });
  }, []);

  const newCardPopup = { title: "New card", children: <NewCard /> };
  const editAvatarPopup = { title: "Edit avatar", children: <EditAvatar /> };
  const editProfilePopup = { title: "Edit profile", children: <EditProfile /> };

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

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => {
        console.error("Erro ao excluir o cartão:", err);
      });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((user) => user._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((err) => {
        console.error("Erro ao curtir/descurtir o cartão:", err);
      });
  }

  return (
    <>
      <main className="page">
        <Header />
        <div className="author">
          <div className="author-avatar-container">
            <img
              className="author-image"
              src={currentUser.avatar || avatar}
              alt="Autor"
            />
            <button
              className="author-avatar-edit-button"
              type="button"
              onClick={() => handleOpenPopup(editAvatarPopup)}
            ></button>
          </div>
          <div className="author-info">
            <div className="author-name-wrapper">
              <h1 id="profileName" className="author-name">
                {currentUser.name}
              </h1>
              <button
                id="openModalBtn"
                className="author-edit"
                onClick={() => handleOpenPopup(editProfilePopup)}
              ></button>
            </div>
            <p className="author-subtitle" id="profileTitle">
              {currentUser.about}
            </p>
          </div>
          <button
            id="openPlaceModalBtn"
            className="author-add"
            onClick={() => handleOpenPopup(newCardPopup)}
          ></button>
        </div>
        <ul className="elements">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
        <Footer />
        {popup && (
          <Popup onClose={handleClosePopup} title={popup.title}>
            {popup.children}
          </Popup>
        )}
      </main>
    </>
  );
}
