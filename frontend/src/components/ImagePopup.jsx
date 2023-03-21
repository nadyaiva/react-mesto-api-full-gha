import React from "react";
import Popup from "./Popup";

function ImagePopup({card, onClose }) {
  const cardLink = card ? card.link : "";
  const cardName = card ? card.name : "";

  return (
    <Popup isOpen={card} name={'image'} onClose={onClose}>
        <figure className="popup-fullscreen__figure">
        <img
          className="popup-fullscreen__image"
          src={cardLink}
          alt={cardName}
        />
        <figcaption className="popup-fullscreen__caption">
          {cardName}
        </figcaption>
        </figure>
    </Popup>
  );
}
export default ImagePopup;
