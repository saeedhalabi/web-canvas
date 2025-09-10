"use client";

import { useState } from "react";
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
import { motion, AnimatePresence } from "framer-motion";

import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Footer from "@/sections/Footer";
import { useBuilder } from "@/hooks/useBuilder";
import {
  SectionType,
  SectionPropsMap,
  HeaderProps,
  HeroProps,
  FooterProps,
} from "@/types/builder";
import {
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

function SortableSection<T extends keyof SectionPropsMap>({
  id,
  type,
  props,
  isSelected,
  onSelect,
}: {
  id: string;
  type: T;
  props: SectionPropsMap[T];
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
  if (type === "Header") Component = <Header {...(props as HeaderProps)} />;
  if (type === "Hero") Component = <Hero {...(props as HeroProps)} />;
  if (type === "Footer") Component = <Footer {...(props as FooterProps)} />;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`group relative border p-4 rounded-xl bg-white shadow-sm transition hover:shadow-md cursor-pointer ${
        isSelected ? "border-blue-500 ring-2 ring-blue-200" : "border-gray-200"
      }`}
      onClick={() => onSelect(id)}
    >
      {/* Drag handle */}
      <div
        {...attributes}
        {...listeners}
        className="absolute -top-3 -left-3 bg-white border border-gray-300 rounded-full p-1 text-gray-400 group-hover:text-gray-600 group-hover:shadow-md transition cursor-grab z-10"
        onClick={e => e.stopPropagation()}
        title="Drag to reorder"
      >
        <FiMove size={16} />
      </div>

      {/* Section preview */}
      <div className="pointer-events-none break-words overflow-hidden">
        {Component}
      </div>
    </div>
  );
}

export default function PreviewArea() {
  const { sections, setSections, selectedSectionId, setSelectedSectionId } =
    useBuilder();

  const [viewport, setViewport] = useState<"desktop" | "tablet" | "mobile">(
    "desktop"
  );

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
    <>
      {/* Viewport Switcher */}
      <div className="flex justify-center gap-2 mb-4">
        {(["desktop", "tablet", "mobile"] as const).map(mode => (
          <button
            key={mode}
            onClick={() => setViewport(mode)}
            className={`px-4 py-1 rounded border text-sm font-medium transition 
              ${
                viewport === mode
                  ? "bg-blue-500 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
          >
            {mode === "desktop" && (
              <>
                <ComputerDesktopIcon className="w-5 h-5 inline mr-1" />
                Desktop
              </>
            )}
            {mode === "tablet" && (
              <>
                <DeviceTabletIcon className="w-5 h-5 inline mr-1" />
                Tablet
              </>
            )}
            {mode === "mobile" && (
              <>
                <DevicePhoneMobileIcon className="w-5 h-5 inline mr-1" />
                Mobile
              </>
            )}
          </button>
        ))}
      </div>

      {/* Canvas Preview */}
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
              className={`
                mx-auto w-full px-2 sm:px-4 md:px-6 py-6 transition-all duration-300
                ${
                  viewport === "desktop"
                    ? "max-w-4xl"
                    : viewport === "tablet"
                    ? "max-w-md"
                    : "max-w-xs"
                }
              `}
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
    </>
  );
}
