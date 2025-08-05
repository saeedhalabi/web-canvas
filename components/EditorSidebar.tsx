import { useBuilder } from "@/hooks/useBuilder";

export default function EditorSidebar() {
  const { sections, selectedSectionId, updateSectionProps, setSections } =
    useBuilder();
  const selectedSection = sections.find(
    section => section.id === selectedSectionId
  );

  if (!selectedSection) {
    return <div className="p-4 text-gray-500">Select a section to edit</div>;
  }

  const { id, props } = selectedSection;
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input
          type="text"
          className="w-full mt-1 p-2 border rounded"
          placeholder="Edit title..."
          value={props.title || ""}
          onChange={e => updateSectionProps(id, { title: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea
          className="w-full mt-1 p-2 border rounded"
          rows={4}
          placeholder="Edit description..."
          value={props.description || ""}
          onChange={e =>
            updateSectionProps(id, { description: e.target.value })
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Image URL</label>
        <input
          type="text"
          className="w-full mt-1 p-2 border rounded"
          placeholder="Paste image URL..."
          value={props.imageUrl || ""}
          onChange={e => updateSectionProps(id, { imageUrl: e.target.value })}
        />
      </div>

      <button
        className="w-full bg-red-100 hover:bg-red-200 text-red-600 rounded p-2 cursor-pointer"
        onClick={() =>
          setSections(sections.filter(section => section.id !== id))
        }
      >
        🗑️ Delete Section
      </button>
    </div>
  );
}
