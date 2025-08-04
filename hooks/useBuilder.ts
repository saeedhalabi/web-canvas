import { useContext } from "react";
import { BuilderContext } from "@/context/BuilderContext";

export const useBuilder = () => {
  const ctx = useContext(BuilderContext);
  if (!ctx) throw new Error("useBuilder must be used within a BuilderProvider");
  return ctx;
};
