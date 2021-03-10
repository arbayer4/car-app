import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer(props) {
  return (
    <div className="footer">
      <NavLink className="footer-logo" to="/">
        Sunday Driver
      </NavLink>
      <div className="created-by">
        Created By: Andy Bayer | Allison Bierschenk | Gracen Hudacheck | Dan
        Ober
      </div>
      {/* <NavLink to="/sign-in">
        <p className="footer-login-link">Account</p>
      </NavLink> */}
    </div>
  );
}

export default Footer;
