import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Skeleton,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import scrollToTop from "../hooks/scrollToTop";

// Define a dark theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1db954",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
    },
  },
});

const API_KEY = "AIzaSyAB9dG_zzrdvTcfVFlGbkZ_GQjPhqPE1yQ";
const defaultThumbnail =
  "https://via.placeholder.com/300x200?text=No+Thumbnail";

const PlaylistVideosPage = () => {
  const { playlistId } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
    const fetchVideos = async () => {
      let allVideos = [];
      let nextPageToken = null;

      try {
        do {
          const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/playlistItems`,
            {
              params: {
                part: "snippet",
                playlistId: playlistId,
                maxResults: 25,
                pageToken: nextPageToken,
                key: API_KEY,
              },
            }
          );

          const fetchedVideos = response.data.items.map((video) => {
            const thumbnail =
              video.snippet.thumbnails?.high?.url || defaultThumbnail;
            return {
              id: video.snippet.resourceId.videoId,
              title: video.snippet.title,
              thumbnail: thumbnail,
              description:
                video.snippet.description || "No description available",
              publishedAt: video.snippet.publishedAt,
              videoUrl: `https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`,
            };
          });

          allVideos = [...allVideos, ...fetchedVideos];
          nextPageToken = response.data.nextPageToken;
        } while (nextPageToken);

        setVideos(allVideos);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setError("Error fetching videos");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [playlistId]);
  scrollToTop();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (event) => {
    setSortOrder(event.target.value);
  };

  const filteredVideos = videos
    .filter((video) =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "title-asc") {
        return a.title.localeCompare(b.title);
      } else if (sortOrder === "title-desc") {
        return b.title.localeCompare(a.title);
      } else if (sortOrder === "newest") {
        return new Date(b.publishedAt) - new Date(a.publishedAt);
      } else if (sortOrder === "oldest") {
        return new Date(a.publishedAt) - new Date(b.publishedAt);
      }
      return 0; // default order
    });

  const handleVideoClick = (videoUrl) => {
    // Extract video ID from URL
    const videoId = videoUrl.split("v=")[1];
    navigate(`/video/${videoId}`); // Navigate to the new route
  };

  if (loading)
    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container>
          <Grid container spacing={2}>
            {Array.from({ length: 6 }).map((_, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{ backgroundColor: darkTheme.palette.background.paper }}
                >
                  <Skeleton variant="rectangular" height={200} />
                  <CardContent>
                    <Skeleton variant="text" width="80%" />
                    <Skeleton variant="text" width="60%" />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </ThemeProvider>
    );

  if (error) return <Typography color="error">Error: {error}</Typography>;

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <FormControl fullWidth margin="normal">
          <TextField
            label="Search Videos"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearch}
            fullWidth
            InputProps={{
              style: {
                color: darkTheme.palette.text.primary,
                backgroundColor: darkTheme.palette.background.paper,
              },
            }}
            InputLabelProps={{
              style: {
                color: darkTheme.palette.text.primary,
              },
            }}
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel
            id="sort-label"
            sx={{ color: darkTheme.palette.text.primary }}
          >
            Sort By
          </InputLabel>
          <Select
            labelId="sort-label"
            value={sortOrder}
            onChange={handleSort}
            variant="outlined"
            fullWidth
            sx={{
              backgroundColor: darkTheme.palette.background.paper,
              color: darkTheme.palette.text.primary,
            }}
          >
            <MenuItem value="default">Default</MenuItem>
            <MenuItem value="title-asc">Title: A-Z</MenuItem>
            <MenuItem value="title-desc">Title: Z-A</MenuItem>
            <MenuItem value="newest">Newest First</MenuItem>
            <MenuItem value="oldest">Oldest First</MenuItem>
          </Select>
        </FormControl>

        <Grid container spacing={3}>
          {filteredVideos.map((video) => (
            <Grid item xs={12} sm={6} md={4} key={video.id}>
              <CardActionArea onClick={() => handleVideoClick(video.videoUrl)}>
                <Card
                  sx={{
                    maxWidth: 345,
                    backgroundColor: darkTheme.palette.background.paper,
                    position: "relative",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={video.thumbnail}
                    alt={video.title}
                  />
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      color: darkTheme.palette.primary.main,
                      zIndex: 1,
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleVideoClick(video.videoUrl);
                    }}
                  >
                    <PlayArrowIcon sx={{ fontSize: 50 }} />
                  </IconButton>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      color={darkTheme.palette.text.primary}
                    >
                      {video.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Published:{" "}
                      {new Date(video.publishedAt).toLocaleDateString()}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mt={1}>
                      {video.description.length > 100
                        ? `${video.description.slice(0, 100)}...`
                        : video.description}
                    </Typography>
                  </CardContent>
                </Card>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default PlaylistVideosPage;
