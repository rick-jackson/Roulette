import { useContext, useState } from "react";

import { SectionsContext } from "../../SectionsContext";
import SectionsListItem from "../SectionsListItem";
import { List } from "@mui/material";

const Sections: React.FC = () => {
  const { sections } = useContext(SectionsContext);
  const [editSectionId, setEditSectionId] = useState<number | null>(null);

  const handleEditSection = (id: number | null) => {
    setEditSectionId(id);
  };

  return (
    <List
      sx={{
        height: { xs: "200px", md: "400px", lg: "700px" },
        overflow: "auto",
      }}
    >
      {sections.map((section) => (
        <SectionsListItem
          section={section}
          key={section.id}
          onEdit={handleEditSection}
          editSectionId={editSectionId}
        />
      ))}
    </List>
  );
};

export default Sections;
