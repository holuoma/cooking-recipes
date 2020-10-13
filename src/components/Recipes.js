import React from "react";
import { useParams } from "react-router-dom";
import NewRecipe from "./Recipe";

const Recipes = ({ recipes, match }) => {
  console.log(recipes); //array with objects...[{},{},...]=>recipes[0].fields=UgandaObject
  const {country}=useParams();

return (

    <div>
      {recipes &&
        recipes.map((recipe) => {
          console.log(recipe.fields); //only content of Object..description, ingredients,....inside fields
          return (
            <div>
              <NewRecipe recipe={recipe} />
            </div>
          );
        })}
    </div>
      );
};

export default Recipes;
