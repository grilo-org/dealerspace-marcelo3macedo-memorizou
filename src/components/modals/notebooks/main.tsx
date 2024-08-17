"use client";
import EditNotebookModal from "./edit";
import RemoveNotebookModal from "./remove";

export default function NotebookModals() {
  return (
    <div>
      <EditNotebookModal />
      <RemoveNotebookModal />
    </div>
  );
}
