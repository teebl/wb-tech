import React, { FC, useEffect, useState } from "react";
import { PersonCard } from "./PersonCard";
import invite from "../../../assets/invite.svg";

const PeopleList: FC = () => {
  const [people, setPeople] = useState([]);
  const makeCall = async () => {
    await fetch("/people")
      .then((response) => response.json())
      .then((data) => {
        setPeople(data.collection);
      });
  };

  useEffect(() => {
    makeCall();
  }, []);

  if (!people.length) return <div>Loading...</div>;

  return (
    <div className="min-w-[20rem] w-full flex-grow-2 flex flex-col gap-6 w-100">
      {people.map(({ id, name }) => (
        <PersonCard key={id} name={name} imgSrc={invite} />
      ))}
    </div>
  );
};

export { PeopleList };
