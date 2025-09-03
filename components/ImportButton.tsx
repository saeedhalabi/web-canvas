import { useRef } from "react";
import { useBuilder } from "@/hooks/useBuilder";

export default function ImportButton() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { setSections } = useBuilder();

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = e => {
      try {
        const text = e.target?.result as string;
        const data = JSON.parse(text);

        if (!Array.isArray(data)) throw new Error("Invalid section format");

        setSections(data);
        alert("✅ Sections imported successfully!");
      } catch (error) {
        console.error("Import failed:", error);
        alert("❌ Failed to import. Make sure it's a valid JSON file.");
      }
    };
    reader.readAsText(file);
  }

  return (
    <>
      <label
        className="inline-block px-4 py-2 bg-yellow-200 hover:bg-yellow-300 text-sm rounded cursor-pointer transition"
        onClick={() => fileInputRef.current?.click()}
      >
        📥 Import
      </label>
      <input
        type="file"
        accept=".json"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />
    </>
  );
}
