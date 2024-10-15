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
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { pathsData } from "./pathData"; // Import the paths data

const PathsPage = () => {
  const [search, setSearch] = useState("");
  const [selectedPath, setSelectedPath] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [favourites, setFavourites] = useState([]);
  const navigate = useNavigate();

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
    <Container>
      <TextField
        fullWidth
        label="Search paths"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 2 }}
      />
      {filteredPaths.map((path, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{path.name.replace(/_/g, " ")}</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleOpenDialog(path)}
            >
              View Details
            </Button>
          </CardContent>
        </Card>
      ))}
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>{selectedPath?.name.replace(/_/g, " ")}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Categories:</Typography>
          {selectedPath?.categories.map((category, index) => (
            <Typography key={index} variant="body2">
              {category.name.replace(/_/g, " ")}
            </Typography>
          ))}
        </DialogContent>
        <DialogActions>
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
