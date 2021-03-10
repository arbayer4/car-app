import "./Nav.css";
import { NavLink } from "react-router-dom";

const authenticatedOptions = (
  <>
    <NavLink className="link" to="/create-car">
      Add Listing
    </NavLink>
    <NavLink className="link" to="/sign-out">
      Sign-Out
    </NavLink>
  </>
);
const unauthenticatedOptions = (
  <NavLink className="link" to="/sign-in">
    Login
  </NavLink>
);
const alwaysOptions = (
  <>
    <NavLink className="link" to="/cars">
      Cars
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
