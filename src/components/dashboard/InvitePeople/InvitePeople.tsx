import React, { FC } from "react";
import { Box } from "../../shared/composition";
import invite from "../../../assets/invite.svg";
import { Button } from "../../shared/action";

const InvitePeople: FC = () => {
  return (
    <Box
      className=" flex flex-col align-center text-center max-w-[20.5rem]"
      backgroundColor="peach"
    >
      <img
        height="96"
        width="96"
        src={invite}
        alt="image depicting a friendly character putting an envelope in a mailbox"
      />
      <h2>Invite people to this project</h2>
      <p className="text-slate-500 my-4">
        Share the following link with your team to have them sign up and send
        you their invoices.
      </p>
      <div className="rounded-xl px-4 py-2 my-2 bg-white">
        <a
          href="https://wrapbook.com/i/j93kda92"
          className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
        >
          https://wrapbook.com/i/j93kda92
        </a>
      </div>
      <Button>Copy to Clipboard</Button>
    </Box>
  );
};

export { InvitePeople };
