import React from "react";
import { useState, useEffect, Fragment,useRef } from "react";
import { client } from "./components/client";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Recipes from "./components/Recipes";
import Uganda from "./components/Uganda";
import { Link, NavLink, Route, Router, Switch } from "react-router-dom";
import NewRecipe from "./components/Recipe";
import Nigeria from "./components/Nigeria";
import Anatolia from "./components/Anatolia";
import Footer from "./Footer";
import Searchbar from "./Searchbar";
import Button from "./Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [search, setSearch] = useState(null);
  const button1=useRef(null)

  useEffect(()=>{
    fetch('http://localhost:8080')
    .then(res=>res.json())
    .then(data=>setRecipes(data))
    },[])
   


const key=(e)=>{
if (e.key === 'Enter') {
  return handleClick()
}
};

 const handleChange=(e)=> {
    setUserInput(e.target.value);
    if (!e.target.value) {
      button1.current.style.backgroundColor = 'yellow';
    } else { button1.current.style.backgroundColor = 'lawngreen'; }

  }

  const handleClick = () => {
    setSearch(userInput);

  };

  const handleReset = () => {
    setUserInput("");
    
  };

  return (
    <div className="root">
      <div className="recipes">
        <Header />
        <div className="inputDiv">
          {/*<nav className="navbar navbar-nav navbar-expand-lg navbar-light bg-light" id="bg-light">
      </nav>*/}
          <div>
            <input type="text" onChange={handleChange} onKeyDown={key} value={userInput}  />
            <Link to="/Found">
              <button ref={button1} onClick={handleClick}>Search</button>
            </Link>
            <Link to="/">
              <button onClick={handleReset}>Reset</button>
            </Link>
          </div>

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
          <NavLink
            activeStyle={{
              fontWeight: "bold",
              color: "lawngreen",
              visibility: "visible",
            }}
            style={{ visibility: "hidden" }}
            className="Link"
            to="/Found"
          >
            Found
          </NavLink>
        </div>
        <Switch>
          <Route path="/:country?">
            <Recipes recipes={recipes} />
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
      <div>
        {recipes &&
          recipes
            .filter((recipe) => {
              return search ? recipe.name.toLowerCase().includes(search) : recipe
              
            })
            .map((recipe) => {
              return (
                <div>
                  <Switch>
                    <Route path="/Found">
                      <NewRecipe recipe={recipe} />
                    </Route>
                  </Switch>
                </div>
              );
            })}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
