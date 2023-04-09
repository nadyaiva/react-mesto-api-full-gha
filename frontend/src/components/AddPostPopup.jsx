import PopupWithForm from "./PopupWithForm";
import React from "react";
import { useState } from "react";

function AddPostPopup({ isLoading, onAddPlace, isOpen, onClose }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: name,
      link: link,
    });
  }
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  React.useEffect(() => {
    setName('');
    setLink('');
  }, []);

  return (
    <PopupWithForm
      title="Новое место"
      name="add-photo"
      isOpen={isOpen}
      buttonText={isLoading? 'Создание...' : 'Создать'}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__label">
        <input
          className="popup__input popup__input_type_title"
          value={name}
          placeholder="Название"
          type="text"
          name="name"
          id="title-input"
          minLength="2"
          maxLength="30"
          required
          onChange={handleNameChange}
        />
        <span className="popup__input-error title-input-error"></span>
      </label>
      <label className="popup__label">
        <input
          className="popup__input popup__input_type_pic-link"
          placeholder="Ссылка на картинку"
          value={link}
          type="url"
          name="link"
          id="link-input"
          required
          onChange={handleLinkChange}
        />
        <span className="popup__input-error link-input-error">
          Введите адрес сайта.
        </span>
      </label>
    </PopupWithForm>
  );
}

export default AddPostPopup;
