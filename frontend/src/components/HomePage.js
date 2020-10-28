import React from 'react'
import { NavLink, Link, Switch, Route } from "react-router-dom";
import HomeSlide from './SlideHome';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import Substring from 'react-substring';
import RecentPosts from './RecentPosts';
import Footer from './Footer';

// SinglePostRecipe.js


   const HomePage = ({recipes, match } ) => {

  

      //--------moved to recent posts

                

      return (
       <>
            <HomeSlide/>
            <RecentPosts recipes={recipes}/>


          <div className='p2'> 

             {/* <div className="row"> <h1>Latest posts</h1></div> */}

           <div className="card-group" id="home-post-card"> 

           {/* {recipes
            .filter(time =>
                 match.params.id
                ? student.id === parseInt(match.params.id, 10)   //--?!!!
                : student
                )  } */}

             { recipes && recipes.map(recipe  =>  {


                      return (

             

                            <div className="card">
                              <img className="card-img-top" src={recipe.fields.featuredImage.fields.file.url} alt="Card image cap"/>
                               <div className="card-body">
                                <div class="dropdown-divider"></div>
                                <h5 className="card-title">Name: {recipe.fields.name}</h5>
                                    <div class="dropdown-divider"></div>                                  
                                    <h6 className="card-text">Description: </h6>
                                    {recipe.fields.description.substring(0, 50) + "..."} 
                                    <div class="dropdown-divider"></div>
                                  <h6 className="card-text">How to prepare:</h6>
                                   {recipe.fields.howToPrepare.substring(0, 70)}
                                   <div class="dropdown-divider"></div>
                                                                 
                                     {/* <a href="/recipes/name ">...read more</a> */}

                                     <Link to={`/recipe/name`}>....read more</Link>

                                     
                                 </div>
                                 <div className="card-footer">
                                 <h6>Last updated: </h6>{recipe.sys.updatedAt}

                                     <small className="text-muted"><h6>Reviews</h6></small>
                                 </div>
                             </div>
                       
                     )
                   }
                  )
              }
         
          </div>


        </div>
   

        <Switch>
              <Route path="/recent-posts"
                 render={(props) => <RecentPosts recipes={recipes}/>} 
              /> 
              
        </Switch>
         <div className='p2 footer' id="footer-div"> 
 
          <Footer recipes={recipes} />
         </div>
       </>  
    )
}


export default HomePage;