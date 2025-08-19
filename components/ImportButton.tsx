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
        const data = JSON.parse(e.target?.result as string);
        setSections(data);
      } catch (error) {
        console.error("Failed to parse JSON:", error);
      }
    };
    reader.readAsText(file);
  }

  return (
    <label
      className="px-4 py-[9] bg-yellow-100 hover:bg-yellow-200 rounded cursor-pointer"
      onClick={() => fileInputRef.current?.click()}
    >
      📥 Import
      <input
        type="file"
        accept=".json"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />
    </label>
  );
}
