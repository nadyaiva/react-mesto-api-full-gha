class ApiClass {
  constructor(config) {
    this._authorization = config.authorization;
    this._cohort = config.cohort;
    this._baseurl = config.baseurl;
    this._headers = config.headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfoApi() {
    return fetch(`${this._baseurl}${this._cohort}/users/me`, {
      headers: this._headers,
    }).then(this._handleResponse);
  }
  getInitialCards() {
    return fetch(`${this._baseurl}${this._cohort}/cards`, {
      headers: this._headers,
    }).then(this._handleResponse);
  }
  updateUserInfo(inputProfileObj) {
    return fetch(`${this._baseurl}${this._cohort}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(inputProfileObj),
    }).then(this._handleResponse);
  }
  addNewCard(cardInputData) {
    return fetch(`${this._baseurl}${this._cohort}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(cardInputData),
    }).then(this._handleResponse);
  }

  changeCardLikeStatus(cardId, isLiked) {
    return fetch(`${this._baseurl}${this._cohort}/cards/${cardId}/likes`, {
      method: isLiked ? "PUT" : "DELETE",
      headers: this._headers,
    }).then(this._handleResponse);
  }

  deletePost(cardId) {
    return fetch(`${this._baseurl}${this._cohort}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleResponse);
  }
  updateAvatar(avatarObj) {
    return fetch(`${this._baseurl}${this._cohort}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(avatarObj),
    }).then(this._handleResponse);
  }
}

const Api = new ApiClass({
  cohort: "cohort-42",
  baseurl: "https://nomoreparties.co/v1/",
  headers: {
    authorization: "d94e7cf1-3761-45b6-9798-0ad1da8f2858",
    "Content-Type": "application/json",
  },
});

export default Api;
