import { useContext, useEffect } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);

  // Proteção contra dados incompletos
  if (!card || !card.owner || !currentUser) return null;

  const { name, link, isLiked = false } = card;

  const isOwn = card.owner._id === currentUser._id;

  const cardLikeButtonClassName = `element-image-like ${
    isLiked ? "element-image-like_active" : ""
  }`;

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
      {isOwn && (
        <button
          className="element-delete-btn"
          type="button"
          onClick={handleDeleteClick}
        />
      )}
      <p className="element-image-title">
        <span>{name}</span>
        <button
          className={cardLikeButtonClassName}
          onClick={handleLikeClick}
          aria-label="Curtir"
        />
      </p>
    </li>
  );
}
