import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ExactCategory() {
  const route_parameters = useParams();
  console.log("ROUTE", route_parameters);

  const [cocktailCats, set_cocktailCat] = useState([]);

  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data!");

      const res = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${route_parameters.drink_cat}`
      );

      console.log("GOT BACK", res);
      set_cocktailCat(res.data.drinks);
    }

    doSomeDataFetching();
  }, [route_parameters.drink_cat]);

  // if (!cocktailCat) return <div>Loading...</div>;

  console.log("LOOK", cocktailCats);

  return (
    <div>
      {cocktailCats.map((cocktailCat) => {
        return (
          <div key={cocktailCat.idDrink}>
            <h4>{cocktailCat.strDrink}</h4>
            <img src={cocktailCat.strDrinkThumb} alt="CoctailPic" />
          </div>
        );
      })}
    </div>
  );
}
