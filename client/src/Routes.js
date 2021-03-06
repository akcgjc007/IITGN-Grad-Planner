import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import history from "./history";
import CreateNewPlan from "./pages/CreateNewPlan";
import Guidelines from './components/Guidelines';
import Home from './pages/Home'
import NotFound from './pages/404';
import SharedPlan from "./pages/SharedPlan";
import ShareLink from "./pages/ShareLink";
import Developers from './pages/Developers';

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/dashboard">
          <Dashboard/>{" "}
        </Route>
        <Route path="/create-new-plan" component={CreateNewPlan}/>
        <Route path="/guidelines" component={Guidelines}/>
        <Route path="/sharedPlan/:name" component={SharedPlan}/>
        <Route path="/gen-share-link" component={ShareLink}/>
        <Route path="/devs" component={Developers}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default Routes;
