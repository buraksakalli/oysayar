import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Votes {
  erdogan: number;
  kilicdaroglu: number;
  invalid: number;
}

export const useVoteCounts = (): [Votes, Dispatch<SetStateAction<Votes>>] => {
  const [votes, setVotes] = useState({
    erdogan: 0,
    kilicdaroglu: 0,
    invalid: 0,
  });

  useEffect(() => {
    const savedVotes = JSON.parse(localStorage.getItem("votes")!);
    if (savedVotes) {
      setVotes(savedVotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("votes", JSON.stringify(votes));
  }, [votes]);

  return [votes, setVotes];
};
