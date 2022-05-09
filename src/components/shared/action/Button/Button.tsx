import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { mergeClassNames } from "../../../../helpers";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode | ReactNode[];
}

const Button: FC<Props> = ({ className, children, ...rest }) => {
  const classNames = mergeClassNames(
    className,
    "rounded-xl",
    "py-3",
    "px-4",
    "my-2",
    "bg-blue-700",
    "text-white",
    "w-full",
    "font-semibold",
    "disabled:bg-slate-400"
  );

  return (
    <button className={classNames} type="button" {...rest}>
      {children}
    </button>
  );
};

export { Button };
