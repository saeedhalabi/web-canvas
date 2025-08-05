"use client";

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
  useSortable,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

import { FiMove } from "react-icons/fi";

import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Footer from "@/sections/Footer";
import { useBuilder } from "@/hooks/useBuilder";

import { motion, AnimatePresence } from "framer-motion";
import { SectionType } from "@/types/builder";

function SortableSection({
  id,
  type,
  props,
  isSelected,
  onSelect,
}: {
  id: string;
  type: SectionType;
  props: any;
  isSelected: boolean;
  onSelect: (id: string) => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  let Component = null;
  if (type === "Header") Component = <Header {...props} />;
  if (type === "Hero") Component = <Hero {...props} />;
  if (type === "Footer") Component = <Footer {...props} />;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`border p-2 rounded-md bg-white cursor-pointer ${
        isSelected ? "border-blue-500" : "border-transparent"
      }`}
      onClick={() => onSelect(id)}
    >
      {/* Drag handle */}
      <div
        {...attributes}
        {...listeners}
        className="cursor-move mb-2 p-1 inline-block text-gray-400 hover:text-gray-700"
        onClick={e => e.stopPropagation()} // prevent selecting when dragging
        title="Drag to reorder"
      >
        <FiMove size={18} />
      </div>

      {Component}
    </div>
  );
}

export default function PreviewArea() {
  const { sections, setSections, selectedSectionId, setSelectedSectionId } =
    useBuilder();

  const sensors = useSensors(useSensor(PointerSensor));

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = sections.findIndex(s => s.id === active.id);
      const newIndex = sections.findIndex(s => s.id === over?.id);
      const newSections = arrayMove(sections, oldIndex, newIndex);
      setSections(newSections);
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={sections.map(s => s.id)}
        strategy={verticalListSortingStrategy}
      >
        <AnimatePresence>
          <div className="space-y-2 max-w-3xl mx-auto break-words">
            {sections.map(({ id, type, props }) => (
              <motion.div
                key={id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <SortableSection
                  id={id}
                  type={type}
                  props={props}
                  isSelected={id === selectedSectionId}
                  onSelect={setSelectedSectionId}
                />
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </SortableContext>
    </DndContext>
  );
}
