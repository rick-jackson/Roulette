import { useState } from "react";
import type { Section } from "./types/section";
import Roulette from "./components/Roulette";
import Sections from "./components/SectionsList";
import { SectionsContext } from "./SectionsContext";
import "./App.css";
import CreateSectionForm from "./components/CreateSectionForm";

const App = () => {
  const [isSpinning, setSpinnig] = useState(false);
  const [sections, setSections] = useState<Section[]>([
    { color: "#fd7e14", label: "1000", id: 1 },
    { color: "#6610f2", label: "2000", id: 2 },
    { color: "#0dcaf0", label: "3000", id: 3 },
    { color: "#20c997", label: "4000", id: 4 },
  ]);

  const editSections = (newSections: Section[]) => {
    setSections(newSections);
  };

  const toggleSpinnig = () => {
    setSpinnig((prev) => !prev);
  };

  return (
    <SectionsContext.Provider
      value={{ sections, editSections, toggleSpinnig, isSpinning }}
    >
      <div className="wrapper">
        <div className="content">
          <Roulette />
          <div
            style={{ background: "#fff", padding: "8px", borderRadius: "5px" }}
          >
            <CreateSectionForm />
            <Sections />
          </div>
        </div>
      </div>
    </SectionsContext.Provider>
  );
};

export default App;
