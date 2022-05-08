import React, { FC } from "react";
import { NavLink } from "./Navlink";

const Navbar: FC = () => {
  return (
    <nav>
      <NavLink to="/">Wrapbook</NavLink>
      <ul>
        <li>
          <NavLink to="/">Link</NavLink>
          <NavLink to="/">Link</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="signup">Signup</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
