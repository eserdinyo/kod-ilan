import React from "react";
import { withRouter } from 'react-router-dom'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../store/actions';

const Header = ({ history }) => {

  const dispath = useDispatch();
  const isLoggedIn = useSelector(store => store.authReducer.isLoggedIn);

  const handleSignOut = () => {
    setTimeout(() => {
      dispath(actions.signOut())
     
    }, 1000)
  }

  return (
    <div className="header">
      <div className="container">
        <div className="header__body">
          <Link className="header__logo" to="/">
            {"{ "}kod, ilan {"}"}
          </Link>
          <div style={{ display: 'flex' }}>

            <button
              className="header__button"
              onClick={() => history.push('/ilan-ekle')}
            >Ücretsiz İlan Ekle</button>


            {
              !isLoggedIn ?
                (
                  <div>
                    <button
                      onClick={() => history.push('/login')}
                      className="header__button"
                      style={{ backgroundColor: '#191919' }}
                    >Giriş Yap</button>
                    <button
                      onClick={() => history.push('/register')}
                      className="header__button"
                      style={{ backgroundColor: '#191919' }}
                    >Kayıt Ol</button>
                  </div>
                ) :
                <button
                  onClick={handleSignOut}
                  className="header__button"
                  style={{ backgroundColor: '#191919' }}
                >Çıkış Yap</button>

            }


          </div>
        </div>
      </div>
    </div>
  )
};

export default withRouter(Header);
