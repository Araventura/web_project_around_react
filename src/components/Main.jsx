import { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import { api } from "../utils/api";
import Card from "./Card";
import PencilIcon from "../images/Pencil.png";
import AddIcon from "../images/addbutton.png";
import ClosingIcon from "../images/CloseIcon.png";
import EditIcon from "../images/editbutton.png";
import ImagePopup from "./ImagePopup";

function Main(props) {
  const [userName, setUserName] = useState("Ara Ventura");
  const [userDescription, setUserDescription] = useState("webdev");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserData()
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      });

    api
      .loadCards()
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setCards(res);
      });
  }, []);

  return (
    <main className="page preload">
      <section className="profile">
        <div className="profile__pic" onClick={props.onEditAvatarClick}>
          <img
            className="profile__pic-img"
            src={userAvatar}
            alt="Profile image of user"
          />
          <img
            className="profile__pic-button"
            src={PencilIcon}
            alt="edit button image"
          />
        </div>
        <div className="profile__info">
          <div className="profile__wrapper">
            <h2 className="profile__name">{userName}</h2>
            <button
              onClick={props.onEditProfileClick}
              className="profile__button profile__button-edit"
            >
              <img src={EditIcon} alt="edit button image" />
            </button>
          </div>
          <h3 className="profile__description">{userDescription}</h3>
        </div>
        <button
          onClick={props.onAddPlaceClick}
          className="profile__button profile__button-add"
        >
          <img src={AddIcon} alt="add button image" />
        </button>
      </section>

      <PopupWithForm
        title="Editar Perfil"
        name="popup-profile"
        isOpen={props.isEditProfilePopupOpen}
        onClose={props.closeAllPopups}
      >
        <div className="popup__input-wrapper" id="input-name-wrapper">
          <input
            className="popup__input"
            id="input-name"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="popup__input-name-error-message popup__error-message"></span>
        </div>
        <div className="popup__input-wrapper" id="input-description-wrapper">
          <input
            className="popup__input"
            id="input-description"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="popup__input-description-error-message popup__error-message"></span>
        </div>
        <button id="edit-profile-button" className="popup__button">
          Guardar
        </button>
      </PopupWithForm>

      <PopupWithForm
        title="Nuevisimo Lugar"
        name="add-card"
        isOpen={props.isAddPlacePopupOpen}
        onClose={props.closeAllPopups}
      >
        <div className="popup__input-wrapper" id="input-title-wrapper">
          <input
            className="popup__input"
            id="input-title"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="popup__input-title-error-message popup__error-message"></span>
        </div>
        <div className="popup__input-wrapper" id="input-url-wrapper">
          <input type="url" className="popup__input" id="input-url" required />
          <span className="popup__input-url-error-message popup__error-message"></span>
        </div>
        <button id="create-card-button" className="popup__button">
          Crear
        </button>
      </PopupWithForm>

      <PopupWithForm
        title="Actualizar foto de perfil"
        name="popup-edit-profile-pic"
        isOpen={props.isEditAvatarPopupOpen}
        onClose={props.closeAllPopups}
      >
        <div className="popup__input-wrapper" id="input-avatar-url-wrapper">
          <input
            type="url"
            className="popup__input"
            id="input-avatar-url"
            required
          />
          <span className="popup__input-avatar-url-error-message popup__error-message"></span>
        </div>
        <button id="edit-profile-pic-button" className="popup__button">
          Guardar perfil
        </button>
      </PopupWithForm>

      {props.selectedCard && (
        <ImagePopup
          selectedCard={props.selectedCard}
          onClose={props.closeAllPopups}
        />
      )}

      <section className="places">
        <ul className="card">
          {cards.map((card) => {
            return (
              <Card
                key={card._id}
                card={card}
                imagePopup={props.selectedCard}
                onCardClick={props.onCardClick}
                onClose={props.closeAllPopups}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
