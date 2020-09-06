import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
