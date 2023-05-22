import { Button } from "@/components/button";
import { MinusIcon, PlusIcon } from "@/components/icons";
import { Input } from "@/components/input";
import { cn } from "@/lib/utils";

export const VoteControls = ({
  count,
  setCount,
}: {
  count: number;
  setCount: (newCount: number) => void;
}) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCount = Number(e.target.value);
    if (newCount >= 0) setCount(newCount);
  };

  return (
    <div className="flex gap-2">
      <Button
        className={cn("px-6 bg-theme-red", {
          "opacity-50": count === 0,
        })}
        onClick={() => count > 0 && setCount(count - 1)}
        disabled={count === 0}
      >
        <MinusIcon className="stroke-white" />
      </Button>

      <Input
        className="border rounded-md border-black/30 text-4xl font-bold text-center w-full py-0"
        value={count}
        onChange={handleInput}
      />

      <Button
        className="px-6 bg-theme-green"
        onClick={() => setCount(count + 1)}
      >
        <PlusIcon className="stroke-white" />
      </Button>
    </div>
  );
};
