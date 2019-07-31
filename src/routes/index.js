import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import IlanPage from "../pages/ilan-detay";
import Home from "../pages/Home";
import _404 from '../pages/404';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AddPost from '../pages/AddPost';

import Header from "../components/Header";

const AppRouter = () => {
  const isLoggedIn = useSelector(store => store.authReducer.isLoggedIn);


  return (
    <BrowserRouter>
      <Header title='kod ilan' />

      <Switch>
        <Route path="/" component={Home} exact />


        {/* if is guest redirect to homepage */}
        <Route exact path="/login" render={() => (
          isLoggedIn ? (
            <Redirect to="/" />
          ) : (
              <Login />
            )
        )} />

        {/* if is guest redirect to homepage */}
        <Route exact path="/register" render={() => (
          isLoggedIn ? (
            <Redirect to="/" />
          ) : (
              <Register />
            )
        )} />


        <PrivateRoute path='/ilan-ekle' component={AddPost} />
        <Route path="/ilanlar/:slug" component={IlanPage} />
        <Route component={_404} />
      </Switch>
    </BrowserRouter>
  );
}

// Protected Routes
function PrivateRoute({ component: Component, ...rest }) {
  const isLoggedIn = useSelector(store => store.authReducer.isLoggedIn);

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
      }
    />
  );
}

export default AppRouter;
