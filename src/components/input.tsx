import React from "react";

import { cn } from "@/lib/utils";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  value: number;
}

export const Input = ({ ...props }: InputProps) => {
  return (
    <input
      type="text"
      className={cn(
        "border rounded-md border-black/30 text-4xl font-bold py-5 text-center",
        props.className
      )}
      value={props.value}
      inputMode="numeric"
      pattern="\d*"
      onChange={props.onChange}
    />
  );
};
