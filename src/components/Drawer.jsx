/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import programmingTools from "../Constant/programmingTools";

import { ExpandLess, ExpandMore } from "@mui/icons-material";
import BookIcon from "@mui/icons-material/Book";
import CodeIcon from "@mui/icons-material/Code";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import DescriptionIcon from "@mui/icons-material/Description";
import FeedbackIcon from "@mui/icons-material/Feedback";
import SettingsIcon from "@mui/icons-material/Settings";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

export default function MyDrawer({ state, toggleDrawer }) {
  const [openCourses, setOpenCourses] = useState(false);
  const [openTools, setOpenTools] = useState(false);
  const [showAllTools, setShowAllTools] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleCoursesClick = () => {
    setOpenCourses(!openCourses);
  };

  const handleToolsClick = () => {
    setOpenTools(!openTools);
  };

  const handleShowAllTools = () => {
    setShowAllTools(!showAllTools);
  };

  const handleNavigate = (path) => {
    navigate(path); // Navigate to the desired page
  };

  const handleToolClick = (link) => {
    window.open(link, "_blank"); // Open the tool's download link in a new tab
  };

  return (
    <>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            sx={{
              "& .MuiDrawer-paper": {
                bgcolor: "#0f0f0f", // Dark background for a learning platform
                color: "#ffffff", // White text for contrast
              },
            }}
          >
            <Box
              sx={{ width: 300 }}
              role="presentation"
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <List>
                {/* Courses Section */}
                <ListItemButton onClick={handleCoursesClick}>
                  <ListItemIcon sx={{ color: "#ffffff" }}>
                    <BookIcon />
                  </ListItemIcon>
                  <ListItemText primary="Courses" sx={{ color: "#ffffff" }} />
                  {openCourses ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openCourses} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton
                      sx={{ pl: 4 }}
                      selected={location.pathname === "/paths/Web_Development"}
                      onClick={() => handleNavigate("/paths/Web_Development")}
                    >
                      <ListItemText primary="Web Development" />
                    </ListItemButton>
                    <ListItemButton
                      sx={{ pl: 4 }}
                      selected={
                        location.pathname === "/paths/Mobile_App_Development"
                      }
                      onClick={() =>
                        handleNavigate("/paths/Mobile_App_Development")
                      }
                    >
                      <ListItemText primary="Mobile App Development" />
                    </ListItemButton>
                    <ListItemButton
                      sx={{ pl: 4 }}
                      selected={
                        location.pathname === "/paths/Desktop_App_Development"
                      }
                      onClick={() =>
                        handleNavigate("/paths/Desktop_App_Development")
                      }
                    >
                      <ListItemText primary="Desktop App Development" />
                    </ListItemButton>
                    <ListItemButton
                      sx={{ pl: 4 }}
                      selected={location.pathname === "/paths/Game_Development"}
                      onClick={() => handleNavigate("/paths/Game_Development")}
                    >
                      <ListItemText primary="Game Development" />
                    </ListItemButton>
                    <ListItemButton
                      sx={{ pl: 4 }}
                      selected={
                        location.pathname === "/paths/Database_Management"
                      }
                      onClick={() =>
                        handleNavigate("/paths/Database_Management")
                      }
                    >
                      <ListItemText primary="Database Management" />
                    </ListItemButton>
                  </List>
                </Collapse>

                {/* Videos Section */}
                <ListItemButton
                  selected={location.pathname === "/Channels"}
                  onClick={() => handleNavigate("/Channels")}
                >
                  <ListItemIcon sx={{ color: "#ffffff" }}>
                    <VideoLibraryIcon />
                  </ListItemIcon>
                  <ListItemText primary="Videos" sx={{ color: "#ffffff" }} />
                </ListItemButton>

                {/* Documentation Section */}
                <ListItemButton
                  selected={location.pathname === "/Docs"}
                  onClick={() => handleNavigate("/Docs")}
                >
                  <ListItemIcon sx={{ color: "#ffffff" }}>
                    <DescriptionIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Documentation"
                    sx={{ color: "#ffffff" }}
                  />
                </ListItemButton>

                {/* Tools Section */}
                <ListItemButton onClick={handleToolsClick}>
                  <ListItemIcon sx={{ color: "#ffffff" }}>
                    <CodeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Tools" sx={{ color: "#ffffff" }} />
                  {openTools ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openTools} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {programmingTools
                      .slice(0, showAllTools ? programmingTools.length : 4)
                      .map((tool) => (
                        <ListItemButton
                          key={tool.name}
                          sx={{ pl: 4 }}
                          onClick={() => handleToolClick(tool.downloadLink)} // Navigate to the tool's download link
                        >
                          <ListItemText primary={tool.name} />
                        </ListItemButton>
                      ))}
                    {programmingTools.length > 4 && (
                      <ListItemButton
                        sx={{ pl: 4 }}
                        onClick={handleShowAllTools}
                      >
                        <ListItemText
                          primary={showAllTools ? "Show Less" : "See All"}
                        />
                      </ListItemButton>
                    )}
                  </List>
                </Collapse>

                {/* Support Section */}
                <ListItemButton
                  selected={location.pathname === "/support"}
                  onClick={() => handleNavigate("/support")}
                >
                  <ListItemIcon sx={{ color: "#ffffff" }}>
                    <ContactSupportIcon />
                  </ListItemIcon>
                  <ListItemText primary="Support" sx={{ color: "#ffffff" }} />
                </ListItemButton>

                {/* Feedback Section */}
                <ListItemButton
                  selected={location.pathname === "/feedback"}
                  onClick={() => handleNavigate("/feedback")}
                >
                  <ListItemIcon sx={{ color: "#ffffff" }}>
                    <FeedbackIcon />
                  </ListItemIcon>
                  <ListItemText primary="Feedback" sx={{ color: "#ffffff" }} />
                </ListItemButton>

                {/* Settings Section */}
                <ListItemButton
                  selected={location.pathname === "/settings"}
                  onClick={() => handleNavigate("/settings")}
                >
                  <ListItemIcon sx={{ color: "#ffffff" }}>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Settings" sx={{ color: "#ffffff" }} />
                </ListItemButton>
              </List>
              <Divider sx={{ bgcolor: "#444" }} />
            </Box>
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
}
