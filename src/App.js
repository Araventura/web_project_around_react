import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <>
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        isEditProfilePopupOpen={isEditProfilePopupOpen}
        onAddPlaceClick={handleAddPlaceClick}
        isAddPlacePopupOpen={isAddPlacePopupOpen}
        onEditAvatarClick={handleEditAvatarClick}
        isEditAvatarPopupOpen={isEditAvatarPopupOpen}
        closeAllPopups={closeAllPopups}
        onCardClick={handleCardClick}
        selectedCard={selectedCard}
      />
      <Footer />
    </>
  );
}

export default App;
