import React from "react";

export type SectionType = "Header" | "Hero" | "Footer";

export interface SectionInstance {
  id: string; // for reordering/deleting later
  type: SectionType;
  props: any;
}

export interface BuilderContextType {
  sections: SectionInstance[];
  setSections: React.Dispatch<React.SetStateAction<SectionInstance[]>>; // ← Add this
  addSection: (type: SectionType) => void;
  selectedSectionId: string | null;
  setSelectedSectionId: React.Dispatch<React.SetStateAction<string | null>>;
  updateSectionProps: (id: string, newProps: any) => void;
}
