import { Section } from "./section";

export interface NewNotebook {
  title: string;
  content: string;
  userId: string;
}

export interface EditNotebook {
  id: string;
  title: string;
  content: string;
  userId: string;
}

export interface CloneNotebook {
  id: string;
}

export interface Notebook {
  id: string;
  title: string;
  content: string;
  userId: string;
  createdAt: string;
  sections: Section[];
}

export interface NotebookResponse {
  notebooks: Notebook[];
  page: number;
  limit: number;
  total: number;
}

export type NotebookIndexProps = {
  params: { id: string };
};

export type NotebookByNameProps = {
  params: { name: string };
};
