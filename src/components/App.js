import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./../styles/App.css";
import Item1 from "../styles/Item1";
import Item2 from "../styles/Item2";
import Item3 from "../styles/Item3";
import Item from "../styles/Item";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Item} />
        <Route path="/item1" component={Item1} />
        <Route path="/item2" component={Item2} />
        <Route path="/item3" component={Item3} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
