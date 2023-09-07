import Logo from "../images/Headerimg.png";

function Header() {
    return ( 
        <header class="header">
        <img
          class="header__image"
          alt="Logo of around the U.S."
          id="header-image"
          src={Logo}
        />
      </header>
    )
}

export default Header;