import React from "react";
import { useParams } from "react-router-dom";
import NewRecipe from "./Recipe";
import 'bootstrap/dist/css/bootstrap.min.css'


const Recipes = ({recipes}) => {
  console.log(recipes); //array with objects...[{},{},...]=>recipes[0].fields=UgandaObject
const {country}=useParams();

return (

    <div>
      {recipes &&
        recipes
        .filter(recipe=>{
          console.log(recipe)
          console.log(country)
          return country ? country === recipe.country: recipe
        })
        .map((recipe) => {
          console.log(recipe); //only content of Object..description, ingredients,....inside fields
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
