import { useBuilder } from "@/hooks/useBuilder";
import { SectionPropsMap } from "@/types/builder";

export default function EditorSidebar() {
  const { sections, selectedSectionId, updateSectionProps, setSections } =
    useBuilder();

  const selectedSection = sections.find(
    section => section.id === selectedSectionId
  );

  if (!selectedSection) {
    return (
      <div className="p-6 text-center text-gray-500 italic">
        Select a section to edit
      </div>
    );
  }

  const { id, type, props } = selectedSection;

  return (
    <div className="space-y-6 p-4 bg-white rounded-md shadow-md mx-2">
      {/* Title input for all */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium">
          Title
        </label>
        <input
          id="title"
          type="text"
          className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          placeholder="Edit title..."
          value={(props as SectionPropsMap[typeof type]).title || ""}
          onChange={e => updateSectionProps(id, { title: e.target.value })}
        />
      </div>

      {/* Description input for all */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium">
          Description
        </label>
        <textarea
          id="description"
          rows={4}
          className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          placeholder="Edit description..."
          value={(props as SectionPropsMap[typeof type]).description || ""}
          onChange={e =>
            updateSectionProps(id, { description: e.target.value })
          }
        />
        <p className="text-xs text-gray-400 mt-1">
          {(props as SectionPropsMap[typeof type]).description?.length || 0}{" "}
          characters
        </p>
      </div>

      {/* Image URL input for all */}
      <div>
        <label htmlFor="imageUrl" className="block text-sm font-medium">
          Image URL
        </label>
        <input
          id="imageUrl"
          type="text"
          className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          placeholder="Paste image URL..."
          value={(props as SectionPropsMap[typeof type]).imageUrl || ""}
          onChange={e => updateSectionProps(id, { imageUrl: e.target.value })}
        />
      </div>

      <button
        className="w-full border border-red-400 bg-red-50 text-red-600 rounded p-2 hover:bg-red-100 transition"
        onClick={() =>
          setSections(sections.filter(section => section.id !== id))
        }
      >
        🗑️ Delete Section
      </button>
    </div>
  );
}
