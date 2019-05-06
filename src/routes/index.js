import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "../components/Header";
import Home from "../components/Home";
import IlanPage from "../components/ilan-page";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Route path="/" component={Home} exact={true} />
      <Route path="/ilanlar/:id" component={IlanPage} />
    </div>
  </BrowserRouter>
);

export default AppRouter;
