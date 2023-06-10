// import { Link } from 'react-router-dom'
import React from 'react';
import "../Header/header.scss"

function Header() {
  return (
    <header>
      <h1>Mon En-tête</h1>
      <nav>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/about">À propos</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;