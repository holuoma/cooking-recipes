import React from 'react';
import {useState, useEffect, Fragment} from 'react';
import {client} from './client'
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Posts from './components/Post'
import './App.css';

const App=()=> {

  const [recipes, setRecipes]=useState();  //[]


  useEffect(()=>{


    client.getEntries()

    .then((response, error) => {

        if (!error) 
        //set state
          setRecipes(response.items);

            console.log(response.items)
        //  console.log(recipes.items[0].fields);
       
      }
    
    );
    
  }, [ ]);





  return (
    <div className='root'>
        <Header />
         <div className='posts'>
            <Posts recipes={recipes}/>
          </div>
      </div>
  )
}
  


  export default App;
