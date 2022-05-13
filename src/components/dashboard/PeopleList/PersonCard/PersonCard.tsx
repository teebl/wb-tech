import React, { FC, HTMLProps, ReactNode } from "react";
import {
  Box,
  CheckedList,
  CircleImage,
  Pill,
} from "../../../shared/composition";
import chevronSVG from "../../../../assets/chevron.svg";

interface Props extends HTMLProps<HTMLDivElement> {
  name: string;
  email: string;
  imgSrc?: string;
}

const PersonCard: FC<Props> = ({ imgSrc, name, email }) => {
  return (
    <Box className="w-full">
      <a
        className="flex gap-6 flex-row justify-between"
        href={`mailto:${email}"`}
      >
        <div className="flex gap-6 flex-row">
          <CircleImage
            height="64"
            width="64"
            src={imgSrc}
            alt={`profile image of ${name}`}
          />
          <div>
            <h2>{name}</h2>
            <p>Position · Occupation</p>
          </div>
        </div>
        <img src={chevronSVG} />
      </a>
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
