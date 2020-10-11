import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "../pages/home-page";
import ModelsPage from "../pages/models-page";

const AppRouter = (): React.ReactElement => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/:make" component={ModelsPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
