import React from "react";

import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Card({ ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-theme-gray rounded-md p-2.5 text-white",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}

const CardTitle = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-xs text-left mb-1">{children}</h2>;
};

const CardValue = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-center font-bold text-4xl">{children}</p>;
};

Card.Title = CardTitle;
Card.Value = CardValue;
