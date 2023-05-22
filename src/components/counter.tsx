import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "./button";
import { MinusIcon, PlusIcon } from "./icons";
import { Input } from "./input";

interface CounterProps {
  count: number;
  setCount: (newCount: number) => void;
  candidate: "erdogan" | "kilicdaroglu";
}

export default function Counter({ count, setCount, candidate }: CounterProps) {
  const vibrateDevice = () => {
    if (navigator.vibrate) navigator.vibrate([10]);
  };

  return (
    <div className="select-none">
      <div className="flex items-center justify-center">
        <Image
          alt={`${candidate}-image`}
          src={`/_static/${candidate}.png`}
          width={178}
          height={170}
          quality={100}
        />
      </div>
      <div className="bg-theme-gray p-2.5 rounded-md flex flex-col gap-2.5 mt-5">
        <Button
          className="bg-theme-green hover:bg-theme-green/80 active:bg-theme-green/60"
          onClick={() => {
            setCount(count + 1);
            vibrateDevice();
          }}
        >
          <PlusIcon className="stroke-white" />
        </Button>

        <Input
          value={count}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const value = Number(e.target.value.replace(/[^\d]/g, ""));

            if (!Number.isNaN(value)) setCount(value);
          }}
        />

        <Button
          className={cn("bg-theme-red", {
            "opacity-50": count === 0,
          })}
          onClick={() => {
            setCount(count - 1);
            vibrateDevice();
          }}
          disabled={count === 0}
        >
          <MinusIcon className="stroke-white" />
        </Button>
      </div>
    </div>
  );
}
