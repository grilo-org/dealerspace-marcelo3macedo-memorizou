import { Card } from "./card";
import { Notebook } from "./notebook";

export interface NewSession {
  userId: string;
  notebookId: string;
  cardIds: string[];
}

export interface Session {
  id: string;
  notebookId: string;
  notebook: Notebook;
  userId: string;
  sessionCards: SessionCard[];
  createdAt: string;
}

export interface SessionCard {
  id: string;
  sessionId: string;
  cardId: string;
  card: Card;
  createdAt: string;
}

export type SessionIndexProps = {
  params: { id: string };
};

export interface UpdateSessionCard {
  id: string;
  difficultyId: string;
  answerAt: string;
}

export interface UpdateSession {
  cards: UpdateSessionCard[];
}
