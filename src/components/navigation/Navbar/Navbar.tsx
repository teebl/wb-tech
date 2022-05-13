import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "./Navlink";

const Navbar: FC = () => {
  const location = useLocation();
  const isSignedIn = () => !location.pathname.includes("/signup");

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
        {isSignedIn() && (
          <li>
            <NavLink to="/settings">Settings</NavLink>
          </li>
        )}
        {isSignedIn() && (
          <li>
            <NavLink to="/signup/">Logout</NavLink>
          </li>
        )}
        {!isSignedIn() && (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
        {!isSignedIn() && (
          <li>
            <NavLink to="signup">Signup</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export { Navbar };
