"use client";

import { useBuilder } from "@/hooks/useBuilder";

export default function ExportButton() {
  const { sections } = useBuilder();

  function handleExport() {
    const dataStr = JSON.stringify(sections, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "website-sections.json";
    a.click();

    URL.revokeObjectURL(url);
  }

  return (
    <label
      onClick={handleExport}
      className="inline-block px-4 py-[9px] bg-green-300 hover:bg-green-200 rounded cursor-pointer text-sm"
    >
      📬 Export
    </label>
  );
}
