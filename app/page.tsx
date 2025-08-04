"use client";

import SectionLibrary from "@/components/SectionLibrary";
import PreviewArea from "@/components/PreviewArea";
import EditorSidebar from "@/components/EditorSidebar";
import ExportButton from "@/components/ExportButton";
import ImportButton from "@/components/ImportButton";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row min-h-screen">
      {/* Section Library */}
      <aside className="w-full lg:w-64 bg-white border-b lg:border-b-0 lg:border-r p-4 flex-shrink-0">
        <h2 className="text-lg font-semibold mb-4">Section Library</h2>
        <SectionLibrary />
        <div className="mt-6 space-x-2 text-center">
          <ExportButton />
          <ImportButton />
        </div>
      </aside>

      {/* Preview */}
      <section className="flex-1 overflow-y-auto bg-gray-100 p-6">
        <div className="max-w-3xl mx-auto space-y-4">
          <PreviewArea />
        </div>
      </section>

      {/* Editor Sidebar */}
      <aside className="w-full lg:w-80 bg-white border-t lg:border-t-0 lg:border-l p-4 flex-shrink-0">
        <h2 className="text-lg font-semibold mb-4">Section Editor</h2>
        <EditorSidebar />
      </aside>
    </main>
  );
}
