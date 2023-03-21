import React from "react";
import { Link } from "react-router-dom";

function Sign({ onLogedOutClick, email }) {
  return (
    <div className="header__list-info">
        <p className="header__email">{email}</p>

        <Link onClick={onLogedOutClick} to='/login' className='header__link header__link_notfocus'>
          Выйти
        </Link>
    </div>
  );
}

export default Sign;
