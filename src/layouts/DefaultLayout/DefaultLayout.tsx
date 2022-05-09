import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/navigation";

const DefaultLayout: FC = () => {
  return (
    <div className="w-100 flex flex-col max-w-screen-xl m-auto min-h-full h-full px-6">
      <Navbar />
      <main className="flex-grow-2 h-full">
        <Outlet />
      </main>
    </div>
  );
};

export { DefaultLayout };
