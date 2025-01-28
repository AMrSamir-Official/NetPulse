import { Box, Grid } from "@mui/material";

const GameBoard = () => {
  return (
    <Grid container spacing={0} sx={{ width: "", height: "300px" }}>
      {[...Array(9)].map((_, idx) => (
        <Grid item xs={4} key={idx}>
          <Box
            sx={{
              backgroundColor: "#8FBC8F",
              width: "100px",
              height: "100px",
              border: "1px solid black",
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default GameBoard;
