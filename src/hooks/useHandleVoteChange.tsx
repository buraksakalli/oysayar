import { useCallback } from "react";

import { useVoteCounts } from "@/hooks/useVoteCounts";
import { RESET_VOTES_DESCRIPTION } from "@/lib/textConstants";

type Candidate = "erdogan" | "kilicdaroglu" | "invalid";

type VoteCounts = {
  [key in Candidate]: number;
};

type HandleVoteChange = (candidate: Candidate, newVotes: number) => void;

export const useVote = (): {
  handleVoteChange: HandleVoteChange;
  votes: VoteCounts;
  totalValidVotes: number;
  totalVotes: number;
  handleReset: () => void;
} => {
  const [votes, setVotes] = useVoteCounts();

  const totalValidVotes = votes.erdogan + votes.kilicdaroglu;
  const totalVotes = totalValidVotes + votes.invalid;

  const handleVoteChange = useCallback<HandleVoteChange>(
    (candidate, newVotes) => {
      setVotes((prevVotes) => ({
        ...prevVotes,
        [candidate]: newVotes >= 0 ? newVotes : 0,
      }));
    },
    [setVotes]
  );

  const handleReset = useCallback(() => {
    if (window.confirm(RESET_VOTES_DESCRIPTION)) {
      setVotes({
        erdogan: 0,
        kilicdaroglu: 0,
        invalid: 0,
      });
    }
  }, [setVotes]);

  return {
    handleVoteChange,
    votes,
    totalValidVotes,
    totalVotes,
    handleReset,
  };
};
