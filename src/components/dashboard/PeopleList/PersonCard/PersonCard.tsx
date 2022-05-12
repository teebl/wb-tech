import React, { FC, HTMLProps, ReactNode } from "react";
import {
  Box,
  CheckedList,
  CircleImage,
  Pill,
} from "../../../shared/composition";
import invite from "../../../../assets/invite.svg";

interface Props {
  id: string;
  name: string;
  email: string;
  imgSrc?: string;
}

const PersonCard: FC<HTMLProps<HTMLDivElement>> = ({ id, name }) => {
  return (
    <Box className="w-full">
      <div className="flex gap-6 flex-row">
        <CircleImage
          height="64"
          width="64"
          src={invite}
          alt="profile image of person"
        />
        <div>
          <h2>{name}</h2>
          <p>Position · Occupation</p>
        </div>
      </div>
      <hr className="hidden lg:block my-4" />
      <div className="hidden lg:flex flex-row gap-3">
        <Pill icon="clock">Pending: $7.00</Pill>
        <Pill icon="clipboard">Approved: $62.12</Pill>
        <Pill icon="coin">Paid: $0.00</Pill>
      </div>
      <hr className="hidden lg:block my-4" />
      <CheckedList completedTasks={["Account created", "Onboarded"]} />
    </Box>
  );
};

export { PersonCard };
