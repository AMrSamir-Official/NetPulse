import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import coursesData from "../Constant/coursesData"; // Adjust the path as needed
import scrollToTop from "../hooks/scrollToTop";

const CoursesPage = () => {
  const theme = useTheme(); // Access the theme
  scrollToTop();

  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [selectedCost, setSelectedCost] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleCostChange = (event) => {
    setSelectedCost(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleDialogOpen = (course) => {
    setSelectedCourse(course);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setSelectedCourse(null);
  };

  const handleConfirmClick = () => {
    if (selectedCourse) {
      // Open the course link in a new tab
      window.open(selectedCourse.link, "_blank");
    }
    handleDialogClose(); // Close the dialog
  };

  const filteredCourses = coursesData.filter((course) => {
    return (
      (selectedLanguage === "All" || course.language === selectedLanguage) &&
      (selectedCost === "All" || course.cost === selectedCost) &&
      (selectedCategory === "All" || course.category === selectedCategory)
    );
  });

  return (
    <Container
      sx={{
        backgroundColor: "#121212", // Dark background
        color: "white", // White text
        minHeight: "100vh",
        py: 4,
        px: 2,
      }}
    >
      <Typography variant="h4" sx={{ mb: 4 }}>
        Available Courses
      </Typography>

      <Box sx={{ mb: 4, display: "flex", gap: 2 }}>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="language-select-label">Language</InputLabel>
          <Select
            labelId="language-select-label"
            value={selectedLanguage}
            onChange={handleLanguageChange}
            sx={{
              backgroundColor: "#1e1e1e", // Dark input background
              color: "white", // White input text
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white", // White border
                },
                "&:hover fieldset": {
                  borderColor: theme.palette.primary.main,
                },
              },
            }}
          >
            <MenuItem value="All">All Languages</MenuItem>
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="Arabic">Arabic</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="cost-select-label">Cost</InputLabel>
          <Select
            labelId="cost-select-label"
            value={selectedCost}
            onChange={handleCostChange}
            sx={{
              backgroundColor: "#1e1e1e", // Dark input background
              color: "white", // White input text
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white", // White border
                },
                "&:hover fieldset": {
                  borderColor: theme.palette.primary.main,
                },
              },
            }}
          >
            <MenuItem value="All">All Costs</MenuItem>
            <MenuItem value="Free">Free</MenuItem>
            <MenuItem value="Paid">Paid</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            value={selectedCategory}
            onChange={handleCategoryChange}
            sx={{
              backgroundColor: "#1e1e1e", // Dark input background
              color: "white", // White input text
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white", // White border
                },
                "&:hover fieldset": {
                  borderColor: theme.palette.primary.main,
                },
              },
            }}
          >
            <MenuItem value="All">All Categories</MenuItem>
            <MenuItem value="Web Development">Web Development</MenuItem>
            <MenuItem value="Mobile App Development">
              Mobile App Development
            </MenuItem>
            <MenuItem value="Desktop App Development">
              Desktop App Development
            </MenuItem>
            <MenuItem value="Game Development">Game Development</MenuItem>
            <MenuItem value="Database Management">Database Management</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={3}>
        {filteredCourses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card variant="outlined" sx={{ color: "white" }}>
              <Box sx={{ p: 2 }}>
                <div className="flex justify-between items-center">
                  <Avatar src={course.instructorAvatar} />
                  <AvatarGroup max={4}>
                    <Avatar src="/static/images/avatar/2.jpg" />
                    <Avatar src="/static/images/avatar/3.jpg" />
                    <Avatar src="/static/images/avatar/4.jpg" />
                    <Avatar>+4K</Avatar>
                  </AvatarGroup>
                </div>
                <CardContent>
                  <Typography variant="h6">{course.title}</Typography>
                  <Typography variant="body2" color="gray">
                    {course.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton color="inherit">
                    <FavoriteBorder />
                  </IconButton>
                  <Button
                    variant="outlined"
                    sx={{ borderColor: "gray", color: "white" }}
                    onClick={() => handleDialogOpen(course)}
                  >
                    View
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => handleDialogOpen(course)}
                  >
                    Enroll Now
                  </Button>
                </CardActions>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Dialog */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle sx={{ color: theme.palette.text.primary }}>
          {selectedCourse?.title}
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: "#1e1e1e", color: "white" }}>
          <Typography variant="body1">
            <strong>Description:</strong> {selectedCourse?.description}
          </Typography>
          <Typography variant="body1">
            <strong>Instructor:</strong> {selectedCourse?.instructor}
          </Typography>
          <Typography variant="body1">
            <strong>Language:</strong> {selectedCourse?.language}
          </Typography>
          <Typography variant="body1">
            <strong>Cost:</strong> {selectedCourse?.cost}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmClick} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default CoursesPage;
