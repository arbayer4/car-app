import "./Nav.css";
import { NavLink } from "react-router-dom";
import Burger from "../Nav/Burger";

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
    <Burger />
  </>
);
const Nav = ({ user }) => {
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
        </div>
        <div className="right-side">
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
