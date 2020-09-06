import React, { useState, useEffect } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import Category from "./Category";

export default function DiscoverCocktails() {
  const [categories, set_categories] = useState([]);
  // const params = useParams();
  // console.log("PARAMS", params);

  useEffect(() => {
    async function DataFetching() {
      // console.log("I'm gonna fetch some data!");

      const res = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
      );

      // console.log("LOOK WHAT I HAVE:", res);
      set_categories(res.data.drinks);
    }

    DataFetching();
  }, []);

  return (
    <div>
      {categories.map((category) => {
        const searchParam = encodeURIComponent(category.strCategory);

        return (
          <Link key={category.strCategory} to={`/category/${searchParam}`}>
            <Category name={category.strCategory} />
          </Link>
        );
      })}
    </div>
  );
}
