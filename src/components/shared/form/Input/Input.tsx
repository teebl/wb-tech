import React, { FC, InputHTMLAttributes, ReactNode } from "react";
import { mergeClassNames } from "../../../../helpers";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode | ReactNode[];
}

const Input: FC<Props> = ({ children, className, ...rest }) => {
  const classNames = mergeClassNames(
    className,
    "py-3",
    "px-4",
    "block",
    "my-4",
    "border-1",
    "rounded-xl",
    "bg-slate-100",
    "w-full"
  );
  return (
    <input className={classNames} {...rest}>
      {children}
    </input>
  );
};

export { Input };
