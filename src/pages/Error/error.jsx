import React from "react";
import "../Error/error.scss";

function App() {
  return (
    <div>
      <h1 className="error">404</h1>
      <p className="oups">Oups! La page que vous demandez n'existe pas.</p>
      <a href="/" className="link">
        Retourner sur la page d'accueil
      </a>
    </div>
  );
}

export default App;
