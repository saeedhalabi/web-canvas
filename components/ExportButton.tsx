"use client";

import { useBuilder } from "@/hooks/useBuilder";

export default function ExportButton() {
  const { sections } = useBuilder();

  function handleExport() {
    if (!sections.length) {
      alert("⚠️ No sections to export.");
      return;
    }

    const dataStr = JSON.stringify(sections, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const filename = `sections-${timestamp}.json`;

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();

    URL.revokeObjectURL(url);
    alert("✅ Sections exported successfully!");
  }

  return (
    <label
      onClick={handleExport}
      className="inline-block px-4 py-2 bg-green-300 hover:bg-green-400 text-sm rounded cursor-pointer transition"
    >
      📤 Export
    </label>
  );
}
