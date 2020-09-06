import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import DiscoverCocktails from "./components/DiscoverCocktails";
import Home from "./components/HomePage";
import ExactCategory from "./components/ExactCategory";

function App() {
  return (
    <div className="App">
      <h1>Wanna discover some cocktails?</h1>
      <NavBar />
      <Switch>
        <Route exact path="/" component={DiscoverCocktails} />
        <Route path="/category/:drink_cat" component={ExactCategory} />
        {/* <Categories /> */}
      </Switch>
    </div>
  );
}

export default App;
