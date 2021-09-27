import React from "react";
import Homepage from "../screens/Homepage";
import Search from "../screens/Search";
import Professor from "../screens/Professor"
import Submit from "../screens/Submit"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Homepage} exact />
      <Route path="/search/:id" component={Search} />
      <Route path="/professor/:id" component={Professor} />
      <Route path="/submit" component={Submit} />
    </Router>
  );
};

export default App;

//<Route path="/" component={Homepage} exact></Route>
//      <Route path="/search/:id" component={Search} />
