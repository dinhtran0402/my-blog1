import React from "react";
import { Route, Switch } from "react-router-dom";
import Details from "../Articles-Detail/index";
import Articles from "../Articles/index";
import Homes from "../Home/index";
import Profile from "../Profile/detailsProfile";
import Contact from "../Contact/index";

const routeURL = () => {
  return (
    <div style={{ marginTop: "67px" }}>
      <Switch>
        <Route exact path="/my-blog1" component={Homes}></Route>
        <Route exact path="/Articles" component={Articles}></Route>
        <Route exact path="/Contact" component={Contact}></Route>
        <Route
          exact
          path="/Articles-detail/:id/:slug.html"
          component={Details}
        ></Route>
        <Route exact path="/Profile" component={Profile}></Route>
        <Route component={Homes}></Route>
      </Switch>
    </div>
  );
};

export default routeURL;
