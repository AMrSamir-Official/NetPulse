import { Box, Button, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#121212", // لون خلفية داكن
        color: "#ffffff", // لون النص
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Typography variant="h1" sx={{ fontSize: "5rem", color: "#f44336" }}>
        404
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/")}
        sx={{ marginBottom: "20px" }}
      >
        العودة إلى الصفحة الرئيسية
      </Button>
      <Typography variant="body1">
        We are working on this page now, see you soon
      </Typography>
      <Typography
        variant="body1"
        sx={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          fontSize: "1rem",
          color: "#bbb",
        }}
      >
        نحن نعمل على هذه الصفحة الآن، أراك قريبًا
      </Typography>
    </Box>
  );
};

export default NotFoundPage;
