import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FoodSpecials from "./pages/FoodSpecials";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Main from "./pages/Main";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/FoodSpecials" component={FoodSpecials} />
        <Route exact path="/FoodSpecials/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
