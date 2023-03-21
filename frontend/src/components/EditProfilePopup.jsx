import PopupWithForm from "./PopupWithForm";
import React from "react";
import { useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({isLoading, isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = React.useContext(CurrentUserContext);

  function hanldeNameChange(e) {
    setName(e.target.value);
  }

  function hanldeDescriptionChange(e) {
    setDescription(e.target.value);
  }
  React.useEffect(() => {
    setName(currentUser.name || "");
    setDescription(currentUser.about || "");
  }, [currentUser, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-profile"
      isOpen={isOpen}
      buttonText={isLoading? 'Сохранение...' : 'Сохранить'}
 
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__label">
        <input
          className="popup__input popup__input_type_name"
          placeholder="Имя"
          type="text"
          name="fullname"
          id="name-input"
          minLength="2"
          maxLength="40"
          required
          value={name}
          onChange={hanldeNameChange}
        />
        <span className="popup__input-error name-input-error"></span>
      </label>
      <label className="popup__label">
        <input
          className="popup__input popup__input_type_job"
          placeholder="Вид деятельности"
          type="text"
          name="jobtitle"
          id="job-input"
          minLength="2"
          maxLength="200"
          required
          value={description}
          onChange={hanldeDescriptionChange}
        />
        <span className="popup__input-error job-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
