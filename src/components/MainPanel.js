import React from "react";
import { Switch, Route } from "react-router-dom";
import ContactComponent from "./ContactComponent";
import LoginPage from "./LoginPage";

function MainPanel(props) {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={ContactComponent} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default MainPanel;
