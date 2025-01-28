import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const tutorialsData = {
  "Data Analytics": [
    "Learn AI Tutorial",
    "Learn Generative AI Tutorial",
    "Learn ChatGPT-3.5 Tutorial",
    "Learn ChatGPT-4 Tutorial",
    "Learn Google Bard Tutorial",
    "Learn Machine Learning Tutorial",
    "Learn DSA Tutorial",
    "Learn Data Science Tutorial",
    "Learn NumPy Tutorial",
    "Learn Pandas Tutorial",
    "Learn SciPy Tutorial",
    "Learn Matplotlib Tutorial",
    "Learn Statistics Tutorial",
    "Learn Excel Tutorial",
    "Learn Google Sheets Tutorial",
  ],
  JavaScript: [
    "Learn JavaScript Tutorial Reference",
    "Learn React Tutorial",
    "Learn jQuery Tutorial Reference",
    "Learn Vue Tutorial Reference",
    "Learn AngularJS Tutorial Reference",
    "Learn JSON Tutorial Reference",
    "Learn AJAX Tutorial",
    "Learn AppML Tutorial Reference",
    "Learn W3.JS Tutorial Reference",
  ],
  Backend: [
    "Learn Python Tutorial Reference",
    "Learn SQL Tutorial Reference",
    "Learn MySQL Tutorial Reference",
    "Learn PHP Tutorial Reference",
    "Learn Java Tutorial Reference",
    "Learn C Tutorial Reference",
    "Learn C++ Tutorial Reference",
    "Learn C# Tutorial",
    "Learn R Tutorial",
    "Learn Kotlin Tutorial",
    "Learn Go Tutorial",
    "Learn Django Tutorial Reference",
    "Learn PostgreSQL Tutorial",
    "Learn TypeScript Tutorial",
    "Learn ASP Tutorial Reference",
    "Learn Node.js Tutorial Reference",
    "Learn Raspberry Pi Tutorial",
    "Learn Git Tutorial",
    "Learn MongoDB Tutorial",
    "Learn AWS Cloud Tutorial",
    "Learn XML Tutorial Reference",
  ],
  "Web Building": [
    "Create a Website HOT!",
    "Create a Server NEW",
    "Where To Start",
    "Web Templates",
    "Web Statistics",
    "Web Certificates",
    "Web Development",
    "Code Editor",
    "Test Your Typing Speed",
    "Play a Code Game",
    "Cyber Security",
    "Accessibility",
    "Join our Newsletter",
  ],
};

const filterTutorials = (searchTerm, data) => {
  const filtered = {};
  Object.keys(data).forEach((category) => {
    filtered[category] = data[category].filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  return filtered;
};

const Tutorials = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(tutorialsData);

  const handleFilterChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    setFilteredData(filterTutorials(term, tutorialsData));
  };

  return (
    <Box sx={{ bgcolor: "#121212", color: "#fff", p: 3 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" sx={{ color: "#fff4a3" }}>
          <b>Tutorials</b>
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <TextField
            id="filter-tutorials-input"
            value={searchTerm}
            onChange={handleFilterChange}
            variant="outlined"
            placeholder="Filter..."
            sx={{ flex: 1, mr: 2, bgcolor: "#333", color: "#fff" }}
            InputProps={{
              style: { color: "#fff" },
            }}
          />
          <Button
            onClick={() => {
              setSearchTerm("");
              setFilteredData(tutorialsData);
            }}
            variant="contained"
            color="secondary"
            sx={{ bgcolor: "#ff4081" }}
          >
            Clear
          </Button>
        </Box>
      </Box>

      {Object.keys(filteredData).map((category) => (
        <Box key={category} sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            <b>{category}</b>
          </Typography>
          <TableContainer
            component={Paper}
            sx={{ maxWidth: "100%", bgcolor: "#1e1e1e", color: "#fff" }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: "#fff" }}>Tutorials</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData[category].map((tutorial, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <a
                        href="#"
                        style={{ color: "#ff4081", textDecoration: "none" }}
                      >
                        {tutorial}
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ))}

      <Box sx={{ mt: 5, textAlign: "center", color: "#fff" }}>
        <Typography variant="body2">
          Net Pulse is optimized for learning and training. Examples might be
          simplified to improve reading and learning. Tutorials, references, and
          examples are constantly reviewed to avoid errors, but we cannot
          warrant full correctness of all content. While using ZeroWebSchool,
          you agree to have read and accepted our terms of use, cookie and
          privacy policy.
        </Typography>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Copyright2024 by Refsnes Data. All Rights Reserved. Net Pulse is
          Powered by amrsamir.vercel.app.
        </Typography>
      </Box>
    </Box>
  );
};

export default Tutorials;
