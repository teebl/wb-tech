import React, { FC } from "react";
import { Box } from "../../shared/composition";

const PeopleList: FC = () => {
  return (
    <div className="flex-grow-2 flex flex-col gap-6 w-100">
      <Box className="min-w-[20rem]">Person 1</Box>
      <Box>Person 2</Box>
      <Box>Person 3</Box>
    </div>
  );
};

export { PeopleList };
