export default function SectionLibrary() {
  const sectionTypes = ["hero", "header", "footer"];
  return (
    <section className="space-y-2">
      
      {sectionTypes.map(type => (
        <button
          key={type}
          className="w-full p-2 bg-gray-200 hover:bg-gray-300 rounded"
        >
          ➕ {type}
        </button>
      ))}
    </section>
  );
}