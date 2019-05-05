import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "../components/Header";
import Home from "../components/Home";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Route path="/" component={Home} />
    </div>
  </BrowserRouter>
);

export default AppRouter;
