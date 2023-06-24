import logo from "../../assets/LogoKasa.png"
import "../Header/header.scss"


function Header() {
  return (
    <header>
      <div>
      <img className="LogoHeader" src={logo} alt="" />
      </div>
      <nav>
        <ul>
          <li><a href="/" className="font">Accueil</a></li>
          <li><a href="/about" className="font">A propos</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;