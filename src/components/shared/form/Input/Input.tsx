import React, {
  forwardRef,
  InputHTMLAttributes,
  KeyboardEventHandler,
  ReactNode,
} from "react";
import { mergeClassNames } from "../../../../helpers";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  valid: boolean;
  onEnter: () => void;
  children?: ReactNode | ReactNode[];
}

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      error,
      valid,
      children,
      className,
      onEnter = () => {},
      onKeyDown = () => {},
      ...rest
    },
    ref
  ) => {
    const getBorder = () => {
      if (error) return "border-rose-400 border-2";
      if (valid) return "border-green-400 border-2";

      return "";
    };

    const classNames = mergeClassNames(
      className,
      "py-3",
      "px-4",
      "block",
      "my-4",
      "border-1",
      "rounded-xl",
      "bg-slate-100",
      "w-full",
      "focus:bg-slate-50",
      "focus:outline-none",
      getBorder()
    );

    const renderError = () =>
      error && (
        <p className="bg-red-200 p-2 rounded-b-md text-slate-600 m-4 -mt-4">
          {error}
        </p>
      );

    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
      if (event.key === "Enter") {
        onEnter();
        return;
      }

      onKeyDown(event);
    };

    return (
      <>
        <input
          ref={ref}
          onKeyDown={handleKeyDown}
          className={classNames}
          {...rest}
        >
          {children}
        </input>
        {renderError()}
      </>
    );
  }
);

export { Input };
