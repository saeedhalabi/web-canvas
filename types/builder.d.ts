// All possible section types
export type SectionType = "Header" | "Hero" | "Footer";

// Props for each section type
export type HeaderProps = {
  title: string;
  description?: string;
  imageUrl?: string;
  subtitle?: string;
};

export type HeroProps = {
  title: string;
  description: string;
  imageUrl: string;
  callToActionText: string;
};

export type FooterProps = {
  title?: string;
  description?: string;
  imageUrl?: string;
};

// Map section type to its props
export type SectionPropsMap = {
  Header: HeaderProps;
  Hero: HeroProps;
  Footer: FooterProps;
};

// One section instance in the builder
export interface SectionInstance<T extends SectionType = SectionType> {
  id: string;
  type: T;
  props: SectionPropsMap[T];
}

// Context for the builder state and actions
export interface BuilderContextType {
  sections: SectionInstance[];
  setSections: React.Dispatch<React.SetStateAction<SectionInstance[]>>;
  addSection: (type: SectionType) => void;
  selectedSectionId: string | null;
  setSelectedSectionId: React.Dispatch<React.SetStateAction<string | null>>;
  updateSectionProps: <T extends SectionType>(
    id: string,
    newProps: Partial<SectionPropsMap[T]>
  ) => void;
}
