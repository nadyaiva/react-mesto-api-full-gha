const BASE_URL = "https://api.plaats.nomoredomains.monster";
//const BASE_URL = "http://localhost:3000";

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
      "Accept": "application/json",
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(inputValueObj),
  }).then(checkResponse);
};

export const login = (inputValueObj) => {
  return fetch(BASE_URL + "/signin", {
    method: "POST",
    headers: {
      "Accept":  "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputValueObj),
  }).then(checkResponse)
  .then((data) => {
    localStorage.setItem('jwt', data.token)
    return data;
  });
};

export const checkToken = () => {
  const token = localStorage.getItem('jwt');
  return fetch(BASE_URL + "/users/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`,
    },
  }).then(checkResponse);
};
