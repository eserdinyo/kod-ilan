import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <div className="container">
      <div className="header__body">
        <Link className="header__logo" to="/">
          {"{ "}kod, ilan {"}"}
        </Link>
        <button className="header__button">Ücretsiz İlan Ekle</button>
      </div>
    </div>
  </div>
);

export default Header;
