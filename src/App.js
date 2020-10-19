import React from "react";
import { useState, useEffect, Fragment } from "react";
import { client } from "./components/client";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Recipes from "./components/Recipes";
import Uganda from "./components/Uganda";
import { Link, Route, Router, Switch } from "react-router-dom";
import NewRecipe from "./components/Recipe";
import Nigeria from "./components/Nigeria";
import Anatolia from "./components/Anatolia";
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import "./App.css";

const App = () => {

  
  const [recipes, setRecipes] = useState([]);
  const [userInput, setUserInput]=useState("");
 

  useEffect(() => {
    client.getEntries().then((response) => {
      setRecipes(response.items);
      console.log(response.items[0].fields); //only Object {description, ingredients,... }...inside fields
    });
  }, [userInput]);

  const handleChange=(event)=>{
setUserInput(event.target.value)
console.log(event.target.value)


  }

  return (
    <div className="root">
      <div className="recipes">
      
        <Header/>

        <div className="inputDiv">
          {/*<nav className="navbar navbar-nav navbar-expand-lg navbar-light bg-light" id="bg-light">
      </nav>*/}
          <input type="search" placeholder="Search" value={userInput} onChange={(event)=>handleChange(event)}/>
          <Link className="Link" to="/">
            Home
          </Link>
          <Link className="Link" to="/Uganda">
            Welcome to: Uganda
          </Link>
          <Link className="Link" to="/Nigeria">
            Welcome to: Nigeria
          </Link>
          <Link className="Link" to="/Anatolia">
            Welcome to: Anatolia
          </Link>
        </div>
        <Switch>
         <Route path="/:country?">
            <Recipes recipes={recipes}/>
          </Route>
        {/*  <Route path='/Recipes/Home'>
          <Recipes recipes={recipes} />
          </Route>
         <Route path="/Recipes/Uganda">
           <Uganda/>
         </Route>
          <Route path="/Recipes/Nigeria">
            <Nigeria />
          </Route>
          <Route path="/Recipes/Anatolia">
            <Anatolia/>
          </Route>*/}
        </Switch>
      </div>
<div><Footer/></div>
    </div>
  );
};


export default App;
