import React, { FC, HTMLProps, ReactNode } from "react";
import { Box, Pill } from "../../../shared/composition";
import invite from "../../../../assets/invite.svg";
import checkmark from "../../../../assets/checkmark.svg";

const PersonCard: FC<HTMLProps<HTMLDivElement>> = ({ ...rest }) => {
  return (
    <Box className="w-full" {...rest}>
      <div className="flex gap-6 flex-row">
        <img
          height="64"
          width="64"
          src={invite}
          alt="Illustration depicting a friendly character putting an envelope in a mailbox"
        />
        <div>
          <h2>Person Namerson</h2>
          <p>Person Namerson</p>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-row gap-3">
        <Pill icon="clock">Pending: $7.00</Pill>
        <Pill icon="clipboard">Approved: $62.12</Pill>
        <Pill icon="coin">Paid: $0.00</Pill>
      </div>
      <hr className="my-4" />
      <div className="flex flex-row gap-1">
        <img src={checkmark} />
        <span>Account Created</span>
      </div>
    </Box>
  );
};

export { PersonCard };
