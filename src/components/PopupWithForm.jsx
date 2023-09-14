import ClosingIcon from "../images/CloseIcon.png";

function PopupWithForm(props) {
  return (
    <div
      className={`popup ${props.isOpen ? "popup_open" : ""}`}
      id={props.name}
    >
      <div className="popup__container">
        <div className="popup__close-button" id="popup-close-profile">
          <img src={ClosingIcon} alt="Closing Icon" onClick={props.onClose} />
        </div>
        <h2 className="popup__title">{props.title}</h2>
        <form id={`form-${props.name}`} className="form" noValidate>
          {props.children}
        </form>
      </div>
      <div className="popup__backdrop"></div>
    </div>
  );
}

export default PopupWithForm;
