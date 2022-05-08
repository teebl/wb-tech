import React, { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Box: FC<Props> = ({ children, ...rest }) => {
  return (
    <div className="shadow-md" {...rest}>
      {children}
    </div>
  );
};

export { Box };
