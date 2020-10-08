import React from 'react';
import {useState, useEffect, Fragment} from 'react';
import {client} from './client'
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Posts from './components/Post'
import './App.css';

const App=()=> {
  const [recipes, setRecipes]=useState([])


  useEffect(()=>{
    client.getEntries()
    .then((response) => {
    console.log(response)
    })
    
  })
  /* client.getEntries()
    .then(function (entries) {
      entries.items.forEach(function (entry) {
        if(entry.fields.productName) {
          console.log(entry.fields.productName)
        }
      })
    }) */

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
