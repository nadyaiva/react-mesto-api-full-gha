import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main>
      <section className="container profile">
        <div className="profile__container-avatar">
          <img
            onClick={props.onEditAvatarClick}
            className="profile__avatar"
            alt="Фото профиля"
            src={currentUser.avatar}
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <p className="profile__title">{currentUser.about}</p>
          <button
            onClick={props.onEditProfileClick}
            type="button"
            className="profile__button profile__button_type_edit"
          ></button>
        </div>
        <button
          onClick={props.onAddPlaceClick}
          type="button"
          className="profile__button profile__button_type_add"
        ></button>
      </section>
      <section className="container">
        <ul className="elements">
          {props.cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
export default Main;
