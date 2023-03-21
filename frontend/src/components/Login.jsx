import React from "react";
import { useState} from "react";

function Login({isLoading, onAuthorization }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!password || !email) {
      return;
    }
    onAuthorization({ password, email });
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
        <h2 className="auth-content__heading">Вход</h2>

        <fieldset className="auth-content__input-container">
          <label className="auth-content__label">
            <input
              className="auth-content__input"
              placeholder="Email"
              type="email"
              name="email"
              value={email || ""}
              id="auth-content-email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label className="auth-content__label">
            <input
              className="auth-content__input"
              placeholder="Пароль"
              value={password || ""}
              type="password"
              name="password"
              id="auth-content-password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}

            />
          </label>
          <button className="auth-content__save-button" type="submit">
            {isLoading ? "Вход..." : "Войти"}
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Login;
