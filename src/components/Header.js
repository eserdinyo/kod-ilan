import React from "react";
import { withRouter } from 'react-router-dom'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from "../store/actions";

const Header = (props) => {

  const number = useSelector(state => state.counter.number);

  const dispatch = useDispatch();

  const incrementCounter = (payload) => {
    dispatch(increment(payload))
  }

  const decrementCounter = (payload) => {
    dispatch(decrement(payload));
  }

  return (
    <div className="header">
      <div className="container">
        <div className="header__body">
          <Link className="header__logo" to="/">
            {"{ "}kod, ilan {"}"}
            {number}
          </Link>
          <button
            className="header__button"
            onClick={() => incrementCounter(5)}
          >Ücretsiz İlan Ekle</button>
        </div>
      </div>
    </div>
  )
};

export default withRouter(Header);
