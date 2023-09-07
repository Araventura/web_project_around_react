function Main() {
    return (
        <main class="page preload">
          <section class="profile">
            <div class="profile__pic">
              <img class="profile__pic-img" src="#" alt="Profile image of user" />
              <img
                class="profile__pic-button"
                src="<%=require('./images/Pencil.png')%>"
                alt="edit button image"
              />
            </div>
            <div class="profile__info">
              <div class="profile__wrapper">
                <h2 class="profile__name"></h2>
                <button class="profile__button profile__button-edit">
                  <img
                    src="<%=require('./images/editbutton.png')%>"
                    alt="edit button image"
                  />
                </button>
              </div>
              <h3 class="profile__description"></h3>
            </div>
            <button class="profile__button profile__button-add">
              <img
                src="<%=require('./images/addbutton.png')%>"
                alt="add button image"
              />
            </button>
          </section>
    
          <div class="popup" id="popup-profile">
            <div class="popup__container">
              <div class="popup__close-button" id="popup-close-profile">
                <img
                  src="<%=require('./images/CloseIcon.png')%>"
                  alt="Closing Icon"
                />
              </div>
              <form id="form-edit-profile" class="form" novalidate>
                <h2 class="popup__title">Editar perfil</h2>
                <div class="popup__input-wrapper" id="input-name-wrapper">
                  <input
                    class="popup__input"
                    id="input-name"
                    minlength="2"
                    maxlength="40"
                    required
                  />
                  <span class="popup__input-name-error-message popup__error-message"></span>
                </div>
    
                <div class="popup__input-wrapper" id="input-description-wrapper">
                  <input
                    class="popup__input"
                    id="input-description"
                    minlength="2"
                    maxlength="200"
                    required
                  />
                  <span class="popup__input-description-error-message popup__error-message"></span>
                </div>
                <button id="edit-profile-button" class="popup__button">
                  Guardar
                </button>
              </form>
            </div>
            <div class="popup__backdrop"></div>
          </div>
    
          <div class="popup" id="popup-card">
            <div class="popup__container">
              <div class="popup__close-button" id="popup-close-add-card">
                <img
                  src="<%=require('./images/CloseIcon.png')%>"
                  alt="Closing Icon"
                />
              </div>
              <form id="form-card" class="form" novalidate>
                <div class="popup__input-wrapper" id="input-title-wrapper">
                  <h2 class="popup__title">Nuevo Lugar</h2>
                  <input
                    class="popup__input"
                    id="input-title"
                    minlength="2"
                    maxlength="40"
                    required
                  />
                  <span class="popup__input-title-error-message popup__error-message"></span>
                </div>
                <div class="popup__input-wrapper" id="input-url-wrapper">
                  <input type="url" class="popup__input" id="input-url" required />
                  <span class="popup__input-url-error-message popup__error-message"></span>
                </div>
                <button id="create-card-button" class="popup__button">
                  Crear
                </button>
              </form>
            </div>
            <div class="popup__backdrop"></div>
          </div>
    
          <div class="popup" id="popup-delete-image">
            <div class="popup__container">
              <div class="popup__close-button" id="popup-close-delete-image">
                <img
                  src="<%=require('./images/CloseIcon.png')%>"
                  alt="Closing Icon"
                />
              </div>
              <form id="form-delete-image" class="form" novalidate>
                <h2 class="popup__title">Estas seguro?</h2>
                <button id="delete-image-button" class="popup__button">
                  Si
                </button>
              </form>
            </div>
            <div class="popup__backdrop"></div>
          </div>
    
          <div class="popup" id="popup-edit-profile-pic">
            <div class="popup__container">
              <div class="popup__close-button" id="popup-close-edit-profile-image">
                <img
                  src="<%=require('./images/CloseIcon.png')%>"
                  alt="Closing Icon"
                />
              </div>
              <form id="form-update-profile-image" class="form" novalidate>
                <h2 class="popup__title">Cambiar foto de perfil</h2>
                <div class="popup__input-wrapper" id="input-avatar-url-wrapper">
                  <input
                    type="url"
                    class="popup__input"
                    id="input-avatar-url"
                    required
                  />
                  <span class="popup__input-avatar-url-error-message popup__error-message"></span>
                </div>
                <button id="edit-profile-pic-button" class="popup__button">
                  Guardar perfil
                </button>
              </form>
            </div>
            <div class="popup__backdrop"></div>
          </div>
    
          <div class="cover">
            <div class="cover__wrapper">
              <div class="cover__close-button" id="cover-close-button">
                <img
                  src="<%=require('./images/CloseIcon.png')%>"
                  alt="Closing Icon"
                />
              </div>
              <img class="cover__image" src="#" alt="Cover Backdrop" />
              <h3 class="cover__subtitle"></h3>
            </div>
            <div class="cover__backdrop"></div>
          </div>
    
          <section class="places">
            <ul class="card"></ul>
          </section>
    
          <template id="card_template">
            <li class="card__item">
              <button class="card__trash">
                <img src="<%=require('./images/trash.png')%>" alt="Trash Button" />
              </button>
              <img class="card__image" src="#" alt="" />
              <div class="card__wrapper">
                <span class="card__title"></span>
                <button class="card__like"></button>
              </div>
              <div class="card__counter">
                <span class="card__counter_likes"></span>
              </div>
            </li>
          </template>
        </main>
      );
}

export default Main;