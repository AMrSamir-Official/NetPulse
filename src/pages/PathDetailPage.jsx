import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { pathsData } from "./pathData"; // Import the paths data

const PathDetailPage = () => {
  const { path } = useParams();
  const myPath = pathsData.find((p) => p.name === path);
  const [languageDialogOpen, setLanguageDialogOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const theme = useTheme(); // Access the theme

  const handleOpenDialog = (language) => {
    setSelectedLanguage(language);
    setLanguageDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setLanguageDialogOpen(false);
    setSelectedLanguage(null);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredLanguages = myPath?.categories.flatMap((category) =>
    category.languages.filter((language) =>
      language.name.toLowerCase().includes(searchTerm)
    )
  );

  return (
    <Container
      sx={{
        backgroundColor: theme.palette.background.default, // Use theme color
        color: theme.palette.text.primary, // Use theme color
        minHeight: "100vh",
        py: 4,
        px: 2,
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        {myPath?.name.replace(/_/g, " ")}
      </Typography>

      <Box sx={{ mb: 4, display: "flex", alignItems: "center" }}>
        <TextField
          placeholder="Search Languages"
          variant="outlined"
          size="small"
          onChange={handleSearchChange}
          sx={{
            backgroundColor: theme.palette.background.paper, // Use theme color
            color: theme.palette.text.primary, // Use theme color
            "& .MuiInputBase-input": {
              color: theme.palette.text.primary, // Use theme color
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: theme.palette.text.primary, // Use theme color
              },
              "&:hover fieldset": {
                borderColor: theme.palette.text.secondary, // Use theme color
              },
            },
          }}
        />
        <IconButton
          sx={{
            ml: 1,
            color: theme.palette.text.primary, // Use theme color
          }}
        >
          <SearchIcon />
        </IconButton>
      </Box>

      {myPath?.categories.map((category, index) => (
        <Box key={index} sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            {category.name.replace(/_/g, " ")}
          </Typography>
          <Grid container spacing={2}>
            {filteredLanguages?.map((language, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Button
                  onClick={() => handleOpenDialog(language)}
                  variant="outlined"
                  fullWidth
                  sx={{
                    color: theme.palette.text.primary, // Use theme color
                    borderColor: theme.palette.text.primary, // Use theme color
                    "&:hover": {
                      borderColor: theme.palette.text.secondary, // Use theme color
                      backgroundColor: theme.palette.action.hover, // Use theme color
                    },
                  }}
                >
                  {language.name}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}

      <Button
        component={Link}
        to={`/paths/${path}/languages`}
        variant="contained"
        sx={{
          backgroundColor: theme.palette.background.paper, // Use theme color
          color: theme.palette.text.primary, // Use theme color
          "&:hover": {
            backgroundColor: theme.palette.action.hover, // Use theme color
          },
          mt: 4,
        }}
      >
        Explore Languages
      </Button>

      <Dialog
        open={languageDialogOpen}
        onClose={handleCloseDialog}
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.background.paper, // Use theme color
            color: theme.palette.text.primary, // Use theme color
            width: "80%",
            maxWidth: "600px",
          },
        }}
      >
        <DialogTitle
          sx={{ borderBottom: `1px solid ${theme.palette.divider}` }}
        >
          {selectedLanguage?.name}
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Versions:
          </Typography>
          {selectedLanguage?.versions.map((version, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Typography variant="body2">
                Version: {version.version} ({version.releaseYear})
              </Typography>
              <Typography variant="body2">
                Description: {version.description}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Libraries:
              </Typography>
              {version.libraries.map((lib, index) => (
                <Typography key={index} variant="body2">
                  - {lib.name} (v{lib.version}): {lib.description}
                </Typography>
              ))}
            </Box>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default PathDetailPage;
