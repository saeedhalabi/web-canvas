"use client";

import { useBuilder } from "@/hooks/useBuilder";
import { SectionPropsMap } from "@/types/builder";
import { motion } from "framer-motion";

export default function EditorSidebar() {
  const { sections, selectedSectionId, updateSectionProps, setSections } =
    useBuilder();

  const selectedSection = sections.find(
    section => section.id === selectedSectionId
  );

  if (!selectedSection) {
    return (
      <motion.div
        key="empty"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        className="p-6 text-center text-gray-400 italic select-none"
      >
        Select a section to edit
      </motion.div>
    );
  }

  const { id, type, props } = selectedSection;

  return (
    <motion.div
      key="editor"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="space-y-8 p-6 bg-white rounded-2xl shadow-lg mx-2 border border-gray-200"
      style={{ minWidth: "320px" }}
    >
      {/* Title input for all */}
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-semibold text-gray-700 mb-2 tracking-wide"
        >
          Title
        </label>
        <input
          id="title"
          type="text"
          className="w-full mt-1 p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 focus:shadow-md transition duration-300 ease-in-out placeholder:text-gray-400 font-medium text-gray-900"
          placeholder="Edit title..."
          value={(props as SectionPropsMap[typeof type]).title || ""}
          onChange={e => updateSectionProps(id, { title: e.target.value })}
        />
      </div>

      {/* Description input for all */}
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-semibold text-gray-700 mb-2 tracking-wide"
        >
          Description
        </label>
        <textarea
          id="description"
          rows={4}
          className="w-full mt-1 p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 focus:shadow-md transition duration-300 ease-in-out placeholder:text-gray-400 font-medium text-gray-900 resize-none"
          placeholder="Edit description..."
          value={(props as SectionPropsMap[typeof type]).description || ""}
          onChange={e =>
            updateSectionProps(id, { description: e.target.value })
          }
        />
        <p className="text-xs text-gray-400 mt-1 select-none">
          {(props as SectionPropsMap[typeof type]).description?.length || 0}{" "}
          characters
        </p>
      </div>

      {/* Image URL input for all */}
      <div>
        <label
          htmlFor="imageUrl"
          className="block text-sm font-semibold text-gray-700 mb-2 tracking-wide"
        >
          Image URL
        </label>
        <input
          id="imageUrl"
          type="text"
          className="w-full mt-1 p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 focus:shadow-md transition duration-300 ease-in-out placeholder:text-gray-400 font-medium text-gray-900"
          placeholder="Paste image URL..."
          value={(props as SectionPropsMap[typeof type]).imageUrl || ""}
          onChange={e => updateSectionProps(id, { imageUrl: e.target.value })}
        />
      </div>

      <motion.button
        whileHover={{
          scale: 1.05,
          backgroundColor: "#fca5a5",
          color: "#991b1b",
          boxShadow: "0 4px 12px rgba(156, 163, 175, 0.6)",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="w-full border border-gray-300 bg-gray-50 text-gray-700 rounded-lg p-3 font-semibold shadow-sm hover:shadow-md transition-colors"
        onClick={() =>
          setSections(sections.filter(section => section.id !== id))
        }
        aria-label="Delete Section"
      >
        🗑️ Delete Section
      </motion.button>
    </motion.div>
  );
}
