import React, { FC, HTMLProps, ReactNode } from "react";
import { Box } from "../../../shared/composition";
import invite from "../../../../assets/invite.svg";

const PersonCard: FC<HTMLProps<HTMLDivElement>> = ({ ...rest }) => {
  return (
    <Box className="w-full" {...rest}>
      <div className="flex gap-6 flex-row">
        <img
          height="64"
          width="64"
          src={invite}
          alt="illustration depicting a friendly character putting an envelope in a mailbox"
        />
        <div>
          <h2>Person Namerson</h2>
          <p>Person Namerson</p>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-row gap-3">
        <div className="inline rounded-md border-2 p-1.5 border-slate-100">
          Pending: $7.00
        </div>
        <div className="inline rounded-md border-2 p-1.5 border-slate-100">
          Pending
        </div>
      </div>
      <hr className="my-4" />
      <div>Account created</div>
    </Box>
  );
};

export { PersonCard };
