import logo from "../images/Headerimg.png";

function Header() {
  return (
    <header className="header">
      <img
        className="header__image"
        alt="Logo of around the U.S."
        id="header-image"
        src={logo}
      />
    </header>
  );
}

export default Header;
