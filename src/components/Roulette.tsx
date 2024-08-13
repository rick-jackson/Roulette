import React, { useContext } from "react";
import { renderSections } from "../common/utils/renderSections";
import StartButton from "./SpinButton";
import useSpinRoulette from "../common/hooks/useSpinRoulette";
import { SectionsContext } from "../SectionsContext";
import ResultModal from "./ResultModal";

const Roulette: React.FC = () => {
  const {
    rotation,
    resultColor,
    spinRoulette,
    isShowResult,
    handleCloseResult,
  } = useSpinRoulette();
  const { sections } = useContext(SectionsContext);

  return (
    <>
      <ResultModal
        open={isShowResult}
        onClose={handleCloseResult}
        result={resultColor}
      />
      <div style={{ position: "relative", width: "400px", height: "400px" }}>
        <svg
          width="400"
          height="400"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <circle cx="200" cy="200" r="200" fill="#ccc" />
          {sections.length > 1 && <>{renderSections(sections)}</>}
          <circle cx="200" cy="200" r="20" fill="#fff" />
        </svg>
        {sections.length > 1 && (
          <StartButton spinRoulette={spinRoulette} color={resultColor.color} />
        )}
      </div>
    </>
  );
};

export default Roulette;
