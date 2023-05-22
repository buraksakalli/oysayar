import Card from "@/components/card";
import { HALF_WIDTH_CONTAINER, TOTAL_VOTES_TITLE } from "@/lib/textConstants";

interface TotalVotesCardProps {
  totalVotes: number;
}

export const TotalVotesCard = ({ totalVotes }: TotalVotesCardProps) => (
  <Card className={HALF_WIDTH_CONTAINER}>
    <Card.Title>{TOTAL_VOTES_TITLE}</Card.Title>
    <Card.Value>{totalVotes}</Card.Value>
  </Card>
);
