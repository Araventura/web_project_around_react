import PopupWithForm from "./PopupWithForm";

function Main(props) {
    return (
        <main className="page preload">
          <section className="profile">
            <div className="profile__pic">
              <img className="profile__pic-img" src="#" alt="Profile image of user" />
              <img onClick={props.onEditAvatarClick}
                className="profile__pic-button"
                src="<%=require('./images/Pencil.png')%>"
                alt="edit button image"
              />
            </div>
            <div className="profile__info">
              <div className="profile__wrapper">
                <h2 className="profile__name"></h2>
                        <button onClick={props.onEditProfileClick} className="profile__button profile__button-edit">
                  <img
                    src="<%=require('./images/editbutton.png')%>"
                    alt="edit button image"
                  />
                </button>
              </div>
              <h3 className="profile__description"></h3>
            </div>
            <button onClick={props.onAddPlaceClick} className="profile__button profile__button-add">
              <img
                src="<%=require('./images/addbutton.png')%>"
                alt="add button image"
              />
            </button>
          </section>
    
            <PopupWithForm title="Editar Perfil" name="popup-profile" isOpen={props.isEditProfilePopupOpen} onClose={props.closeAllPopups}>
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
    
            <PopupWithForm title="Nuevisimo Lugar" name="add-card" isOpen={props.isAddPlacePopupOpen} onClose={props.closeAllPopups}>
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

            <PopupWithForm title="Actualizar foto de perfil" name="popup-edit-profile-pic" isOpen={props.isEditAvatarPopupOpen} onClose={props.closeAllPopups}>
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

          <div className="cover">
            <div className="cover__wrapper">
              <div className="cover__close-button" id="cover-close-button">
                <img
                  src="<%=require('./images/CloseIcon.png')%>"
                  alt="Closing Icon"
                />
              </div>
              <img className="cover__image" src="#" alt="Cover Backdrop" />
              <h3 className="cover__subtitle"></h3>
            </div>
            <div className="cover__backdrop"></div>
          </div>
    
          <section className="places">
            <ul className="card"></ul>
          </section>
    
          <template id="card_template">
            <li className="card__item">
              <button className="card__trash">
                <img src="<%=require('./images/trash.png')%>" alt="Trash Button" />
              </button>
              <img className="card__image" src="#" alt="" />
              <div className="card__wrapper">
                <span className="card__title"></span>
                <button className="card__like"></button>
              </div>
              <div className="card__counter">
                <span className="card__counter_likes"></span>
              </div>
            </li>
          </template>
        </main>
      );
}

export default Main;