import React, { FC } from "react";
import { Box } from "../../shared/composition";
import { PersonCard } from "./PersonCard";

const PeopleList: FC = () => {
  return (
    <div className="min-w-[20rem] w-full flex-grow-2 flex flex-col gap-6 w-100">
      <PersonCard />
      <PersonCard />
      <PersonCard />
    </div>
  );
};

export { PeopleList };
