import React from "react";
import info_success from "../images/info_success.svg";
import info_fail from "../images/info_fail.svg";

function InfoTooltip({ isOpen, onClose, isSuccessTip }) {
  const classNamePopup = `popup popup_place_infotip-reg ${
    isOpen ? "popup_opened" : ""
  }`;

  return (
    <div className={classNamePopup}>
      <div className="infotip-reg">
        <img
          className="infotip-reg__icon infotip-reg__icon_success"
          src={isSuccessTip ? info_success : info_fail}
          alt="Успешно"
        />
        <p className="infotip-reg__text">
          {isSuccessTip
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </p>
        <button
          className="popup__close popup__close-button popup__close-button_place_infotip-reg"
          type="button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default InfoTooltip;
