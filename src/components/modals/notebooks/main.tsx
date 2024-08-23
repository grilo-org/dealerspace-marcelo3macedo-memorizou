"use client";
import EditNotebookModal from "./edit";
import NewNotebookModal from "./new";
import RemoveNotebookModal from "./remove";

export default function NotebookModals() {
  return (
    <div>
      <NewNotebookModal />
      <EditNotebookModal />
      <RemoveNotebookModal />
    </div>
  );
}
