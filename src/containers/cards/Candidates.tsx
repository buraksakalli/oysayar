import Counter from "@/components/counter";
import { HALF_WIDTH_CONTAINER } from "@/lib/textConstants";

type Candidate = "erdogan" | "kilicdaroglu";

interface CandidateCounterProps {
  candidate: Candidate;
  count: number;
  setCount: (newCount: number) => void;
}

export const CandidateCounter = ({
  candidate,
  count,
  setCount,
}: CandidateCounterProps) => (
  <div className={HALF_WIDTH_CONTAINER}>
    <Counter candidate={candidate} count={count} setCount={setCount} />
  </div>
);
