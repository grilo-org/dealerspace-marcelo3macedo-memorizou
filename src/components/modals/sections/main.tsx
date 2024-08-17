"use client";
import EditSectionModal from "./edit";
import NewSectionModal from "./new";
import RemoveSectionModal from "./remove";
import NewCardModal from "../cards/new";

export default function SectionsModals() {
  return (
    <div>
      <NewSectionModal />
      <EditSectionModal />
      <RemoveSectionModal />
      <NewCardModal />
    </div>
  );
}
