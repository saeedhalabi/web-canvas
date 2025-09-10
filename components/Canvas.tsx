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
} from "@dnd-kit/sortable";
import { motion, AnimatePresence } from "framer-motion";
import SortableSection from "./SortableSection";
import { SectionType, SectionPropsMap } from "@/types/builder";

export default function Canvas({
  viewport,
  sections,
  setSections,
  selectedSectionId,
  setSelectedSectionId,
}: {
  viewport: "desktop" | "tablet" | "mobile";
  sections: {
    id: string;
    type: SectionType;
    props: SectionPropsMap[keyof SectionPropsMap];
  }[];
  setSections: any;
  selectedSectionId: string | null;
  setSelectedSectionId: (id: string) => void;
}) {
  const sensors = useSensors(useSensor(PointerSensor));

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = sections.findIndex(s => s.id === active.id);
      const newIndex = sections.findIndex(s => s.id === over?.id);
      setSections(arrayMove(sections, oldIndex, newIndex));
    }
  }

  const maxWidth =
    viewport === "desktop"
      ? "max-w-4xl"
      : viewport === "tablet"
      ? "max-w-md"
      : "max-w-xs";

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
          <div
            className={`mx-auto w-full px-2 sm:px-4 md:px-6 py-6 transition-all duration-300 ${maxWidth}`}
          >
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
