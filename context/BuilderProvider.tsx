"use client";

import { ReactNode, useState } from "react";
import { BuilderContext } from "./BuilderContext";
import { SectionInstance, SectionType } from "@/types/builder";

export const BuilderProvider = ({ children }: { children: ReactNode }) => {
  const [sections, setSections] = useState<SectionInstance[]>([]);

  const addSection = (type: SectionType) => {
    setSections(prev => [
      ...prev,
      {
        id: crypto.randomUUID(),
        type,
        props: {},
      },
    ]);
  };

  return (
    <BuilderContext.Provider value={{ sections, addSection }}>
      {children}
    </BuilderContext.Provider>
  );
};
