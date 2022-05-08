import React, { FC, InputHTMLAttributes, ReactNode } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode | ReactNode[];
}

const Input: FC<Props> = ({ children, ...rest }) => {
  return <input {...rest}>{children}</input>;
};

export { Input };
