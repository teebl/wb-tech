import React, { FC } from "react";
import { Outlet } from "react-router-dom";

const DefaultLayout: FC = () => {
  return (
    <>
      nav goes here
      <main>
        <Outlet />
      </main>
    </>
  );
};

export { DefaultLayout };
