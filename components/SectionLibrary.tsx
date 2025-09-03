import { useBuilder } from "@/hooks/useBuilder";
import { SectionType } from "@/types/builder";

const sectionTypes: SectionType[] = ["Hero", "Header", "Footer"];

export default function SectionLibrary() {
  const { addSection } = useBuilder();

  return (
    <section className="space-y-3 p-4 bg-white border rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        Section Library
      </h2>
      {sectionTypes.map(type => (
        <button
          key={type}
          className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition border border-gray-300 shadow-sm"
          onClick={() => addSection(type)}
        >
          <div className="text-base font-medium text-gray-900">➕ {type}</div>
          <div className="text-sm text-gray-600">
            Add a {type} section to your page
          </div>
        </button>
      ))}
    </section>
  );
}
