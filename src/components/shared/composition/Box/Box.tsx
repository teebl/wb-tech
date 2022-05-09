import React, { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Box: FC<Props> = ({ children, ...rest }) => {
  return (
    <div className="shadow-md p-8 bg-white rounded-xl " {...rest}>
      {children}
    </div>
  );
};

export { Box };
