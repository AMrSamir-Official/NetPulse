import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

// Import data
import programmingTools from "../Constant/programmingTools";

const ToolsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Extract unique categories from programmingTools data
  const categories = Array.from(
    new Set(programmingTools.flatMap((tool) => tool.categories))
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredTools =
    selectedCategory === "All"
      ? programmingTools
      : programmingTools.filter((tool) =>
          tool.categories.includes(selectedCategory)
        );

  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Typography variant="h4" gutterBottom color="text.primary">
        Programming Tools
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Button
          variant={selectedCategory === "All" ? "contained" : "outlined"}
          onClick={() => handleCategoryChange("All")}
          sx={{
            mr: 1,
            backgroundColor:
              selectedCategory === "All"
                ? theme.palette.primary.main
                : theme.palette.background.paper,
            color:
              selectedCategory === "All"
                ? theme.palette.primary.contrastText
                : theme.palette.text.primary,
            borderColor:
              selectedCategory === "All"
                ? "transparent"
                : theme.palette.divider,
          }}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "contained" : "outlined"}
            onClick={() => handleCategoryChange(category)}
            sx={{
              mr: 1,
              backgroundColor:
                selectedCategory === category
                  ? theme.palette.primary.main
                  : theme.palette.background.paper,
              color:
                selectedCategory === category
                  ? theme.palette.primary.contrastText
                  : theme.palette.text.primary,
              borderColor:
                selectedCategory === category
                  ? "transparent"
                  : theme.palette.divider,
            }}
          >
            {category}
          </Button>
        ))}
      </Box>
      <Grid container spacing={2}>
        {filteredTools.map((tool) => (
          <Grid item xs={12} sm={6} md={4} key={tool.name}>
            <Card
              sx={{
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.primary,
                border: `1px solid ${theme.palette.divider}`,
              }}
            >
              <CardContent>
                <Typography variant="h6" component="div">
                  {tool.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {tool.description}
                </Typography>
                <Box sx={{ mt: 1 }}>
                  {tool.categories.map((cat) => (
                    <Chip
                      key={cat}
                      label={cat}
                      sx={{ mr: 1, mb: 1 }}
                      color="primary"
                    />
                  ))}
                </Box>
                <Box sx={{ mt: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    Platforms: {tool.platforms.join(", ")}
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  href={tool.downloadLink}
                  target="_blank"
                  sx={{ mt: 2 }}
                >
                  Download
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ToolsPage;
