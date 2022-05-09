import React, { FC, HTMLProps, ReactNode } from "react";
import { Box, Checklist, Pill } from "../../../shared/composition";
import invite from "../../../../assets/invite.svg";

const PersonCard: FC<HTMLProps<HTMLDivElement>> = ({ ...rest }) => {
  return (
    <Box className="w-full" {...rest}>
      <div className="flex gap-6 flex-row">
        <img
          height="64"
          width="64"
          src={invite}
          alt="profile image of person"
        />
        <div>
          <h2>Person Namerson</h2>
          <p>Person Namerson</p>
        </div>
      </div>
      <hr className="hidden lg:block my-4" />
      <div className="hidden lg:flex flex-row gap-3">
        <Pill icon="clock">Pending: $7.00</Pill>
        <Pill icon="clipboard">Approved: $62.12</Pill>
        <Pill icon="coin">Paid: $0.00</Pill>
      </div>
      <hr className="hidden lg:block my-4" />
      <Checklist completedTasks={["Account created", "Onboarded"]} />
    </Box>
  );
};

export { PersonCard };
