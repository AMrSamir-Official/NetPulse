import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  FormControl,
  Grid,
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
const theme = createTheme({
  palette: {
    mode: "dark",
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

const PlaylistsPage = () => {
  const [playlists, setPlaylists] = useState([]);
  const [filteredPlaylists, setFilteredPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("date");
  const { channelId } = useParams(); // Get channelId from URL params
  const navigate = useNavigate();

  useEffect(() => {
    if (channelId) {
      const fetchPlaylists = async () => {
        try {
          const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/playlists`,
            {
              params: {
                part: "snippet,contentDetails",
                channelId: channelId,
                maxResults: 25,
                key: API_KEY,
              },
            }
          );
          const fetchedPlaylists = response.data.items.map((playlist) => ({
            id: playlist.id,
            title: playlist.snippet.title,
            thumbnail: playlist.snippet.thumbnails.high.url,
            itemCount: playlist.contentDetails.itemCount,
            publishedAt: new Date(playlist.snippet.publishedAt),
          }));
          setPlaylists(fetchedPlaylists);
          setFilteredPlaylists(fetchedPlaylists);
        } catch (error) {
          console.error("Error fetching playlists:", error);
          setError("Error fetching playlists");
        } finally {
          setLoading(false);
        }
      };
      scrollToTop();

      fetchPlaylists();
    }
  }, [channelId]);

  useEffect(() => {
    let filtered = playlists.filter((playlist) =>
      playlist.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortOrder === "a-z") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "z-a") {
      filtered.sort((a, b) => b.title.localeCompare(a.title));
    } else {
      filtered.sort((a, b) => b.publishedAt - a.publishedAt);
    }

    setFilteredPlaylists(filtered);
  }, [searchTerm, sortOrder, playlists]);

  if (loading)
    return (
      <ThemeProvider theme={theme}>
        <Container sx={{ py: 4 }}>
          <Grid container spacing={2}>
            {Array.from({ length: 6 }).map((_, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ backgroundColor: theme.palette.background.paper }}>
                  <Skeleton variant="rectangular" height={140} />
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
    <ThemeProvider theme={theme}>
      <Container sx={{ py: 4 }}>
        <Box sx={{ mb: 4 }}>
          <TextField
            fullWidth
            label="Search Playlists"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ mb: 2 }}
            InputProps={{
              style: {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.background.paper,
              },
            }}
            InputLabelProps={{
              style: {
                color: theme.palette.text.primary,
              },
            }}
          />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel sx={{ color: theme.palette.text.primary }}>
              Sort By
            </InputLabel>
            <Select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              label="Sort By"
              sx={{
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.primary,
              }}
            >
              <MenuItem value="date">Date</MenuItem>
              <MenuItem value="a-z">A-Z</MenuItem>
              <MenuItem value="z-a">Z-A</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Grid container spacing={2}>
          {filteredPlaylists.map((playlist) => (
            <Grid item xs={12} sm={6} md={4} key={playlist.id}>
              <Card
                onClick={() => navigate(`/playlist/${playlist.id}`)}
                sx={{
                  cursor: "pointer",
                  backgroundColor: theme.palette.background.paper,
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={playlist.thumbnail}
                  alt={playlist.title}
                />
                <CardContent>
                  <Typography variant="h6" color={theme.palette.text.primary}>
                    {playlist.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {`Number of Videos: ${playlist.itemCount}`}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default PlaylistsPage;
