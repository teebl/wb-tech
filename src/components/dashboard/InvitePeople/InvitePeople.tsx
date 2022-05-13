import React, { FC, useState } from "react";
import { Box, CircleImage } from "../../shared/composition";
import invite from "../../../assets/invite.svg";
import { Button } from "../../shared/action";
import { copyText } from "../../../helpers";

const InvitePeople: FC = () => {
  const [justCopied, setJustCopied] = useState(false);

  const link = "https://wrapbook.com/i/j93kda92";

  const renderMobileInvitePeople = () => (
    <div className="md:hidden fixed shadow-[14px_14px_14px_14px_rgba(0,0,0,0.15)]	bottom-0 right-0 left-0 bg-white p-4 w-full text-center">
      <a
        href={link}
        className="underline text-base font-bold text-blue-600 hover:text-blue-800 visited:text-purple-600"
      >
        Invite someone to Wrapbook
      </a>
    </div>
  );

  const copyAction = () => {
    copyText(link);
    setJustCopied(true);
    setTimeout(() => {
      setJustCopied(false);
    }, 3000);
  };

  return (
    <div>
      <Box
        className="hidden sticky top-4 lg:flex flex-col items-center text-center max-w-[20.5rem] h-min"
        backgroundColor="peach"
      >
        <CircleImage
          height="96"
          width="96"
          src={invite}
          className="bg-white"
          alt="image depicting a friendly character putting an envelope in a mailbox"
        />
        <h2>Invite people to this project</h2>
        <p className="text-slate-500 my-4">
          Share the following link with your team to have them sign up and send
          you their invoices.
        </p>
        <div className="rounded-xl px-4 py-2 my-2 bg-white">
          <a
            href={link}
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            {link}
          </a>
        </div>
        <Button aria-hidden="true" onClick={copyAction}>
          {justCopied ? "Copied!" : "Copy to Clipboard"}
        </Button>
      </Box>
      {renderMobileInvitePeople()}
    </div>
  );
};

export { InvitePeople };
