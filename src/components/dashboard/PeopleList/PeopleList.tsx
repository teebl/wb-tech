import React, { FC, useEffect, useState } from "react";
import { PersonCard } from "./PersonCard";
import user from "../../../assets/user.svg";

const PeopleList: FC = () => {
  const [people, setPeople] = useState([]);
  const makeCall = async () => {
    await fetch(
      "http://cors.io/?https://castandcrew.herokuapp.com/people?format=json"
    )
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
      {people.map(({ id, name, email }) => (
        <PersonCard key={id} name={name} email={email} imgSrc={user} />
      ))}
    </div>
  );
};

export { PeopleList };
