"use client";

import { ReactNode, useState } from "react";
import { BuilderContext } from "./BuilderContext";
import { SectionInstance, SectionType } from "@/types/builder";

export const BuilderProvider = ({ children }: { children: ReactNode }) => {
  const [sections, setSections] = useState<SectionInstance[]>([]);
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(
    null
  );

  const addSection = (type: SectionType) => {
    const newSection = {
      id: crypto.randomUUID(),
      type,
      props: {},
    };

    setSections(prev => [...prev, newSection]);
    setSelectedSectionId(newSection.id);
  };

  const updateSectionProps = (id: string, newProps: any) => {
    setSections(prev =>
      prev.map(section =>
        section.id === id
          ? { ...section, props: { ...section.props, ...newProps } }
          : section
      )
    );
  };

  return (
    <BuilderContext.Provider
      value={{
        sections,
        setSections,
        addSection,
        selectedSectionId,
        setSelectedSectionId,
        updateSectionProps,
      }}
    >
      {children}
    </BuilderContext.Provider>
  );
};
