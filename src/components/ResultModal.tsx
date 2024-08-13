import {
  Box,
  Divider,
  IconButton,
  Modal,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkIcon from "@mui/icons-material/Link";
import type { Section } from "../types/section";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 320,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type ResultModalProps = {
  open: boolean;
  onClose: () => void;
  result: Section;
};

const ResultModal: React.FC<ResultModalProps> = ({ open, onClose, result }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = (url: string) => {
    window.open(url, "_blank");
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 500);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <Box display="flex" alignItems="center" gap={2}>
          <Typography variant="h4" component="h2">
            Result:
          </Typography>
          <Box position="relative" display="inline-block">
            <IconButton
              size="small"
              onClick={() => handleCopy(result.label)}
              sx={{ position: "absolute", right: "-30px", top: 0 }}
            >
              <Tooltip
                title={copied ? "Copied!" : "Copy result"}
                placement="top"
              >
                <ContentCopyIcon fontSize="small" />
              </Tooltip>
            </IconButton>
            <Typography variant="h3" sx={{ color: result.color }}>
              {result.label}
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" component="h2">
            Share:
          </Typography>
          <IconButton onClick={() => handleCopy(window.location.href)}>
            <Tooltip title={copied ? "Copied!" : "Copy link"} placement="top">
              <LinkIcon />
            </Tooltip>
          </IconButton>
          <IconButton
            onClick={() =>
              handleShare(
                `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  window.location.href
                )}`
              )
            }
          >
            <Tooltip title="LinkedIn" placement="top">
              <LinkedInIcon />
            </Tooltip>
          </IconButton>
          <IconButton
            onClick={() =>
              handleShare(
                `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  window.location.href
                )}&quote=${encodeURIComponent(result.label)}`
              )
            }
          >
            <Tooltip title="Facebook" placement="top">
              <FacebookIcon />
            </Tooltip>
          </IconButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default ResultModal;
