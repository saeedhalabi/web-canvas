export default function EditorSidebar() {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input
          type="text"
          className="w-full mt-1 p-2 border rounded"
          placeholder="Edit title..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea
          className="w-full mt-1 p-2 border rounded"
          rows={4}
          placeholder="Edit description..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Image URL</label>
        <input
          type="text"
          className="w-full mt-1 p-2 border rounded"
          placeholder="Paste image URL..."
        />
      </div>

      <button className="w-full bg-red-100 hover:bg-red-200 text-red-600 rounded p-2 cursor-pointer">
        🗑️ Delete Section
      </button>
    </div>
  );
}
