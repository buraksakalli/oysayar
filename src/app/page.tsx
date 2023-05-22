"use client";

import {
  CandidateCounter,
  InvalidVotesCard,
  TotalVotesCard,
  ValidVotesCard,
} from "@/containers/cards";
import { RefreshIcon } from "@/components/icons";

import { RESET_TEXT } from "@/lib/textConstants";

import { useVote } from "@/hooks/useHandleVoteChange";

export default function Home() {
  const { handleVoteChange, votes, totalVotes, totalValidVotes, handleReset } =
    useVote();

  return (
    <main className="container-main">
      <div className="flex justify-end mb-4">
        <button className="button-reset" onClick={handleReset}>
          <RefreshIcon className="stroke-white" />
          <span className="text-white">{RESET_TEXT}</span>
        </button>
      </div>
      <div className="container-grid">
        <ValidVotesCard totalValidVotes={totalValidVotes} />
        <TotalVotesCard totalVotes={totalVotes} />
      </div>

      <div className="mt-4">
        <InvalidVotesCard
          count={votes.invalid}
          setCount={(newCount) => handleVoteChange("invalid", newCount)}
        />
      </div>

      <div className="container-grid-extended">
        <CandidateCounter
          candidate="erdogan"
          count={votes.erdogan}
          setCount={(newCount) => handleVoteChange("erdogan", newCount)}
        />
        <CandidateCounter
          candidate="kilicdaroglu"
          count={votes.kilicdaroglu}
          setCount={(newCount) => handleVoteChange("kilicdaroglu", newCount)}
        />
      </div>
    </main>
  );
}
