import React, { FC } from "react";
import { NavLink as RouterLink, NavLinkProps } from "react-router-dom";

const NavLink: FC<NavLinkProps> = ({ children, ...rest }) => {
  return <RouterLink {...rest}>{children}</RouterLink>;
};

export { NavLink };
