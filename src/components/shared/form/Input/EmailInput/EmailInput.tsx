import React, { FC, InputHTMLAttributes } from "react";
import { Input } from "../Input";

type EmailInputType = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

const EmailInput: FC<EmailInputType> = ({ children, ...rest }) => {
  return (
    <Input type="email" placeholder="Enter your email address" {...rest}>
      {children}
    </Input>
  );
};

export { EmailInput };
