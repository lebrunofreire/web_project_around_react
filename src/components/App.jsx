import { useEffect, useState } from "react";
import Main from "./Main/Main";
import CurrentUserContext from "../contexts/CurrentUserContext";
import api from "../utils/api";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => setCurrentUser(data))
      .catch((err) => console.error("Erro ao buscar usuário:", err));
  }, []);

  useEffect(() => {
    api.getInitialCards().then((data) => {
      console.log("Cards recebidos:", data);
      setCards(data);
    });
  }, []);

  const handleOpenPopup = (popupConfig) => {
    setPopup(popupConfig);
  };

  const handleClosePopup = () => {
    setPopup(null);
  };

  const handleUpdateUser = async (data) => {
    try {
      const newData = await api.setUserInfo(data);
      setCurrentUser(newData);
      handleClosePopup();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateAvatar = async (data) => {
    try {
      const newData = await api.updateAvatar(data.avatar);
      setCurrentUser(newData);
      handleClosePopup();
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddPlaceSubmit = async (data) => {
    try {
      const newCard = await api.addCard(data);
      setCards([newCard, ...cards]);
      handleClosePopup();
    } catch (error) {
      console.error(error);
    }
  };

  async function handleCardLike(card) {
    const safeLikes = Array.isArray(card.likes) ? card.likes : [];

    const isLiked = currentUser?._id
      ? safeLikes.some((user) => user._id === currentUser._id)
      : false;

    try {
      const updatedCard = await api.changeLikeCardStatus(card._id, !isLiked);

      // Garante que updatedCard.likes seja um array
      if (!Array.isArray(updatedCard.likes)) {
        updatedCard.likes = isLiked
          ? safeLikes.filter((user) => user._id !== currentUser._id)
          : [...safeLikes, { _id: currentUser._id }];
      }

      setCards((state) =>
        state.map((c) => (c._id === card._id ? updatedCard : c))
      );
    } catch (error) {
      console.error("Erro ao atualizar like:", error);
    }
  }

  const handleCardDelete = async (card) => {
    try {
      await api.deleteCard(card._id);
      setCards((state) => state.filter((c) => c._id !== card._id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        handleUpdateUser,
        handleUpdateAvatar,
        handleAddPlaceSubmit,
      }}
    >
      <Main
        onOpenPopup={handleOpenPopup}
        onClosePopup={handleClosePopup}
        popup={popup}
        cards={cards}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
