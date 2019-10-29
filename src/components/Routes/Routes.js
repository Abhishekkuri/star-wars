import React from "react";
import { Route } from "react-router-dom";
import About from "../About/About";
import Search from "../Search/Search";
/**
 * Routes Component to map the route and the component to render on a specific route
 */
const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={Search} />
      <Route path="/about" component={About} />
    </div>
  );
};
export default Routes;
