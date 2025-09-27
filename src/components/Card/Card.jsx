export default function Card(props) {
  const { name, link, isLiked, onCardClick } = props.card;
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
        <button className="element-image-like"></button>
      </p>
    </li>
  );
}
