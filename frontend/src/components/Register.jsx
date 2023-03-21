import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Register({isLoading, onRegistration}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onRegistration({email, password})
  }
  React.useEffect(() => {
    setEmail("");
    setPassword("");
}, []);

  return (
    <div className="auth-content">
      <form
        className={`auth-content__form`}
        name={`login`}
        onSubmit={handleSubmit}
      >
        <h2 className="auth-content__heading"> Регистрация</h2>

        <fieldset className="auth-content__input-container">
          <label className="auth-content__label">
            <input
              className="auth-content__input"
              placeholder="Email"
              type="email"
              name="email"
              id="auth-content-email"
              required
              value={email || ""}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label className="auth-content__label">
            <input
              className="auth-content__input"
              placeholder="Пароль"
              type="password"
              name="password"
              id="auth-content-password"
              required
              value={password || ""}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <button className="auth-content__save-button" type="submit">
            {isLoading ? "Регистрация" : "Зарегистрироваться"}
          </button>
          <Link className="auth-content__signup-link" to={'/login'}>
            Уже зарегистрированы? Войти
          </Link>
        </fieldset>
      </form>
    </div>
  );
}

export default Register;
