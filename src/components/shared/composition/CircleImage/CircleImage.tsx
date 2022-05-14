import React, { FC, ImgHTMLAttributes } from "react";
import { mergeClassNames } from "../../../../helpers";

const CircleImage: FC<ImgHTMLAttributes<HTMLImageElement>> = ({
  className,
  ...rest
}) => {
  const classNames = mergeClassNames(
    className,
    "rounded-full",
    "shadow-md",
    "border-2",
    "border-white"
  );

  return <img className={classNames} {...rest} />;
};

export { CircleImage };
