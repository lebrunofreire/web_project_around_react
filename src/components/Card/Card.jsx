export default function Card(props) {
  const { name, link, isLiked } = props.card;
  return (
    <li className="element">
      <img className="element-image" src={link} alt="" />
      <button className="element-delete-btn" type="button" />
      <p className="element-image-title">
        <span>{name}</span>
        <button className="element-image-like"></button>
      </p>
    </li>
  );
}
