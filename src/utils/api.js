class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _makeRequest(endpoint, method = "GET", body = null) {
    const options = {
      method,
      headers: this._headers,
    };
    if (body) {
      options.body = JSON.stringify(body);
    }
    return fetch(`${this._baseUrl}${endpoint}`, options).then(
      this._handleResponse
    );
  }

  _handleResponse(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Erro: ${response.status}`);
  }

  // Métodos da API
  getUserInfo() {
    return this._makeRequest("/users/me");
  }

  setUserInfo(data) {
    return this._makeRequest("/users/me", "PATCH", {
      name: data.name,
      about: data.about,
    });
  }

  updateAvatar(link) {
    return this._makeRequest("/users/me/avatar", "PATCH", { avatar: link });
  }

  getInitialCards() {
    return this._makeRequest("/cards");
  }

  addCard(data) {
    return this._makeRequest("/cards", "POST", {
      name: data.name,
      link: data.link,
    });
  }

  deleteCard(cardId) {
    return this._makeRequest(`/cards/${cardId}`, "DELETE");
  }

  likeCard(cardId) {
    return this._makeRequest(`/cards/${cardId}/likes`, "PUT");
  }

  unlikeCard(cardId) {
    return this._makeRequest(`/cards/${cardId}/likes`, "DELETE");
  }
}

// Criação da instância fora da classe
const api = new Api({
  baseUrl: "https://around-api.pt-br.tripleten-services.com/v1/",
  headers: {
    authorization: "d70a59bc-4540-4ec4-ba46-5ea541eb92fd",
    "Content-Type": "application/json",
  },
});

export default api;
