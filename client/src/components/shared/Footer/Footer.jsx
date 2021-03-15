import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer(props) {
  return (
    <footer>
      <NavLink className="footer-logo" to="/">
        Sunday Driver
      </NavLink>
      <div className="created-by">
        Created By: <a href="https://github.com/arbayer4">Andy Bayer</a> |
        <a href="https://github.com/allisonbierschenk">Allison Bierschenk</a> |
        <a href="https://github.com/ghudachek">Gracen Hudacheck</a> |
        <a href="https://github.com/daniel-ober">Dan Ober</a>
      </div>
      {/* <NavLink to="/sign-in">
        <p className="footer-login-link">Account</p>
      </NavLink> */}
    </footer>
  );
}

export default Footer;
