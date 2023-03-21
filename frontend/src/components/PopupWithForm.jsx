import React from "react";
import Popup from "./Popup";

function PopupWithForm({
  onSubmit,
  buttonText,
  isOpen,
  onClose,
  name,
  title,
  children,
}) {
  return (
    <Popup onClose={onClose} isOpen={isOpen} name={name}>
      <form
        className={`form form_${name}`}
        name={`${name}`}
        onSubmit={onSubmit}
      >
        <h2 className="popup__heading">{`${title}`}</h2>

        <fieldset className="popup__input-container">
          {children}
          <button
            className="popup__save-button popup__save-button_place_edit-profile"
            type="submit"
          >
            {buttonText}
          </button>
        </fieldset>
        <button
          className="popup__close popup__close-button popup__close-button_place_edit-profile"
          onClick={onClose}
          type="button"
        />
      </form>
    </Popup>
  );
}

export default PopupWithForm;
