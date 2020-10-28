
import React from 'react';
import {useState, useEffect, Fragment} from 'react';
import {client} from './client'
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import MyPostRecipes from './components/MyRecipes'
import Recipes from "./components/Recipes";

import NewRecipe from "./components/Recipe";
import Nigeria from "./components/Nigeria";
import Anatolia from "./components/Anatolia";
import Uganda from "./components/Uganda";

import './App.css';
import { NavLink, Link, Switch, Route } from "react-router-dom";
import HomePage from './components/HomePage';
 import SearchBar from './components/SearchBar';
 import FoundPosts from './components/SearchBar';
import MyApp from './components/MyApp';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


//----------elephant pass #august31Code#

const App = () => {

  
  const [recipes, setRecipes] = useState([]);
  const [userInput, setUserInput]=useState("");

       useEffect(()=>{
   
        const connectToMyContent = async () => { 

           client.getEntries().then((response, error) => {

         if (!error) 
            setRecipes(response.items);
            console.log(response.items)
              //  console.log(recipes.items[0].fields);
         });
       }
        connectToMyContent();

      }, [ ]);


    return (
       <>
          <div className="recipes">
      
            <Header  recipes={recipes}/>

            <div className="inputDiv">
               <Link className="Link" to="/"> Home</Link>            
               <Link className="Link" to="/Uganda">Welcome to: Uganda</Link>  
               <Link className="Link" to="/Nigeria">Welcome to: Nigeria</Link>
               <Link className="Link" to="/Anatolia"> Welcome to: Anatolia</Link>
            </div>
             <Switch>
                {/* <Route path="/:country?">
                     <Recipes recipes={recipes}/>
                   </Route> */}

                <Route path="/:country?"
                     render={(props) => <HomePage recipes={recipes} {...props} />}
                /> 

                <Route path="/recipes"
                   render={(props) => <MyPostRecipes recipes={recipes} {...props} />}
                />
             </Switch>
          </div>
          <div><Footer/></div>
       </> 
    );
 }
  
export default App;
