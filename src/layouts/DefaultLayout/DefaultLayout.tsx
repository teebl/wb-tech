import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/navigation";

const DefaultLayout: FC = () => {
  return (
    <div className="w-100 flex flex-col max-w-screen-xl m-auto">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export { DefaultLayout };
