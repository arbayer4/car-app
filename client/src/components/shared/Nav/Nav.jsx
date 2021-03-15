import "./Nav.css";
import { NavLink } from "react-router-dom";
import Burger from "../Nav/Burger";
import { useState } from "react";

const Nav = ({ user }) => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const authenticatedOptions = (
    <>
      <NavLink className="cars-link" to="/create-car">
        Add Listing
      </NavLink>
      <NavLink className="cars-link" to="/mycars">
        My Profile
      </NavLink>
      <NavLink className="signout-link" to="/sign-out">
        Sign-Out
      </NavLink>
    </>
  );
  const unauthenticatedOptions = (
    <NavLink to="/sign-in">
      <button className="login-link">My Account</button>
    </NavLink>
  );
  const alwaysOptions = (
    <>
      <NavLink className="cars-link" to="/cars">
        Browse All Collector Cars
      </NavLink>
    </>
  );

  return (
    <nav>
      <div className="nav">
        <div className="left-side">
          <NavLink className="icon" to="/">
            <img
              className="icon"
              src="https://i.imgur.com/aVuOKod.jpg"
              alt="icon"
            ></img>
          </NavLink>
          <NavLink className="logo" to="/">
            Sunday Driver
          </NavLink>
          <Burger setBurger={setBurgerOpen} />
        </div>
        <div className="right-side" id={burgerOpen ? null : "open"}>
          <div className="inside-div">
            {alwaysOptions}
            {user ? authenticatedOptions : unauthenticatedOptions}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
