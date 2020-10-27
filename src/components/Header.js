import React from "react";
import { useState } from "react";
import Uganda from "./Uganda";
import { Link, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";


const Header = ({recipes})=>{



    return (
       <>
          <Navbar   recipes ={recipes} />



      </>)
}


export default Header;

