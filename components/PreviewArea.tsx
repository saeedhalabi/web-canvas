export default function PreviewArea() {
  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {[1, 2, 3].map((_, i) => (
        <div key={i} className="bg-white p-6 rounded shadow">
          <p className="text-sm text-gray-500">Section {i + 1}</p>
        </div>
      ))}
    </div>
  );
}
