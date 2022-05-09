import React, { FC, HTMLProps, ReactNode } from "react";
import { mergeClassNames } from "../../../../helpers";
import clockSVG from "../../../../assets/clock.svg";
import coinSVG from "../../../../assets/coin.svg";
import clipboardSVG from "../../../../assets/clipboard.svg";

const ICONS = {
  clock: clockSVG,
  coin: coinSVG,
  clipboard: clipboardSVG,
};

interface Props extends HTMLProps<HTMLDivElement> {
  icon: keyof typeof ICONS;
}

const Pill: FC<Props> = ({ icon, className, children, ...rest }) => {
  return (
    <div className="inline-flex flex-row gap-2 rounded-md border-2 p-1.5 border-slate-100">
      <img height="16" width="16" src={ICONS[icon]} />
      {children}
    </div>
  );
};

export { Pill };
