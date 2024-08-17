import { Card } from "./card";

export interface Section {
  id: string;
  title: string;
  cards: Card[];
}

export interface NewSection {
  notebookId: string;
  title: string;
  description: string;
}

export type SectionIndexProps = {
  params: { id: string };
};
