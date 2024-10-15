import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { pathsData } from "./pathData"; // Import the paths data
import scrollToTop from "../hooks/scrollToTop";

const PathLanguagesPage = () => {
  const { pathId } = useParams();
  console.log("pathId", pathId);
  const path = pathsData.find((p) => p.name === pathId);
  const [languageDialogOpen, setLanguageDialogOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  // const theme = useTheme();

  const handleOpenLanguageDialog = (language) => {
    setSelectedLanguage(language);
    setLanguageDialogOpen(true);
  };

  const handleCloseLanguageDialog = () => {
    setLanguageDialogOpen(false);
    setSelectedLanguage(null);
  };
  scrollToTop();

  return (
    <Container
      sx={{
        backgroundColor: "#121212", // Dark background color
        color: "#E0E0E0", // Light text color
        minHeight: "100vh",
        py: 4,
        px: 2,
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        Languages in {path?.name.replace(/_/g, " ")}
      </Typography>
      {path?.categories
        .flatMap((category) => category.languages)
        .map((language, index) => (
          <Button
            key={index}
            onClick={() => handleOpenLanguageDialog(language)}
            sx={{
              mb: 1,
              backgroundColor: "#1E1E1E", // Dark button background
              color: "#E0E0E0", // Light button text color
              "&:hover": { backgroundColor: "#333333" }, // Darker button background on hover
            }}
          >
            {language.name}
          </Button>
        ))}
      <Dialog
        open={languageDialogOpen}
        onClose={handleCloseLanguageDialog}
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "#1E1E1E", // Dark dialog background
            color: "#E0E0E0", // Light dialog text color
          },
        }}
      >
        <DialogTitle>{selectedLanguage?.name}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Versions:</Typography>
          {selectedLanguage?.versions.map((version, index) => (
            <div key={index}>
              <Typography variant="body2">
                Version: {version.version} ({version.releaseYear})
              </Typography>
              <Typography variant="body2">
                Description: {version.description}
              </Typography>
              <Typography variant="body2">Libraries:</Typography>
              {version.libraries.map((lib, index) => (
                <Typography key={index} variant="body2">
                  - {lib.name} (v{lib.version}): {lib.description}
                </Typography>
              ))}
            </div>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseLanguageDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default PathLanguagesPage;
