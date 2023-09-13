function ImagePopup() {
    return (
        
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
    )
}

export default ImagePopup;