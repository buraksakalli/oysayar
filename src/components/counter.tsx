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
  return (
    <div className="select-none">
      <div className="flex items-center justify-center">
        <Image
          alt={`${candidate}-image`}
          src={`/${candidate}.png`}
          width={178}
          height={170}
          quality={100}
        />
      </div>
      <div className="bg-theme-gray p-2.5 rounded-md flex flex-col gap-2.5 mt-5">
        <Button
          className="bg-theme-green hover:bg-theme-green/80 active:bg-theme-green/60"
          onClick={() => setCount(count + 1)}
        >
          <PlusIcon className="stroke-white" />
        </Button>

        <Input
          value={count}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = e.target.value.replace(/[^\d]/g, "");
            const newCount = Number(newValue);
            if (!Number.isNaN(newCount)) {
              setCount(newCount);
            }
          }}
        />

        <Button
          className={cn("bg-theme-red", {
            "opacity-50": count === 0,
          })}
          onClick={() => setCount(count - 1)}
          disabled={count === 0}
        >
          <MinusIcon className="stroke-white" />
        </Button>
      </div>
    </div>
  );
}
