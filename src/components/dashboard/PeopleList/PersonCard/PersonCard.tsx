import React, { FC, HTMLProps } from "react";
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
  country: string;
  city: string;
  imgSrc?: string;
}

const PersonCard: FC<Props> = ({ imgSrc, name, email, country, city }) => {
  const randomAmounts = [...Array(3)].map(
    () => Math.floor(Math.random() * (1000 - 100) + 100) / 100
  );

  return (
    <Box className="w-full">
      <a
        className="flex gap-6 flex-row justify-between"
        href={`mailto:${email}`}
      >
        <div className="flex gap-6 flex-row min-w-0">
          <CircleImage
            height="64"
            width="64"
            src={imgSrc}
            alt={`profile image of ${name}`}
          />
          <div className="min-w-0 overflow-hidden">
            <h2 className="truncate" title={name}>
              {name}
            </h2>
            <p className="truncate" title={`${country} · ${city}`}>
              {country} · {city}
            </p>
          </div>
        </div>
        <div className="my-auto">
          <img src={chevronSVG} />
        </div>
      </a>
      <hr className="hidden md:block my-4" />
      <div className="hidden md:flex flex-row gap-3">
        <Pill icon="clock">Pending: ${randomAmounts[0]}</Pill>
        <Pill icon="clipboard">Approved: ${randomAmounts[1]}</Pill>
        <Pill icon="coin">Paid: ${randomAmounts[2]}</Pill>
      </div>
      <hr className="hidden md:block my-4" />
      <CheckedList completedTasks={["Account created", "Onboarded"]} />
    </Box>
  );
};

export { PersonCard };
