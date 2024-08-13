import { useState, useRef, useCallback, useContext } from "react";
import { calculateResult } from "../utils/calculateResult";
import { SectionsContext } from "../../SectionsContext";
import { Section } from "../../types/section";

const useSpinRoulette = () => {
  const { sections, isSpinning, toggleSpinnig } = useContext(SectionsContext);

  const [rotation, setRotation] = useState<number>(0);
  const [resultColor, setResultColor] = useState<Section>(sections[0]);
  const [isShowResult, setShowResult] = useState(false);
  const requestRef = useRef<number | null>(null);

  const handleCloseResult = () => {
    setShowResult(false);
  };

  const spinRoulette = useCallback(() => {
    if (isSpinning) return;

    toggleSpinnig();

    const spinDegrees = 360 * 5 + Math.random() * 360;
    const duration = 4000;
    const startTime = performance.now();

    const easeOut = (t: number) => t * (2 - t);

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const currentRotation = rotation + spinDegrees * easeOut(progress);

      setRotation(currentRotation);
      setResultColor(calculateResult(currentRotation, sections));

      if (progress < 1) {
        requestRef.current = requestAnimationFrame(animate);
      } else {
        setShowResult(true);
        toggleSpinnig();
      }
    };
    requestRef.current = requestAnimationFrame(animate);
  }, [rotation, sections, isSpinning, toggleSpinnig]);

  return {
    rotation,
    resultColor,
    spinRoulette,
    isShowResult,
    handleCloseResult,
  };
};

export default useSpinRoulette;
