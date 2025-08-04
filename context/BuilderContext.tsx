"use client";

import { createContext } from "react";
import { BuilderContextType } from "@/types/builder";

export const BuilderContext = createContext<BuilderContextType | null>(null);
