import React, { FC, HTMLProps } from "react";
import { mergeClassNames } from "../../../../helpers";

interface Props extends HTMLProps<HTMLDivElement> {
  backgroundColor?: "white" | "peach";
}

const Box: FC<Props> = ({
  backgroundColor = "white",
  className,
  children,
  ...rest
}) => {
  const classNames = mergeClassNames(
    className,
    "shadow-md",
    "p-8",
    "rounded-xl",
    backgrounds[backgroundColor]
  );

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

const backgrounds = {
  white: "bg-white",
  peach: "bg-orange-50",
};

export { Box };
