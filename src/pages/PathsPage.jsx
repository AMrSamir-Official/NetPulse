/* eslint-disable no-unused-vars */
import {
  StarBorder as StarBorderIcon,
  Star as StarIcon,
} from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { pathsData } from "./pathData"; // Import the paths data

const PathsPage = () => {
  const [search, setSearch] = useState("");
  const [selectedPath, setSelectedPath] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [favourites, setFavourites] = useState([]);
  const navigate = useNavigate();
  const theme = useTheme();

  const filteredPaths = pathsData.filter((path) =>
    path.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleOpenDialog = (path) => {
    setSelectedPath(path);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedPath(null);
  };

  const handleNavigate = (pathId) => {
    navigate(`/paths/${pathId}`);
    handleCloseDialog();
  };

  const handleToggleFavourite = (pathId) => {
    setFavourites((prev) =>
      prev.includes(pathId)
        ? prev.filter((id) => id !== pathId)
        : [...prev, pathId]
    );
  };

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
      <TextField
        fullWidth
        label="Search paths"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{
          mb: 2,
          backgroundColor: "#333333", // Dark input background
          input: { color: "#E0E0E0" }, // Light input text color
          "& .MuiInputLabel-root": { color: "#B0B0B0" }, // Light label color
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "#444444" }, // Dark border color
            "&:hover fieldset": { borderColor: "#E0E0E0" }, // Light border color on hover
            "&.Mui-focused fieldset": { borderColor: "#BB86FC" }, // Accent color when focused
          },
        }}
      />
      {filteredPaths.length === 0 ? (
        <Typography variant="h6" color="#B0B0B0">
          {" "}
          {/* Light text color */}
          No paths found
        </Typography>
      ) : (
        filteredPaths.map((path, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card
              sx={{
                mb: 2,
                backgroundColor: "#1E1E1E", // Dark card background
                color: "#E0E0E0", // Light card text color
                border: `1px solid #444444`, // Dark border color
                borderRadius: 2,
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {path.name.replace(/_/g, " ")}
                </Typography>
                <Typography variant="body2" color="#B0B0B0">
                  {path.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleOpenDialog(path)}
                  sx={{ mt: 2 }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))
      )}
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle sx={{ backgroundColor: "#1E1E1E", color: "#E0E0E0" }}>
          {" "}
          {/* Dark dialog header */}
          {selectedPath?.name.replace(/_/g, " ")}
        </DialogTitle>
        <DialogContent
          sx={{ backgroundColor: "#1E1E1E", color: "#E0E0E0" }} // Dark dialog content
        >
          <Typography variant="body1" color="#E0E0E0">
            Categories:
          </Typography>
          {selectedPath?.categories.map((category, index) => (
            <Typography key={index} variant="body2" color="#B0B0B0">
              {category.name.replace(/_/g, " ")}
            </Typography>
          ))}
        </DialogContent>
        <DialogActions
          sx={{ backgroundColor: "#1E1E1E", color: "#E0E0E0" }} // Dark dialog actions
        >
          <Button
            onClick={() => handleNavigate(selectedPath?.name)}
            color="primary"
          >
            Go to Path
          </Button>
          <IconButton
            onClick={() => handleToggleFavourite(selectedPath?.name)}
            color={
              favourites.includes(selectedPath?.name) ? "secondary" : "default"
            }
          >
            {favourites.includes(selectedPath?.name) ? (
              <StarIcon />
            ) : (
              <StarBorderIcon />
            )}
          </IconButton>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default PathsPage;
