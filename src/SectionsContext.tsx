import { createContext } from "react";
import type { Section } from "./types/section";

interface SectionsContextType {
  isSpinning: boolean;
  toggleSpinnig: () => void;
  sections: Section[];
  editSections: (newSections: Section[]) => void;
}

export const SectionsContext = createContext<SectionsContextType>({
  isSpinning: false,
  toggleSpinnig: (): void => {},
  sections: [],
  editSections: (): void => {},
});
