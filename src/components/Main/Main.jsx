import { useContext } from "react";
import avatar from "../../../images/Avatar.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import Popup from "../Popup/Popup";
import NewCard from "../NewCard/NewCard";
import ImagePopup from "../ImagePopup/ImagePopup";
import EditAvatar from "../EditAvatar/EditAvatar";
import EditProfile from "../EditProfile/EditProfile";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Main({
  onOpenPopup,
  onClosePopup,
  popup,
  cards,
  onCardLike,
  onCardDelete,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  const newCardPopup = { title: "New card", children: <NewCard /> };
  const editAvatarPopup = { title: "Edit avatar", children: <EditAvatar /> };
  const editProfilePopup = { title: "Edit profile", children: <EditProfile /> };

  function handleCardClick(card) {
    const imagePopup = {
      title: null,
      children: <ImagePopup image={card} />,
    };
    onOpenPopup(imagePopup);
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
              onClick={() => onOpenPopup(editAvatarPopup)}
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
                onClick={() => onOpenPopup(editProfilePopup)}
              ></button>
            </div>
            <p className="author-subtitle" id="profileTitle">
              {currentUser.about}
            </p>
          </div>
          <button
            id="openPlaceModalBtn"
            className="author-add"
            onClick={() => onOpenPopup(newCardPopup)}
          ></button>
        </div>

        <ul className="elements">
          {cards.map((card) => {
            const safeLikes = Array.isArray(card.likes) ? card.likes : [];
            const isLiked = currentUser?._id
              ? safeLikes.some((user) => user._id === currentUser._id)
              : false;

            return (
              <Card
                key={card._id}
                card={{ ...card, likes: safeLikes, isLiked }}
                onCardClick={handleCardClick}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
              />
            );
          })}
        </ul>

        <Footer />

        {popup && (
          <Popup onClose={onClosePopup} title={popup.title}>
            {popup.children}
          </Popup>
        )}
      </main>
    </>
  );
}
