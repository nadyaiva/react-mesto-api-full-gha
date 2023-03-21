import React from "react";
import logoMesto from "../images/logo.svg";
import Sign from "./Sign";
import { Switch, Link, Route, useHistory } from "react-router-dom";
import MediaQuery from "react-responsive";

function Header({
  email,
  onUserInfoMobileOpen,
  isUserInfoMobOpen,
  onUserInfoMobileClose,
  onLoggedOut,
}) {
  const history = useHistory();

  return (
    <>
      <MediaQuery maxWidth={900}>
        {isUserInfoMobOpen && (
          <Sign onLoggedOutClick={onLoggedOut} email={email} />
        )}
      </MediaQuery>
      <header className="header">
        <img className="header__logo" src={logoMesto} alt="Логотип Mesto" />
        <MediaQuery maxWidth={900}>
          <Switch>
            <Route exact path={"/"}>
              <button
                className={`header__button ${
                  isUserInfoMobOpen
                    ? "header__button_close"
                    : "header__button_menu"
                }`}
                onClick={
                  isUserInfoMobOpen
                    ? onUserInfoMobileClose
                    : onUserInfoMobileOpen
                }
                type="Button"
              ></button>

            </Route>
            <Route path="/sign-up">
              <Link className="header__link" to="/login">
                Войти
              </Link>
            </Route>
            <Route path="/login">
              <Link className="header__link" to="/sign-up">
                Регистрация
              </Link>
            </Route>
          </Switch>
        </MediaQuery>

        <MediaQuery minWidth={900}>
          <Switch>
            <Route exact path="/">
              <Sign email={email} onLogedOutClick={onLoggedOut} />
            </Route>
            <Route path="/sign-up">
              <Link className="header__link" to="/login">
                Войти
              </Link>
            </Route>
            <Route path="/login">
              <Link className="header__link" to="/sign-up">
                Регистрация
              </Link>
            </Route>
          </Switch>
        </MediaQuery>
      </header>
    </>
  );
}

export default Header;
