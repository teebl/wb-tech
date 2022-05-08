import React, { FC } from "react";
import { NavLink } from "./Navlink";

const Navbar: FC = () => {
  return (
    <nav className="flex flex-row	justify-between py-4 max-w-screen-xl">
      <NavLink to="/" className="text-lg font-bold">
        Wrapbook
      </NavLink>
      <ul className="flex gap-x-1">
        <li>
          <NavLink to="/404">Link</NavLink>
        </li>
        <li>
          <NavLink to="/404">Link</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="signup">Signup</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
