import PopupWithForm from "./PopupWithForm";
import { useRef } from "react";

function UpdateAvatarPopup({isLoading, onUpdateAvatar, onClose, isOpen}) {
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
  
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  } 

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      isOpen={isOpen}
      buttonText={isLoading ? "Сохранение..." : "Сохранить"}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__label">
        <input
          className="popup__input popup__input_type_pic-link"
          placeholder="Ссылка на аватар"
          defaultValue=""
          type="url"
          name="link"
          id="link-avatar"
          required
          ref={avatarRef}
        />
        <span className="popup__input-error link-input-error">
          Введите адрес сайта.
        </span>
      </label>
    </PopupWithForm>
  );
}

export default UpdateAvatarPopup;
