"use client";

import Card from "@/components/card";
import Counter from "@/components/counter";
import { cn } from "@/lib/utils";
import {
  GRID_CONTAINER,
  HALF_WIDTH_CONTAINER,
  INVALID_VOTES_TITLE,
  RESET_TEXT,
  RESET_VOTES_DESCRIPTION,
  TOTAL_VOTES_TITLE,
  VALID_VOTES_TITLE,
} from "@/lib/textConstants";
import { VoteControls } from "@/containers/vote-control";
import { useVoteCounts } from "@/hooks/useVoteCounts";
import { RefreshIcon } from "@/components/icons";

export default function Home() {
  const [votes, setVotes] = useVoteCounts();

  const totalValidVotes = votes.erdogan + votes.kilicdaroglu;
  const totalVotes = totalValidVotes + votes.invalid;

  const handleVoteChange = (
    candidate: "erdogan" | "kilicdaroglu" | "invalid",
    newVotes: number
  ) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [candidate]: newVotes >= 0 ? newVotes : 0,
    }));
  };

  const handleReset = () => {
    if (window.confirm(RESET_VOTES_DESCRIPTION)) {
      setVotes({
        erdogan: 0,
        kilicdaroglu: 0,
        invalid: 0,
      });
    }
  };

  return (
    <main className="p-4 flex flex-col justify-center min-h-screen container mx-auto max-w-lg">
      <div className="flex justify-end mb-4">
        <button
          className="flex items-center gap-2 active:scale-95 transition-transform"
          onClick={handleReset}
        >
          <RefreshIcon className="stroke-white" />
          <span className="text-white">{RESET_TEXT}</span>
        </button>
      </div>
      <div className={GRID_CONTAINER}>
        <Card className={HALF_WIDTH_CONTAINER}>
          <Card.Title>{VALID_VOTES_TITLE}</Card.Title>
          <Card.Value>{totalValidVotes}</Card.Value>
        </Card>

        <Card className={HALF_WIDTH_CONTAINER}>
          <Card.Title>{TOTAL_VOTES_TITLE}</Card.Title>
          <Card.Value>{totalVotes}</Card.Value>
        </Card>
      </div>

      <div className="mt-4">
        <Card>
          <Card.Title>{INVALID_VOTES_TITLE}</Card.Title>
          <VoteControls
            count={votes.invalid}
            setCount={(newCount) => handleVoteChange("invalid", newCount)}
          />
        </Card>
      </div>

      <div className={cn("mt-4", GRID_CONTAINER)}>
        <div className={HALF_WIDTH_CONTAINER}>
          <Counter
            candidate="erdogan"
            count={votes.erdogan}
            setCount={(newCount) => handleVoteChange("erdogan", newCount)}
          />
        </div>
        <div className={HALF_WIDTH_CONTAINER}>
          <Counter
            candidate="kilicdaroglu"
            count={votes.kilicdaroglu}
            setCount={(newCount) => handleVoteChange("kilicdaroglu", newCount)}
          />
        </div>
      </div>
    </main>
  );
}
