import React, { FC, useEffect, useState } from "react";
import { PersonCard } from "./PersonCard";
import user from "../../../assets/user.svg";

const PeopleList: FC = () => {
  const [people, setPeople] = useState<any[]>([]);
  const makeCall = async () => {
    await fetch("https://randomuser.me/api/?results=20")
      .then((response) => response.json())
      .then((data) => {
        setPeople(data.results);
      });
  };

  useEffect(() => {
    makeCall();
  }, []);

  if (!people.length) return <div>Loading...</div>;

  return (
    <div className="min-w-[20rem] w-full flex-grow-2 flex flex-col gap-6 w-100">
      {people.map(({ id, name, email, picture, location }) => (
        <PersonCard
          key={id.value}
          name={`${name?.first} ${name?.last}`}
          email={email}
          country={location?.country}
          city={location?.city}
          imgSrc={picture?.medium}
        />
      ))}
    </div>
  );
};

export { PeopleList };
