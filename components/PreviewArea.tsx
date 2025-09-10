"use client";

import { useState } from "react";
import { useBuilder } from "@/hooks/useBuilder";
import ViewportSwitcher from "./ViewportSwitcher";
import Canvas from "./Canvas";

export default function PreviewArea() {
  const { sections, setSections, selectedSectionId, setSelectedSectionId } =
    useBuilder();
  const [viewport, setViewport] = useState<"desktop" | "tablet" | "mobile">(
    "desktop"
  );

  return (
    <>
      <ViewportSwitcher viewport={viewport} setViewport={setViewport} />
      <Canvas
        viewport={viewport}
        sections={sections}
        setSections={setSections}
        selectedSectionId={selectedSectionId}
        setSelectedSectionId={setSelectedSectionId}
      />
    </>
  );
}
