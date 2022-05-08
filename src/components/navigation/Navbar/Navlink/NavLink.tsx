import React, { FC } from "react";
import { NavLink as RouterLink, NavLinkProps } from "react-router-dom";

const NavLink: FC<NavLinkProps> = ({ children, ...rest }) => {
  const className = [
    "rounded-xl",
    "px-4",
    "py-2",
    "hover:bg-white",
    "hover:shadow-md",
  ];
  const activeClassName = [...className, "shadow-md", "bg-white"];

  const getClassName = ({ isActive }: { isActive: boolean }): string =>
    (isActive ? activeClassName : className).join(" ");

  return (
    <RouterLink className={getClassName} {...rest}>
      {children}
    </RouterLink>
  );
};

export { NavLink };
