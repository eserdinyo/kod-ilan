import React, { useEffect } from "react";
import  {withRouter} from 'react-router-dom'
import { Link } from "react-router-dom";

const Header = ({match}) => {


  useEffect(() => {
    console.log('....');
  }, [match])

  return (
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
  )
};

export default withRouter(Header);
