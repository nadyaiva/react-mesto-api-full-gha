import React from "react";
import Popup from "./Popup";

function ImagePopup({card, onClose }) {
  const cardLink = card ? card.link : "";
  const name = card ? card.name : "";

  return (
    <Popup isOpen={card} name={'image'} onClose={onClose}>
        <figure className="popup-fullscreen__figure">
        <img
          className="popup-fullscreen__image"
          src={cardLink}
          alt={name}
        />
        <figcaption className="popup-fullscreen__caption">
          {name}
        </figcaption>
        </figure>
    </Popup>
  );
}
export default ImagePopup;
