import {
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

function ViewportButton({ mode, selected, onClick, children }: any) {
  return (
    <button
      onClick={() => onClick(mode)}
      className={`px-4 py-1 rounded border text-sm font-medium transition 
        ${
          selected
            ? "bg-blue-500 text-white border-blue-600"
            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
        }`}
      aria-pressed={selected}
    >
      {children}
    </button>
  );
}

export default function ViewportSwitcher({
  viewport,
  setViewport,
}: {
  viewport: "desktop" | "tablet" | "mobile";
  setViewport: (mode: "desktop" | "tablet" | "mobile") => void;
}) {
  return (
    <div className="flex justify-center gap-2 mb-4">
      <ViewportButton
        mode="desktop"
        selected={viewport === "desktop"}
        onClick={setViewport}
      >
        <ComputerDesktopIcon className="w-5 h-5 inline mr-1" />
        Desktop
      </ViewportButton>
      <ViewportButton
        mode="tablet"
        selected={viewport === "tablet"}
        onClick={setViewport}
      >
        <DeviceTabletIcon className="w-5 h-5 inline mr-1" />
        Tablet
      </ViewportButton>
      <ViewportButton
        mode="mobile"
        selected={viewport === "mobile"}
        onClick={setViewport}
      >
        <DevicePhoneMobileIcon className="w-5 h-5 inline mr-1" />
        Mobile
      </ViewportButton>
    </div>
  );
}
