import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => (

  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

    <Link className="navbar-brand" to="/">
      Meal Deals
    </Link>

    <button
      className="navbar-toggler"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/FoodSpecials">Food Specials</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/DrinkSpecials">Drink Specials</Link>
        </li>
      </ul>
    </div>

    <div className="dropdown">
      <button className="dropbtn">For Restaurants
            <i className="fa fa-caret-down"></i>
      </button>
      <div className="dropdown-content">
        <Link className="nav-link" to="/FoodSpecials/:id">Food Specials by location</Link>
        <Link className="nav-link" to="/DrinkSpecials">Drink Specials</Link>
        <Link className="nav-link" to="/FoodSpecials">Food Specials</Link>
        <Link className="nav-link" to="/FoodSpecials">For Restaurants 3</Link>
      </div>
    </div>

  </nav>
);

export default Nav;
