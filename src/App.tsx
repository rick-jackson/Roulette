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
    { color: "#fd7e14", label: "Red", id: 1 },
    { color: "#6610f2", label: "Green", id: 2 },
    { color: "#0dcaf0", label: "Blue", id: 3 },
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
