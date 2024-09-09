import { Section } from "./section";
import { Subtheme } from "./subtheme";
import { Theme } from "./theme";

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
  subtheme: Subtheme;
}

export interface NotebookResponse {
  notebooks: Notebook[];
  themes: Theme[];
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
