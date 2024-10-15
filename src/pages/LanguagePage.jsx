import {
  Button,
  Card,
  CardContent,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { programmingFields } from "./data";

const LanguagePage = () => {
  const { field } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const fieldData = programmingFields.find((p) => p.field === field);

  const handleClickOpen = (category) => {
    setSelectedCategory(category);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
    setSelectedCategory(null);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {field}
      </Typography>
      <Grid container spacing={2}>
        {fieldData?.categories.map((category) => (
          <Grid item xs={12} sm={6} md={4} key={category.name}>
            <Card>
              <CardContent>
                <Typography variant="h6">{category.name}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleClickOpen(category)}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>{selectedCategory?.name}</DialogTitle>
        <DialogContent>
          <Typography paragraph>
            {`Here is a brief description about ${selectedCategory?.name}. This section provides an overview of what you can learn in this category. It includes various subcategories and tools that are covered under this field.`}
          </Typography>
          <Typography>{/* Add more description if needed */}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Link
            to={`/languages/${selectedCategory?.name}`}
            style={{ textDecoration: "none" }}
          >
            <Button variant="contained" color="primary">
              Enter Category
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default LanguagePage;
