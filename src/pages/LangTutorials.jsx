import {
  Box,
  Card,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

// Example tutorial data for each section
const tutorials = {
  "HTML Introduction": {
    title: "HTML Introduction",
    content:
      "HTML (HyperText Markup Language) is the standard language for creating webpages. It describes the structure of a webpage by using a variety of elements and tags. HTML elements represent headings, paragraphs, links, images, lists, and more. The HTML code is interpreted by web browsers to display a visual representation of the webpage to users.",
    examples:
      "<!DOCTYPE html><html><head><title>Title of the document</title></head><body>Content of the document......</body></html>",
  },
  "HTML Editors": {
    title: "HTML Editors",
    content:
      "To write HTML code, you can use a simple text editor like Notepad or advanced editors like Visual Studio Code, Sublime Text, etc.",
    examples:
      "<html><head><title>HTML Editors Example</title></head><body>Use any text editor...</body></html>",
  },
  "HTML Basic": {
    title: "HTML Basic",
    content:
      "HTML basic elements include headings, paragraphs, links, and images. These are used to define the structure and content of a webpage.",
    examples:
      '<h1>This is a heading</h1><p>This is a paragraph.</p><a href="example.com">This is a link</a>',
  },
  // Add more tutorials and content as needed
  "HTML Elements": {
    title: "HTML Elements",
    content:
      "HTML elements represent the structure of a document, including headings, paragraphs, links, lists, and more.",
    examples: "<h1>Heading 1</h1><p>Paragraph text here...</p>",
  },
  "HTML Attributes": {
    title: "HTML Attributes",
    content:
      "HTML elements can have attributes to provide additional information. Common attributes include id, class, and style.",
    examples: '<img src="image.jpg" alt="Image description">',
  },
  // Continue adding detailed content for every tutorial section
};

// Full list of sections and subsections
const sections = {
  "HTML HOME": [
    "HTML Introduction",
    "HTML Editors",
    "HTML Basic",
    "HTML Elements",
    "HTML Attributes",
    "HTML Headings",
    "HTML Paragraphs",
    "HTML Styles",
    "HTML Formatting",
    "HTML Quotations",
    "HTML Comments",
    "HTML Colors",
    "HTML CSS",
    "HTML Links",
    "HTML Images",
    "HTML Favicon",
    "HTML Page Title",
    "HTML Tables",
    "HTML Lists",
    "HTML Block & Inline",
    "HTML Div",
    "HTML Classes",
    "HTML Id",
    "HTML Iframes",
    "HTML JavaScript",
    "HTML File Paths",
    "HTML Head",
    "HTML Layout",
    "HTML Responsive",
    "HTML Computercode",
    "HTML Semantics",
    "HTML Style Guide",
    "HTML Entities",
    "HTML Symbols",
    "HTML Emojis",
    "HTML Charsets",
    "HTML URL Encode",
    "HTML vs. XHTML",
  ],
  "HTML Forms": [
    "HTML Forms",
    "HTML Form Attributes",
    "HTML Form Elements",
    "HTML Input Types",
    "HTML Input Attributes",
    "Input Form Attributes",
  ],
  "HTML Graphics": ["HTML Canvas", "HTML SVG"],
  "HTML Media": [
    "HTML Media",
    "HTML Video",
    "HTML Audio",
    "HTML Plug-ins",
    "HTML YouTube",
  ],
  "HTML APIs": [
    "HTML Geolocation",
    "HTML Drag/Drop",
    "HTML Web Storage",
    "HTML Web Workers",
    "HTML SSE",
  ],
  "HTML Examples": [
    "HTML Examples",
    "HTML Editor",
    "HTML Quiz",
    "HTML Exercises",
    "HTML Website",
    "HTML Interview Prep",
    "HTML Bootcamp",
    "HTML Certificate",
    "HTML Summary",
    "HTML Accessibility",
  ],
  "HTML References": [
    "HTML Tag List",
    "HTML Attributes",
    "HTML Global Attributes",
    "HTML Browser Support",
    "HTML Events",
    "HTML Colors",
    "HTML Canvas",
    "HTML Audio/Video",
    "HTML Doctypes",
    "HTML Character Sets",
    "HTML URL Encode",
    "HTML Lang Codes",
    "HTTP Messages",
    "HTTP Methods",
    "PX to EM Converter",
    "Keyboard Shortcuts",
  ],
};

const HTMLTutorialPage = () => {
  const [selectedTutorial, setSelectedTutorial] = useState("HTML Introduction");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredSections = {};
  for (const section in sections) {
    filteredSections[section] = sections[section].filter((item) =>
      item.toLowerCase().includes(searchTerm)
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ padding: "16px" }}>
        <Grid container spacing={2}>
          {/* Left-side Navigation */}
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                backgroundColor: "#333",
                borderRadius: "8px",
                padding: "16px",
              }}
            >
              <Typography variant="h6" color="textPrimary">
                HTML Tutorial
              </Typography>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                placeholder="Search..."
                onChange={handleSearchChange}
                InputProps={{
                  endAdornment: (
                    <Box
                      sx={{
                        position: "absolute",
                        right: "16px",
                        top: "50%",
                        transform: "translateY(-50%)",
                      }}
                    >
                      <Typography variant="caption" color="textSecondary">
                        🔍
                      </Typography>
                    </Box>
                  ),
                }}
                sx={{ marginBottom: "16px" }}
              />
              <List>
                {Object.keys(filteredSections).map((section) => (
                  <Box key={section} sx={{ marginBottom: "16px" }}>
                    <Typography variant="subtitle1" color="textPrimary">
                      {section}
                    </Typography>
                    <List>
                      {filteredSections[section].map((item) => (
                        <ListItem
                          button
                          key={item}
                          onClick={() => setSelectedTutorial(item)}
                        >
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                ))}
              </List>
            </Box>
          </Grid>

          {/* Right-side Content Display */}
          <Grid item xs={12} md={9}>
            <Box
              sx={{
                backgroundColor: "#444",
                borderRadius: "8px",
                padding: "16px",
              }}
            >
              {tutorials[selectedTutorial] ? (
                <>
                  <Typography variant="h4" color="textPrimary" gutterBottom>
                    {tutorials[selectedTutorial].title}
                  </Typography>
                  <Divider sx={{ margin: "16px 0" }} />
                  <Typography variant="body1" color="textSecondary" paragraph>
                    {tutorials[selectedTutorial].content}
                  </Typography>
                  <Typography variant="h6" color="textPrimary" gutterBottom>
                    Example:
                  </Typography>
                  <Card sx={{ backgroundColor: "#555", padding: "16px" }}>
                    <pre>{tutorials[selectedTutorial].examples}</pre>
                  </Card>
                </>
              ) : (
                <Typography color="textSecondary">
                  Select a tutorial to view its content.
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default HTMLTutorialPage;
