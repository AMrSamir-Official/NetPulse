/* eslint-disable no-unused-vars */
import { Autocomplete, Avatar, Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate
import { chanels } from "../Constant/chanels"; // Importing channels

// Sample data for tools and categories
const tools = [
  { name: "Courses", link: "/courses", type: "Category" },
  { name: "Videos", link: "/videos", type: "Category" },
  { name: "Documentation", link: "/docs", type: "Category" },
  { name: "Tools", link: "/tools", type: "Category" },
  { name: "Support", link: "/FAQ", type: "Category" },
  { name: "Feedback", link: "/feedback", type: "Category" },
  { name: "Settings", link: "/settings", type: "Category" },
];

// Combine channels and tools for autocomplete
const options = [...chanels, ...tools];

export default function ChannelAndToolAutocomplete() {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSelection = (option) => {
    setSelectedOption(option);

    // Navigate based on whether the option is a channel or a tool
    if (option.id) {
      // It's a channel, navigate to playlists with the channel id
      navigate(`/playlists/${option.id}`);
    } else if (option.link) {
      // It's a tool, navigate to the tool's link
      navigate(option.link);
    }
  };

  return (
    <Box sx={{ width: 300, margin: "auto" }}>
      <Autocomplete
        options={options}
        getOptionLabel={(option) => option.Name || option.name} // Handle both channel and tool naming
        onChange={(event, newValue) => {
          handleSelection(newValue); // Call the navigation handler
        }}
        renderOption={(props, option) => (
          <Box
            component="li"
            {...props}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Avatar
              src={option.Img || "https://via.placeholder.com/100"} // Fallback image for tools
              alt={option.Name || option.name}
              sx={{ mr: 2 }}
            />
            {option.Name || option.name}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Channels/Tools"
            variant="outlined"
          />
        )}
      />
    </Box>
  );
}
