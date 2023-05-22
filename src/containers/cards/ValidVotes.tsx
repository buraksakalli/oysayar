import Card from "@/components/card";
import { HALF_WIDTH_CONTAINER, VALID_VOTES_TITLE } from "@/lib/textConstants";

interface ValidVotesCardProps {
  totalValidVotes: number;
}

export const ValidVotesCard = ({ totalValidVotes }: ValidVotesCardProps) => (
  <Card className={HALF_WIDTH_CONTAINER}>
    <Card.Title>{VALID_VOTES_TITLE}</Card.Title>
    <Card.Value>{totalValidVotes}</Card.Value>
  </Card>
);
