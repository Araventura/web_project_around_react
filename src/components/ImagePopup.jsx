import ClosingIcon from "../images/CloseIcon.png";

function ImagePopup(props) {
  return (
    <div className="cover">
      <div className="cover__wrapper">
        <div className="cover__close-button" id="cover-close-button">
          <img onClick={props.onClose} src={ClosingIcon} alt="Closing Icon" />
        </div>
        <img
          className="cover__image"
          src={props.selectedCard.link}
          alt="Cover Backdrop"
        />
        <h3 className="cover__subtitle"></h3>
      </div>
      <div className="cover__backdrop"></div>
    </div>
  );
}

export default ImagePopup;
