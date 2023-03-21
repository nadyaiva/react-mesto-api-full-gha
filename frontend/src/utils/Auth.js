const BASE_URL = "https://auth.nomoreparties.co";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const register = (inputValueObj) => {
  return fetch(BASE_URL + "/signup", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputValueObj),
  }).then(checkResponse);
};

export const login = (inputValueObj) => {
  return fetch(BASE_URL + "/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputValueObj),
  }).then(checkResponse);
};

export const checkToken = (token) => {
  return fetch(BASE_URL + "/users/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`,
    },
  }).then(checkResponse);
};
