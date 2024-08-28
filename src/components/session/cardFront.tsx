"use client";
import RevealAction from "./action/reveal";

import { Card } from "@/interfaces/card";

export default function CardFront({ card }: { card: Card }) {
  return (
    <article className="min-h-screen p-8 flex items-center justify-center flex-col">
      <div className="bg-white rounded-lg py-4 w-full min-h-60 flex items-center justify-center">
        <h1 className="text-4xl text-center">{card.title}</h1>
      </div>
      <RevealAction />
    </article>
  );
}
