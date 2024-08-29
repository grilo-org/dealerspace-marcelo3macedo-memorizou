"use client";
import CardBack from "./cardBack";
import CardFront from "./cardFront";

import { useStudySession } from "@/hooks/sessions/study";

export default function SessionCard() {
  const { flip, getCard } = useStudySession();
  const card = getCard();

  if (!card) return <></>;

  return (
    <div>{!flip ? <CardFront card={card} /> : <CardBack card={card} />}</div>
  );
}
