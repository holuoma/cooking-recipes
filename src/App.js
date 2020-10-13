import React from "react";
import { useState, useEffect, Fragment } from "react";
import { client } from "./components/client";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Recipes from "./components/Recipes";
import Uganda from "./components/Uganda";
import { Link, Route, Router, Switch } from "react-router-dom";
import NewRecipe from "./components/Recipe";
import Nigeria from "./components/Nigeria";
import Anatolia from "./components/Anatolia";
import "./App.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    client.getEntries().then((response) => {
      setRecipes(response.items);
      console.log(response.items[0].fields); //only Object {description, ingredients,... }...inside fields
    });
  }, []);

  return (
    <div className="root">
      <div className="recipes">
      
        <Header />

        <div className="inputDiv">
          {/*<nav className="navbar navbar-nav navbar-expand-lg navbar-light bg-light" id="bg-light">
      </nav>*/}
          <input type="search" placeholder="Search" />
          <Link className="Link" to="/Recipes">
            Home
          </Link>
          <Link className="Link" to="/Recipes/Uganda">
            Welcome to: Uganda
          </Link>
          <Link className="Link" to="/Recipes/Nigeria">
            Welcome to: Nigeria
          </Link>
          <Link className="Link" to="/Recipes/Anatolia">
            Welcome to: Anatolia
          </Link>
        </div>
        <Switch>
         {/*<Route path="/Recipes/:country?">
            <Recipes recipes={recipes} />
          </Route>*/}
         <Route path="/Recipes/Uganda" component={Uganda} />
          <Route path="/Recipes/Nigeria" component={Nigeria} />
          <Route path="/Recipes/Anatolia" component={Anatolia} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
