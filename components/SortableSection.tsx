import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FiMove } from "react-icons/fi";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Footer from "@/sections/Footer";
import {
  SectionType,
  SectionPropsMap,
  HeaderProps,
  HeroProps,
  FooterProps,
} from "@/types/builder";

function getSectionComponent(
  type: SectionType,
  props: SectionPropsMap[keyof SectionPropsMap]
) {
  if (type === "Header") return <Header {...(props as HeaderProps)} />;
  if (type === "Hero") return <Hero {...(props as HeroProps)} />;
  if (type === "Footer") return <Footer {...(props as FooterProps)} />;
  return null;
}

export default function SortableSection({
  id,
  type,
  props,
  isSelected,
  onSelect,
}: {
  id: string;
  type: SectionType;
  props: SectionPropsMap[keyof SectionPropsMap];
  isSelected: boolean;
  onSelect: (id: string) => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`group relative border p-4 rounded-xl bg-white shadow-sm transition hover:shadow-md cursor-pointer ${
        isSelected ? "border-blue-500 ring-2 ring-blue-200" : "border-gray-200"
      }`}
      onClick={() => onSelect(id)}
      tabIndex={0}
      aria-selected={isSelected}
    >
      <div
        {...attributes}
        {...listeners}
        className="absolute -top-3 -left-3 bg-white border border-gray-300 rounded-full p-1 text-gray-400 group-hover:text-gray-600 group-hover:shadow-md transition cursor-grab z-10"
        onClick={e => e.stopPropagation()}
        title="Drag to reorder"
        tabIndex={-1}
        aria-label="Drag to reorder"
      >
        <FiMove size={16} />
      </div>
      <div className="pointer-events-none break-words overflow-hidden">
        {getSectionComponent(type, props)}
      </div>
    </div>
  );
}
