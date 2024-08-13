export interface NewNotebook {
  title: string;
  content: string;
}

export interface Notebook {
  id: string;
  title: string;
  content: string;
  createdAt: string;
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
