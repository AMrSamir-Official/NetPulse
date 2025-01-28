import {
  Box,
  Button,
  Checkbox,
  Collapse,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1e1f26]">
      {/* Main Container */}
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-[#262831] rounded-lg overflow-hidden shadow-lg">
        {/* Image Section */}
        <div
          className="w-full md:w-1/2 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://frontends.udemycdn.com/components/auth/desktop-illustration-step-1-x1.webp')",
          }}
        ></div>

        {/* Form Section */}
        <Box
          className="w-full md:w-1/2 p-8 flex flex-col gap-4"
          sx={{
            color: "#e0e0e0",
          }}
        >
          {/* Title */}
          <Typography
            variant="h5"
            className="text-white text-center font-bold mb-4"
          >
            {isSignUp
              ? "Sign Up and Start Learning"
              : "Sign In to Your Account"}
          </Typography>

          {/* Toggle Button */}
          <div className="flex justify-center mb-4">
            <Button
              variant="text"
              onClick={toggleForm}
              sx={{ color: "#5a99f6", textTransform: "none" }}
            >
              {isSignUp
                ? "Already have an account? Log In"
                : "Don't have an account? Sign Up"}
            </Button>
          </div>

          {/* Form */}
          <form>
            {/* Full Name (Sign Up only) */}
            <Collapse in={isSignUp}>
              <TextField
                label="Full Name"
                fullWidth
                variant="outlined"
                InputLabelProps={{ style: { color: "#aaa" } }}
                inputProps={{ style: { color: "#e0e0e0" } }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#444" },
                    "&:hover fieldset": { borderColor: "#5a99f6" },
                    "&.Mui-focused fieldset": { borderColor: "#5a99f6" },
                  },
                }}
                margin="normal"
              />
            </Collapse>

            {/* Email */}
            <TextField
              label="Email"
              fullWidth
              variant="outlined"
              InputLabelProps={{ style: { color: "#aaa" } }}
              inputProps={{ style: { color: "#e0e0e0" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#444" },
                  "&:hover fieldset": { borderColor: "#5a99f6" },
                  "&.Mui-focused fieldset": { borderColor: "#5a99f6" },
                },
              }}
              margin="normal"
            />

            {/* Password */}
            <TextField
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              InputLabelProps={{ style: { color: "#aaa" } }}
              inputProps={{ style: { color: "#e0e0e0" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#444" },
                  "&:hover fieldset": { borderColor: "#5a99f6" },
                  "&.Mui-focused fieldset": { borderColor: "#5a99f6" },
                },
              }}
              margin="normal"
            />

            {/* Checkbox (For Sign Up) */}
            <Collapse in={isSignUp}>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "#aaa",
                      "&.Mui-checked": { color: "#5a99f6" },
                    }}
                  />
                }
                label={
                  <Typography className="text-gray-400 text-sm">
                    Send me special offers, personalized recommendations, and
                    learning tips.
                  </Typography>
                }
              />
            </Collapse>

            {/* Submit Button */}
            <Button
              variant="contained"
              fullWidth
              className="py-3 rounded-lg capitalize"
              sx={{
                backgroundColor: "#5a99f6",
                "&:hover": { backgroundColor: "#4a87e2" },
                textTransform: "none",
              }}
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>
          </form>

          {/* Footer */}
          <Typography className="text-gray-400 text-center text-sm mt-4">
            {isSignUp
              ? "By signing up, you agree to our Terms of Use and Privacy Policy."
              : "Forgot your password?"}
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default AuthPage;
