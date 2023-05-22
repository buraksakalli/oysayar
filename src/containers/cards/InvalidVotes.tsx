import Card from "@/components/card";

import { VoteControls } from "../vote-control";
import { INVALID_VOTES_TITLE } from "@/lib/textConstants";

interface InvalidVotesCardProps {
  count: number;
  setCount: (newCount: number) => void;
}

export const InvalidVotesCard = ({
  count,
  setCount,
}: InvalidVotesCardProps) => (
  <Card>
    <Card.Title>{INVALID_VOTES_TITLE}</Card.Title>
    <VoteControls count={count} setCount={setCount} />
  </Card>
);
