import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/navigation";

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
