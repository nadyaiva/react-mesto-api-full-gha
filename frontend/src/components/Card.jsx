import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
// import Api from "../utils/Api";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  function handlecardClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card)
  }

  function handleCardDeleteClick() {
    onCardDelete(card)
  }

  const currentUser = React.useContext(CurrentUserContext);
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = `elements__button_trash ${
    isOwn ? "elements__button_trash" : "elements__button_trash_hidden"
  }`;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `${isLiked ? "elements__button_like_active" : "elements__button_like"}`;

  return (
    <li className="elements__element">
      <button className={cardDeleteButtonClassName} onClick={handleCardDeleteClick} type="button"></button>
      <img
        className="elements__image"
        src={card.link}
        alt={card.name}
        onClick={handlecardClick}
      />
      <div className="elements__info">
        <p className="elements__caption">{card.name}</p>
        <div className="elements__like-info">
          <button className={cardLikeButtonClassName} onClick={handleLikeClick} type="button"></button>
          <div className="elements__info_like-count">{card.likes.length}</div>
        </div>
      </div>
    </li>
  );
}

export default Card;
