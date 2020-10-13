import React from "react";
import { useState } from "react";
import Uganda from './Uganda'
import {Link,Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {

  return (
    <div className="header">
      <div className='logo'>
        <h1 className="h1">
          <span className="daily">
            <em>Daily</em>
          </span>
          <span className="cious">
            <em>cious</em>
          </span>
        </h1>
      </div>
     
    </div>
  );
};
export default Header;
