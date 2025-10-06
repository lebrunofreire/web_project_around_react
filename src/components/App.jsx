import { useEffect, useState } from "react";
import Main from "./Main/Main";
import CurrentUserContext from "../contexts/CurrentUserContext";
import api from "../utils/api";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [popup, setPopup] = useState(null);

  // Controle de popups
  const handleOpenPopup = (popupConfig) => {
    setPopup(popupConfig);
  };

  const handleClosePopup = () => {
    setPopup(null);
  };

  useEffect(() => {
    api.getUserInfo().then((data) => {
      setCurrentUser(data);
    });
  }, []);

  const handleUpdateUser = (data) => {
    (async () => {
      await api
        .setUserInfo(data)
        .then((newData) => {
          setCurrentUser(newData);
          handleClosePopup();
        })
        .catch((error) => console.error(error));
    })();
  };

  function handleUpdateAvatar(data) {
    api
      .updateAvatar(data.avatar)
      .then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      })
      .catch((err) => {
        console.error("Erro ao atualizar avatar:", err);
      });
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser }}>
      <Main
        onOpenPopup={handleOpenPopup}
        onClosePopup={handleClosePopup}
        popup={popup}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
