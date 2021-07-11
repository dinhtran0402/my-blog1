import React from "react";
import { Route, Switch } from "react-router-dom";
import Details from "../Articles-Detail/index";
import Articles from "../Articles/index";
import Homes from "../Home/index";
import Profile from "../Profile/detailsProfile";

const routeURL = () => {
  return (
    <div style={{ marginTop: "67px" }}>
      <Switch>
        <Route exact path="" component={Homes}></Route>
        <Route path="/Articles" component={Articles}></Route>
        <Route
          path="/Articles-detail/:id/:slug.html"
          component={Details}
        ></Route>
        <Route path="/Profile" component={Profile}></Route>
        <Route component={Homes}></Route>
      </Switch>
    </div>
  );
};

export default routeURL;
