export default function ImportButton() {
  return (
    <label className="px-4 py-2 bg-yellow-100 hover:bg-yellow-200 rounded cursor-pointer">
      📥 Import
      <input type="file" className="hidden" />
    </label>
  );
}
