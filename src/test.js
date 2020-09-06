import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import DiscoverMovies from "./pages/DiscoverMoviesPage";
import MoviePage from "./pages/MoviePage";

const categories =[
  {id: 0, title:"Ordinary Drink"},
  {id: 1, title: "Cocktail"},
  {id: 2, title: "Milk \/ Float \/ Shake"},
  {id: 3, title: "Other\/Unknown"},
  {id: 4, title: "Cocoa"},
  {id: 5, title: "Shot"},
  {id: 6, title: "Coffee \/ Tea"},
  {id: 7, title: "Homemade Liqueur"},
  {id: 8, title: "Punch \/ Party Drink"},
  {id: 9, title: "Beer"},
  {id: 10, title: "Soft Drink \/ Soda"}
]

const Category = ({match}) => {
  const category = categories.find((category) => {
    return parseInt(match.params.catID) === category.id
  })
  return ( 
    <div>
    {match.isExact &&
    <h1>{category.title}</h1>
      {category.map(categoryID => {
        return (
          <div ket={categoryID}>
            <Link to={`${match.url}`}>
              {categories.find(cat => cat.id).title}
            </Link>
            </div>
          );
        })}
        }
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={`:catID`} component={Category} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;