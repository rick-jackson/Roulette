import React, { useContext } from "react";
import { renderSections } from "../common/utils/renderSections";
import StartButton from "./SpinButton";
import useSpinRoulette from "../common/hooks/useSpinRoulette";
import { SectionsContext } from "../SectionsContext";
import ResultModal from "./ResultModal";
import { Box } from "@mui/material";

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
      <Box
        sx={{
          width: { xs: "320px", md: "400px", lg: "700px" },
          position: "relative",
        }}
      >
        <svg
          viewBox="0 0 400 400"
          preserveAspectRatio="xMidYMid meet"
          style={{
            width: "100%",
            height: "100%",
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <circle cx="200" cy="200" r="200" fill="#ccc" />
          {sections.length > 1 && <>{renderSections(sections)}</>}
          <circle cx="200" cy="200" r="20" fill="#fff" />
        </svg>
        {sections.length > 1 && (
          <StartButton spinRoulette={spinRoulette} color={resultColor.color} />
        )}
      </Box>
    </>
  );
};

export default Roulette;
