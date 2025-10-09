import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);
  const [liked, setLiked] = useState(card.isLiked || false);
  const isLiked =
    Array.isArray(card.likes) && currentUser?._id
      ? card.likes.some((user) => user._id === currentUser._id)
      : false;
  useEffect(() => {
    setLiked(card.isLiked || false); // Atualiza se o card mudar
  }, [card]);

  if (!card || !card.owner || !currentUser) return null;

  const isOwn = card.owner._id === currentUser._id;

  const cardLikeButtonClassName = `element-image-like ${
    liked ? "element-image-like_active" : ""
  }`;

  function handleLikeClick() {
    setLiked(!liked); // Atualiza localmente
    onCardLike(card); // Chama função externa para persistir
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className="element">
      <img
        className="element-image"
        src={card.link}
        alt={card.name}
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
        <span>{card.name}</span>
        <button
          className={cardLikeButtonClassName}
          onClick={handleLikeClick}
          aria-label="Curtir"
        />
      </p>
    </li>
  );
}
