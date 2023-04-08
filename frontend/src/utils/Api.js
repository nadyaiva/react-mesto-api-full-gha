class ApiClass {
  constructor({ baseurl }) {
    this._baseurl = baseurl;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfoApi() {
    const token = localStorage.getItem('jwt');
    return fetch(`${this._baseurl}/users/me`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then(this._handleResponse);
  }
  getInitialCards() {
    const token = localStorage.getItem('jwt');

    return fetch(`${this._baseurl}/cards`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then(this._handleResponse);
  }
  updateUserInfo(inputProfileObj) {
    const token = localStorage.getItem('jwt');
    return fetch(`${this._baseurl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(inputProfileObj),
    }).then(this._handleResponse);
  }
  addNewCard(cardInputData) {
    const token = localStorage.getItem('jwt');

    return fetch(`${this._baseurl}/cards`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
      },
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
    const token = localStorage.getItem('jwt');
    return fetch(`${this._baseurl}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then(this._handleResponse);
  }
  updateAvatar(avatarObj) {
    const token = localStorage.getItem('jwt');
    return fetch(`${this._baseurl}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(avatarObj),
    }).then(this._handleResponse);
  }
}

const Api = new ApiClass({
  baseurl: "http://localhost:3000",
  headers: {
    authorization: "d94e7cf1-3761-45b6-9798-0ad1da8f2858",
    "Content-Type": "application/json",
  },
});

export default Api;
