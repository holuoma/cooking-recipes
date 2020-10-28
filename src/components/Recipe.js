import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import dHintergrund from '../images/dHintergrund.png'

const NewRecipe = ({ recipe }) => {
  console.log(recipe); // whole Object ...fields:{description,...}

  const {
    name,
    ingredients,
    description,
    howtoprepare,
  } = recipe;

  return (
    <div className="mainDiv">
      <h2>{name}</h2>
      <div className="image">
      <img src={dHintergrund}/>
      </div>
      <div className="allRecipes">
        <div className="description">
          <b>Description:</b> <br />
          <br />
          {description}
        </div>
        <br />
        <div className="ingredients">
          <b>Ingredients:</b> <br />
          <br />
          {ingredients}
        </div>
        <br />
        <div className="howToPrepare">
          <b>How to prepare:</b> <br />
          <br />
          {howtoprepare}
        </div>
      </div>
    </div>
  );
};

export default NewRecipe;
