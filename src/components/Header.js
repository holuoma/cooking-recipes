<<<<<<< HEAD
import React from "react";
import { useState } from "react";
import Uganda from "./Uganda";
import { Link, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {


  return (
    <div className="header">
      <Link style={{textDecoration:'none'}} className="LinkDaily" to="/">
        <div className="logo">
          <h1 className="h1">
            <span className="daily">
              <em>Daily</em>
            </span>
            <span className="cious">
              <em>cious</em>
            </span>
          </h1>
        </div>
      </Link>
    </div>
  );
};
export default Header;
=======

>>>>>>> bf0cd581a978ae78dc4cc122ed037e1c67de48ed
