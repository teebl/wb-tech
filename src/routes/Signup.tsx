import React, { FC } from "react";
import { SignupCard } from "../components/signup";

const Signup: FC = () => (
  <div className="h-full flex flex-col justify-center items-center">
    <SignupCard />
  </div>
);

export default Signup;
