import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

// Service data
const servicesData = [
  {
    title: "Free Tutorials",
    description:
      "Enjoy our free tutorials like millions of other internet users since 1999",
  },
  {
    title: "References",
    description:
      "Explore our selection of references covering all popular coding languages",
  },
  {
    title: "Create a Website",
    description:
      "Create your own website with ZeroWebSchool Spaces - no setup required",
  },
  {
    title: "Exercises",
    description: "Test your skills with different exercises",
  },
  {
    title: "Quizzes",
    description: "Test yourself with multiple choice questions",
  },
  { title: "Get Certified", description: "Document your knowledge" },
  {
    title: "Log in / Sign Up",
    description:
      "Create a free ZeroWebSchool Account to Improve Your Learning Experience",
  },
  {
    title: "Pathfinder & My Learning",
    description:
      "Track your learning progress at ZeroWebSchool and collect rewards",
  },
  {
    title: "Upgrade",
    description:
      "Become a PLUS user and unlock powerful features (ad-free, hosting, support,..)",
  },
  {
    title: "Where To Start",
    description: "Not sure where you want to start? Follow our guided path",
  },
  {
    title: "Code Editor (Try it)",
    description:
      "With our online code editor, you can edit code and view the result in your browser",
  },
  {
    title: "Videos",
    description:
      "Learn the basics of HTML in a fun and engaging video tutorial",
  },
  {
    title: "Templates",
    description:
      "We have created a bunch of responsive website templates you can use - for free!",
  },
  {
    title: "Web Hosting",
    description:
      "Host your own website, and share it to the world with ZeroWebSchool Spaces",
  },
  {
    title: "Create a Server",
    description:
      "Create your own server using Python, PHP, React.js, Node.js, Java, C#, etc.",
  },
  {
    title: "How To's",
    description:
      "Large collection of code snippets for HTML, CSS and JavaScript",
  },
  {
    title: "CSS Framework",
    description:
      "Build fast and responsive sites using our free W3.CSS framework",
  },
  {
    title: "Browser Statistics",
    description: "Read long term trends of browser usage",
  },
  { title: "Typing Speed", description: "Test your typing speed" },
  { title: "AWS Training", description: "Learn Amazon Web Services" },
  {
    title: "Color Picker",
    description:
      "Use our color picker to find different RGB, HEX and HSL colors",
  },
  {
    title: "Code Game",
    description: "ZeroWebSchool Coding Game! Help the lynx collect pine cones",
  },
  {
    title: "Set Goal",
    description:
      "Get personalized learning journey based on your current skills and goals",
  },
  {
    title: "Newsletter",
    description:
      "Join our newsletter and get access to exclusive content every month",
  },
  {
    title: "For Teachers",
    description:
      "Contact us about ZeroWebSchool Academy for educational institutions",
  },
  {
    title: "For Businesses",
    description: "Contact us about ZeroWebSchool Academy for your organization",
  },
  {
    title: "Contact Us",
    description:
      "About sales: sales@ZeroWebSchool.com, About errors: help@ZeroWebSchool.com",
  },
];

const filterServices = (searchTerm, data) => {
  return data.filter(
    (service) =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

const Services = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(servicesData);

  const handleFilterChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    setFilteredData(filterServices(term, servicesData));
  };

  return (
    <Box sx={{ bgcolor: "#121212", color: "#fff", p: 3 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" sx={{ color: "#fff4a3" }}>
          <b>All Our Services</b>
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <TextField
            id="filter-services-input"
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
              setFilteredData(servicesData);
            }}
            variant="contained"
            color="secondary"
            sx={{ bgcolor: "#ff4081" }}
          >
            Clear
          </Button>
        </Box>
        <Typography variant="body1" sx={{ mt: 2 }}>
          ZeroWebSchool offers a wide range of services and products for
          beginners and professionals, helping millions of people everyday to
          learn and master new skills.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {filteredData.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ bgcolor: "#1e1e1e", color: "#fff" }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2">{service.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 5, textAlign: "center", color: "#fff" }}>
        <Typography variant="body2">
          ZeroWebSchool is optimized for learning and training. Examples might
          be simplified to improve reading and learning. Tutorials, references,
          and examples are constantly reviewed to avoid errors, but we cannot
          warrant full correctness of all content. While using ZeroWebSchool,
          you agree to have read and accepted our terms of use, cookie and
          privacy policy.
        </Typography>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Copyright2024 by Refsnes Data. All Rights Reserved. ZeroWebSchool is
          Powered by W3.CSS.
        </Typography>
      </Box>
    </Box>
  );
};

export default Services;
