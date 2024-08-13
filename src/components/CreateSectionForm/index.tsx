import { useContext, useState } from "react";
import { SectionsContext } from "../../SectionsContext";
import { colors } from "../../common/data/colors";
import { Box, Button, TextField } from "@mui/material";

const CreateSectionForm: React.FC = () => {
  const { sections, editSections, isSpinning } = useContext(SectionsContext);
  const [inputText, setInputText] = useState("");

  const handleCreateSection = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText) return;

    editSections([
      ...sections,
      {
        id: new Date().valueOf(),
        label: inputText,
        color: colors[Math.floor(Math.random() * colors.length)],
      },
    ]);
    setInputText("");
  };

  return (
    <Box component="form" onSubmit={handleCreateSection} gap={1} display="flex">
      <TextField
        label="Text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        size="small"
        disabled={isSpinning}
      />
      <Button type="submit" disabled={isSpinning} variant="contained">
        Add
      </Button>
    </Box>
  );
};

export default CreateSectionForm;
