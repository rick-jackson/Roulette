import { useContext, useState } from "react";
import type { Section } from "../../types/section";
import { SectionsContext } from "../../SectionsContext";
import {
  Box,
  IconButton,
  ListItemButton,
  ListItemText,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";

type SectionsListItemProps = {
  section: Section;
  editSectionId: number | null;
  onEdit: (id: number | null) => void;
};

const SectionsListItem: React.FC<SectionsListItemProps> = ({
  section,
  editSectionId,
  onEdit,
}) => {
  const { sections, editSections, isSpinning } = useContext(SectionsContext);
  const [inputText, setInputText] = useState(section.label);

  const handleDeleteSection = () => {
    editSections(sections.filter(({ id }) => section.id !== id));
  };

  const handleEditSection = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedSections = sections.map((s) =>
      s.id === section.id ? { ...s, label: inputText } : s
    );

    editSections(updatedSections);
    onEdit(null);
  };

  return (
    <ListItemButton sx={{ p: "4px" }}>
      {editSectionId === section.id ? (
        <Box
          autoFocus
          component="form"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          onSubmit={handleEditSection}
        >
          <TextField
            size="small"
            value={inputText}
            variant="standard"
            onChange={(e) => setInputText(e.target.value)}
            disabled={isSpinning}
          />
          <Box>
            <IconButton type="submit" disabled={isSpinning}>
              <CheckIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                setInputText(section.label);
                onEdit(null);
              }}
              disabled={isSpinning}
            >
              <ClearIcon />
            </IconButton>
          </Box>
        </Box>
      ) : (
        <>
          <ListItemText primary={section.label} />
          <IconButton
            disabled={isSpinning}
            onClick={() => {
              setInputText(section.label);
              onEdit(section.id);
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton disabled={isSpinning} onClick={handleDeleteSection}>
            <DeleteIcon />
          </IconButton>
        </>
      )}
    </ListItemButton>
  );
};

export default SectionsListItem;
