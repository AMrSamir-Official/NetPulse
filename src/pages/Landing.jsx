/* eslint-disable react/no-unescaped-entities */
import { Box, Container, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SearchForm from "../components/Search";
import TrendingCarousel from "../components/TrendingCarouse";
import SwipeSectionPage from "./CarouselPage";
const theme = createTheme({
  palette: {
    mode: "dark",

    text: {
      primary: "#e0e0e0",
      secondary: "#b0b0b0",
    },
  },
});

function LandingPage() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        className="landing"
        sx={{
          display: "flex",

          flexDirection: "column",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "text.primary",
        }}
      >
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            How to{" "}
            <span
              style={{
                background: "#05a5d7",
                color: "white",
                padding: "7px 9px",
              }}
            >
              Learn
            </span>
          </Typography>
          <Typography variant="h5" component="h2" paragraph>
            With the ZeroWebSchool Ultimate free learning.
          </Typography>
          <SearchForm />
          <Typography variant="h6" component="h3" sx={{ marginTop: "20px" }}>
            {/* <a
              href="where_to_start.asp"
              style={{ color: "#90caf9", textDecoration: "none" }}
            >
              Not Sure Where To Begin?
            </a> */}
          </Typography>
        </Container>
      </Box>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#282a35"
          fillOpacity="1"
          d="M0,256L48,245.3C96,235,192,213,288,218.7C384,224,480,256,576,256C672,256,768,224,864,229.3C960,235,1056,277,1152,261.3C1248,245,1344,171,1392,133.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <Container
        sx={{
          padding: "20px",
          minHeight: "100vh", // Minimum height for full view
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
        }}
      >
        <SwipeSectionPage />
      </Container>
      <TrendingCarousel />
    </ThemeProvider>
  );
}

export default LandingPage;
