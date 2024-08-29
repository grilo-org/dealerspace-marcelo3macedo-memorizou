"use client";
import OptionsAction from "./action/options";

import { Card } from "@/interfaces/card";

export default function CardBack({ card }: { card: Card }) {
  return (
    <article className="min-h-screen p-8 flex items-center justify-center flex-col">
      <div className="bg-white rounded-lg py-4 w-full min-h-60 flex flex-col items-center justify-center">
        <h3 className="text-lg my-4 text-center">{card.title}</h3>
        <h1 className="text-4xl text-center">{card.content}</h1>
      </div>
      <OptionsAction />
    </article>
  );
}
