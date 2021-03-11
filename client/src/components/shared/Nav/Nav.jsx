import "./Nav.css";
import { NavLink } from "react-router-dom";

const authenticatedOptions = (
  <>
    <NavLink className="cars-link" to="/create-car">
      Add Listing
    </NavLink>
    <NavLink className="cars-link" to="/sign-out">
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
const Nav = ({ user }) => {
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">
          Sunday Driver
        </NavLink>
        <div className="links">
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
