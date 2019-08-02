import React from "react";
import { withRouter } from 'react-router-dom'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../store/actions';
import { Button } from '../elements'

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

            <Button
              onClick={() => history.push('/ilan-ekle')}
              primary
            >Ücretsiz İlan Ekle</Button>



            {
              !isLoggedIn ?
                (
                  <div>
                    <Button
                      onClick={() => history.push('/login')}
                    >Giriş Yap</Button>

                    <Button
                      onClick={() => history.push('/register')}
                    >Kayıt Ol</Button>
                  </div>
                ) :
                <Button
                  onClick={handleSignOut}
                >Çıkış Yap</Button>
            }
          </div>
        </div>
      </div>
    </div>
  )
};

export default withRouter(Header);
