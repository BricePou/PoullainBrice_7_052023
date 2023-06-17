import logo from "../../assets/LogoKasa.png"
import "../Header/header.scss"


function Header() {
  return (
    <header>
      <div>
      <img src={logo} alt="" />
      </div>
      <nav>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/about">A propos</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;