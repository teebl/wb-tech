import React, { FC, InputHTMLAttributes } from "react";
import { Input } from "../Input";

type PasswordInputType = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

const PasswordInput: FC<PasswordInputType> = ({ children, ...rest }) => {
  return (
    <Input type="password" placeholder="Enter a password" {...rest}>
      {children}
    </Input>
  );
};

export { PasswordInput };
