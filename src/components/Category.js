import React from "react";

export default function Category(props) {
  return (
    <div>
      <div className="Category">
        <h2>{props.name}</h2>
        {/* <p>{props.year}</p>
        <img alt="movie_image" src={props.img} /> */}
      </div>
    </div>
  );
}
