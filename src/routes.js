import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Alunos from "./pages/Alunos";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/alunos" exact component={Alunos} />
      </Switch>
    </BrowserRouter>
  );
}
