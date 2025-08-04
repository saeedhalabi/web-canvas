export type SectionType = "Header" | "Hero" | "Footer";

export interface SectionInstance {
  id: string; // for reordering/deleting later
  type: SectionType;
  props: any;
}

export interface BuilderContextType {
  sections: SectionInstance[];
  addSection: (type: SectionType) => void;
}
