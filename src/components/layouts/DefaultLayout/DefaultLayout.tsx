import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../navigation";

const DefaultLayout: FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export { DefaultLayout };
