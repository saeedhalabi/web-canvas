import { useBuilder } from "@/hooks/useBuilder";
import { SectionType } from "@/types/builder";
const sectionTypes = ["Hero", "Header", "Footer"];
export default function SectionLibrary() {
  const { addSection } = useBuilder();

  return (
    <section className="space-y-2">
      {sectionTypes.map(type => (
        <button
          key={type}
          className="w-full p-2 bg-gray-200 hover:bg-gray-300 rounded"
          onClick={() => addSection(type as SectionType)}
        >
          ➕ {type}
        </button>
      ))}
    </section>
  );
}
