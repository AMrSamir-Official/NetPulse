/* eslint-disable react/prop-types */
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { IconButton, Snackbar, Tooltip } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import codeExamples from "../Constant/langs";

const modifiedDarkStyle = {
  ...dark,
  hljs: {
    ...dark.hljs,
    background: "transparent", // Make the background transparent
  },
  "hljs-keyword": {
    ...dark["hljs-keyword"],
    color: "#ff79c6",
  },
  "hljs-string": {
    ...dark["hljs-string"],
    color: "#50fa7b",
  },
  "hljs-comment": {
    ...dark["hljs-comment"],
    color: "#6272a4",
  },
  "hljs-function": {
    ...dark["hljs-function"],
    color: "#bd93f9",
  },
};

const LangSection = ({ Lang }) => {
  const codeExample = codeExamples[Lang];
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExample || "");
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className="code-display" style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>
          {Lang ? `${Lang} Code Example` : "Code Example"}
        </h2>
        <Tooltip title="نسخ إلى الحافظة">
          <IconButton onClick={handleCopy} style={styles.iconButton}>
            <ContentCopyIcon />
          </IconButton>
        </Tooltip>
      </div>

      {codeExample ? (
        <SyntaxHighlighter
          language={Lang ? Lang.toLowerCase() : "javascript"}
          style={modifiedDarkStyle}
          customStyle={styles.codeBlock}
        >
          {codeExample}
        </SyntaxHighlighter>
      ) : (
        <p style={styles.noExample}>لا توجد أمثلة كود متاحة لهذه اللغة.</p>
      )}
      <Link to={`/try/${Lang}`} style={styles.link} variant="body1">
        Try {Lang}
      </Link>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="تم نسخ الكود إلى الحافظة!"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      />
    </div>
  );
};

const styles = {
  container: {
    width: "100%", // Full width for responsiveness
    maxWidth: "600px", // Optional: Limit maximum width for larger screens
    margin: "auto",
    marginBottom: "20px",
    backgroundColor: "rgba(40, 44, 52, 0.8)", // Slightly transparent background
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column", // Column direction for stacking elements
    alignItems: "flex-start", // Align items to the left
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%", // Full width for header
  },
  title: {
    fontSize: "24px",
    margin: "0",
    color: "#e0e0e0",
  },
  iconButton: {
    color: "#ffffff",
    "&:hover": {
      color: "#ff4081",
    },
  },
  codeBlock: {
    padding: "10px",
    borderRadius: "4px",
    width: "100%", // Full width for the code block
    overflow: "auto", // Allow scrolling for overflow content
  },
  noExample: {
    color: "#cccccc",
  },
};

export default LangSection;
