import trashIcon from "../images/trash.png";

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="card__item">
      <button className="card__trash">
        <img src={trashIcon} alt="Trash Button" />
      </button>
      <img
        onClick={handleClick}
        className="card__image"
        src={card.link}
        alt={card.name}
      />
      <div className="card__wrapper">
        <span className="card__title">{card.name}</span>
        <button className="card__like"></button>
      </div>
      <div className="card__counter">
        <span className="card__counter_likes">{card.likes.length}</span>
      </div>
    </li>
  );
}

export default Card;
