import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import DOMPurify from "dompurify";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import codeExamples from "../Constant/langs";

const TryCodePage = () => {
  const { lang } = useParams(); // Get the language from the URL
  const [userHTML, setUserHTML] = useState(""); // State for HTML code
  const [userCSS, setUserCSS] = useState(""); // State for CSS code
  const [userPHP, setUserPHP] = useState(""); // State for PHP code
  const [output, setOutput] = useState("");

  useEffect(() => {
    // Load example code for the selected language
    const code = codeExamples[lang];

    // Set default code examples based on the language
    if (code) {
      if (lang === "html") {
        setUserHTML(
          code.html || "<h1>Hello World</h1><p>This is a paragraph.</p>"
        );
      } else if (lang === "css") {
        setUserCSS(
          code.css || "body { background-color: #282c34; color: #ffffff; }"
        );
      } else if (lang === "php") {
        setUserPHP(code.php || `<?php echo "Hello, World!"; ?>`);
      }
    }
  }, [lang]);

  const handleRunCode = () => {
    // Sanitize HTML and CSS input to avoid XSS
    const sanitizedHTML = DOMPurify.sanitize(userHTML);
    const sanitizedCSS = DOMPurify.sanitize(userCSS);
    // const sanitizedPHP = DOMPurify.sanitize(userPHP); // Sanitize PHP if used for display

    // Create the full HTML document structure
    let fullSource = `
      <html>
        <head>
          <style>${sanitizedCSS}</style>
        </head>
        <body>
          ${sanitizedHTML}
        </body>
      </html>
    `;

    // If PHP is being processed, note that we cannot run PHP in the browser
    if (lang === "php") {
      // Here, you would normally need a backend to run PHP
      fullSource = `<html><body><h1>PHP Code Execution Not Supported</h1></body></html>`;
    }

    // Update the output state to show the generated HTML
    setOutput(fullSource);
  };

  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "#121212", // Dark background
        color: "#ffffff", // White text
        minHeight: "100vh",
      }}
    >
      {/* Page Title */}
      <Typography variant="h4" gutterBottom>
        Try {lang} Code
      </Typography>

      {/* HTML Input Field */}
      {lang === "html" && (
        <TextField
          label={`Write your ${lang} HTML code here`}
          multiline
          rows={10}
          variant="outlined"
          fullWidth
          value={userHTML}
          onChange={(e) => setUserHTML(e.target.value)}
          sx={{
            marginBottom: "20px",
            backgroundColor: "#1e1e1e", // Darker input field
            borderRadius: "5px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#444444", // Input border color
              },
              "&:hover fieldset": {
                borderColor: "#ffffff", // Border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "#ffffff", // Border color on focus
              },
            },
            "& .MuiInputBase-input": {
              color: "#ffffff", // Input text color
            },
          }}
        />
      )}

      {/* CSS Input Field */}
      {lang === "css" && (
        <TextField
          label={`Write your ${lang} CSS code here`}
          multiline
          rows={5}
          variant="outlined"
          fullWidth
          value={userCSS}
          onChange={(e) => setUserCSS(e.target.value)}
          sx={{
            marginBottom: "20px",
            backgroundColor: "#1e1e1e", // Darker input field
            borderRadius: "5px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#444444", // Input border color
              },
              "&:hover fieldset": {
                borderColor: "#ffffff", // Border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "#ffffff", // Border color on focus
              },
            },
            "& .MuiInputBase-input": {
              color: "#ffffff", // Input text color
            },
          }}
        />
      )}

      {/* PHP Input Field */}
      {lang === "php" && (
        <TextField
          label={`Write your ${lang} PHP code here`}
          multiline
          rows={5}
          variant="outlined"
          fullWidth
          value={userPHP}
          onChange={(e) => setUserPHP(e.target.value)}
          sx={{
            marginBottom: "20px",
            backgroundColor: "#1e1e1e", // Darker input field
            borderRadius: "5px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#444444", // Input border color
              },
              "&:hover fieldset": {
                borderColor: "#ffffff", // Border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "#ffffff", // Border color on focus
              },
            },
            "& .MuiInputBase-input": {
              color: "#ffffff", // Input text color
            },
          }}
        />
      )}

      {/* Run Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleRunCode}
        sx={{ marginBottom: "20px" }}
      >
        Run Code
      </Button>

      {/* Output Section */}
      <Typography variant="h6">Output:</Typography>
      <Paper
        elevation={3}
        sx={{
          padding: "10px",
          minHeight: "200px",
          backgroundColor: "#1e1e1e", // Darker output area
          color: "#ffffff",
        }}
      >
        {/* Output displayed here */}
        <iframe
          title="Output"
          srcDoc={output}
          style={{
            width: "100%",
            height: "200px",
            border: "none",
            backgroundColor: "#1e1e1e",
          }}
        />
      </Paper>
    </Box>
  );
};

export default TryCodePage;
