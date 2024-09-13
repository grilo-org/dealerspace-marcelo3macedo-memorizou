"use client";
import CardBack from "./cardBack";
import CardFront from "./cardFront";

import { useStudySession } from "@/hooks/sessions/study";

export default function SessionCard() {
  const { flip, getCard, changeFlip } = useStudySession();
  const card = getCard();

  if (!card) return <></>;

  return (
    <div
      className="max-w-3xl mx-auto my-2 px-2 md:my-20 md:px-8 py-4 bg-white rounded-lg shadow-md select-none"
      onClick={changeFlip}
    >
      {!flip ? <CardFront card={card} /> : <CardBack card={card} />}
    </div>
  );
}
