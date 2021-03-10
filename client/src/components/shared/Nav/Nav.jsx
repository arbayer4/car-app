import "./Nav.css";
import { NavLink } from "react-router-dom";

const authenticatedOptions = (
  <>
    <NavLink className="link" to="/create-car">
      <p className="cars-link">Add Listing</p>
    </NavLink>
    <NavLink className="link" to="/sign-out">
      <p className="cars-link"> Sign-Out</p>
    </NavLink>
  </>
);
const unauthenticatedOptions = (
  <NavLink to="/sign-in">
    <button className="login-link">Account</button>
  </NavLink>
);
const alwaysOptions = (
  <>
    <NavLink to="/cars">
      <p className="cars-link">Cars</p>
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
