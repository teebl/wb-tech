import React, { FC, HTMLProps, ReactNode } from "react";
import { mergeClassNames } from "../../../../helpers";

const Box: FC<HTMLProps<HTMLDivElement>> = ({
  className,
  children,
  ...rest
}) => {
  const classNames = mergeClassNames(
    className,
    "shadow-md",
    "p-8",
    "bg-white",
    "rounded-xl"
  );

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

export { Box };
