import type { Section } from "../../types/section";

export const calculateResult = (
  currentRotation: number,
  sections: Section[]
): Section => {
  const normalizedRotation = currentRotation % 360;
  const anglePerSection = 360 / sections.length;
  const resultIndex =
    Math.floor((360 - normalizedRotation) / anglePerSection) % sections.length;
  return sections[resultIndex];
};
