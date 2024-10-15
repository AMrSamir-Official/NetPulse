import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  MenuItem,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { chanels } from "../Constant/chanels"; // Assuming this is static data; replace it if you're fetching from API

const ChannelsPage = () => {
  const [loading, setLoading] = useState(true);
  const [channelsData, setChannelsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [languageFilter, setLanguageFilter] = useState("all");

  useEffect(() => {
    // Assuming 'chanels' is coming from an API or async data source
    const fetchChannels = async () => {
      try {
        // Simulate data fetching here. Replace with actual API request
        // For example, if you use axios: const response = await axios.get("API_URL");
        setChannelsData(chanels); // Assuming 'chanels' is your data array
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchChannels(); // Fetch data immediately
  }, []);

  const filteredChannels = channelsData.filter((chanel) => {
    const matchesLanguage =
      languageFilter === "all" || chanel.Lang === languageFilter;
    return (
      matchesLanguage &&
      chanel.Name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <Box
      sx={{
        padding: 2,
        paddingTop: "100px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 3,
        backgroundColor: "#121212",
        color: "#393c44",
      }}
    >
      <Box sx={{ mb: 2, width: "100%" }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search channels..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{
            backgroundColor: "#393c44",
            borderRadius: "5px",
          }}
        />
      </Box>
      <Box sx={{ mb: 2, width: "100%" }}>
        <TextField
          select
          fullWidth
          variant="outlined"
          value={languageFilter}
          onChange={(e) => setLanguageFilter(e.target.value)}
          sx={{
            backgroundColor: "#393c44",
            borderRadius: "5px",
          }}
        >
          <MenuItem value="all">All Languages</MenuItem>
          {Array.from(new Set(chanels.map((chanel) => chanel.Lang))).map(
            (lang) => (
              <MenuItem key={lang} value={lang}>
                {lang}
              </MenuItem>
            )
          )}
        </TextField>
      </Box>

      {filteredChannels.map((chanel, index) => (
        <Card
          key={index}
          sx={{
            maxWidth: 345,
            position: "relative",
            borderRadius: 3,
            backgroundColor: "transparent",
            border: "2px solid white",
            color: "white",
          }}
        >
          {loading ? (
            <Skeleton
              variant="rectangular"
              width={345}
              height={180}
              sx={{ bgcolor: "grey.800" }}
            />
          ) : (
            <CardMedia
              component="img"
              image={chanel.BackGround}
              alt={chanel.Name}
              sx={{ height: 180, filter: "brightness(0.7)" }}
            />
          )}
          {loading ? (
            <Skeleton
              variant="circular"
              width={80}
              height={80}
              sx={{
                position: "absolute",
                top: 150,
                left: "50%",
                transform: "translateX(-50%)",
                bgcolor: "grey.800",
              }}
            />
          ) : (
            <CardMedia
              component="img"
              image={chanel.Img}
              alt={chanel.Name}
              sx={{
                height: 80,
                width: 80,
                borderRadius: "50%",
                position: "absolute",
                top: 150,
                left: "50%",
                transform: "translateX(-50%)",
                border: "3px solid white",
              }}
            />
          )}

          <CardContent sx={{ textAlign: "center", marginTop: 4 }}>
            {loading ? (
              <Skeleton
                width="60%"
                height={30}
                sx={{ bgcolor: "grey.800", margin: "0 auto" }}
              />
            ) : (
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                {chanel.Name}
              </Typography>
            )}
            {loading ? (
              <Skeleton
                width="80%"
                height={20}
                sx={{ bgcolor: "grey.800", margin: "0 auto" }}
              />
            ) : (
              <Typography variant="body2" color="textSecondary">
                {chanel.About}
              </Typography>
            )}
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            {loading ? (
              <Skeleton width="40%" height={30} sx={{ bgcolor: "grey.800" }} />
            ) : (
              chanel.Link && (
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to={`/playlists/${chanel.id}`}
                >
                  View Playlists
                </Button>
              )
            )}
            {loading ? (
              <Skeleton
                width="40%"
                height={30}
                sx={{ bgcolor: "grey.800", marginLeft: 2 }}
              />
            ) : (
              chanel.payBal && (
                <Button
                  variant="outlined"
                  color="secondary"
                  href={chanel.payBal}
                  target="_blank"
                  sx={{ marginLeft: 2 }}
                >
                  Support on PayPal
                </Button>
              )
            )}
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default ChannelsPage;
