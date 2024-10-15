import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import scrollToTop from "../hooks/scrollToTop";

const API_KEY = "AIzaSyAB9dG_zzrdvTcfVFlGbkZ_GQjPhqPE1yQ";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1db954",
    },
  },
});
const VideoPlayerPage = () => {
  scrollToTop();
  const { VideoURl } = useParams();
  const [videoInfo, setVideoInfo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const fetchVideoInfo = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos`,
          {
            params: {
              part: "snippet",
              id: VideoURl,
              key: API_KEY,
            },
          }
        );
        setVideoInfo(response.data.items[0]);
      } catch (error) {
        console.error("Error fetching video info:", error);
      }
    };

    fetchVideoInfo();
  }, [VideoURl]);

  useEffect(() => {
    const fetchRelatedVideos = async () => {
      if (videoInfo) {
        try {
          const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/search`,
            {
              params: {
                part: "snippet",
                q: videoInfo.snippet.channelTitle || videoInfo.snippet.title,
                type: "video",
                key: API_KEY,
                maxResults: 10,
              },
            }
          );
          setRelatedVideos(response.data.items);
        } catch (error) {
          console.error("Error fetching related videos:", error);
        }
      }
    };

    fetchRelatedVideos();
  }, [videoInfo]);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handlePlayRelatedVideo = (relatedVideoId) => {
    window.location.href = `/video/${relatedVideoId}`;
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${VideoURl}`}
              controls
              width="100%"
              height="500px"
            />
          </Grid>
          {videoInfo && (
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom>
                {videoInfo.snippet.title}
              </Typography>
            </Grid>
          )}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpenDialog}
            >
              شاهد فيديوهات مشابهة
            </Button>
          </Grid>
        </Grid>

        {/* Dialog for Related Videos */}
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          fullWidth
          maxWidth="md"
        >
          <DialogTitle>
            مقاطع فيديو مشابهة
            <IconButton
              aria-label="close"
              onClick={handleCloseDialog}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            <Grid container spacing={2}>
              {relatedVideos.map((video) => (
                <Grid item xs={12} sm={6} md={4} key={video.id.videoId}>
                  <Card>
                    <CardActionArea
                      onClick={() => handlePlayRelatedVideo(video.id.videoId)}
                    >
                      <CardMedia
                        component="img"
                        image={
                          video.snippet.thumbnails.high.url ||
                          "https://via.placeholder.com/300x200?text=No+Thumbnail"
                        }
                        alt={video.snippet.title}
                        height="140"
                      />
                      <CardContent>
                        <Typography variant="subtitle1" noWrap>
                          {video.snippet.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          noWrap
                        >
                          {video.snippet.channelTitle}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              إغلاق
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </ThemeProvider>
  );
};

export default VideoPlayerPage;
