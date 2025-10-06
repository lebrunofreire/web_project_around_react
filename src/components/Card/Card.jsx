import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Card({ card, onCardClick }) {
  const { name, link, isLiked } = card;
  const cardLikeButtonClassName = `element-image-like ${
    isLiked ? "element-image-like_active" : ""
  }`;

  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className="element">
      <img
        className="element-image"
        src={link}
        alt={name}
        onClick={() => onCardClick(card)}
      />
      <button className="element-delete-btn" type="button" />
      <p className="element-image-title">
        <span>{name}</span>
        <button
          className={cardLikeButtonClassName}
          type="button"
          onClick={handleLikeClick}
        ></button>
        {isOwn && (
          <button
            className="card__delete-button"
            type="button"
            onClick={handleDeleteClick}
          />
        )}
      </p>
    </li>
  );
}
