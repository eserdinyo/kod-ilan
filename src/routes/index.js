import React, {useEffect} from "react";
import { BrowserRouter, Route} from "react-router-dom";

import Header from "../components/Header";
import Home from "../pages/Home";
import IlanPage from "../pages/ilan-detay";

const AppRouter = (props) => {
  useEffect(() => {

    console.log(props);

  }, [])

  return (
    <BrowserRouter>
      <div>
        <Header title='kod ilan' />
        <Route path="/"  name='woow' component={Home} exact />
        <Route path="/ilanlar/:id" component={IlanPage} />
      </div>
    </BrowserRouter>
  )
};

export default AppRouter;
