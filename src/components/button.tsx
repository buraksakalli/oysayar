import React from "react";

import { cn } from "@/lib/utils";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

export const Button = ({
  children,
  onClick,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "rounded-md py-6 flex items-center justify-center transition-all active:scale-95 select-none",
        props.className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
