import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DrinkSpecials from "./pages/DrinkSpecials";
import FoodSpecials from "./pages/FoodSpecials";
import DrinkDetail from "./pages/DrinkDetail";
import FoodDetail from "./pages/FoodDetail";
import NoMatch from "./pages/NoMatch";
import Main from "./pages/Main";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/DrinkSpecials" component={DrinkSpecials} />
        <Route exact path="/DrinkSpecials/:id" component={DrinkDetail} />
        <Route exact path="/FoodSpecials" component={FoodSpecials} />
        <Route exact path="/FoodSpecials/:id" component={FoodDetail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
