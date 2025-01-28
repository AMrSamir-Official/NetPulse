import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CountriesSelect from "./CountriesSelect";

const fakeData = [
  { name: "Week 1", progress: 20 },
  { name: "Week 2", progress: 50 },
  { name: "Week 3", progress: 75 },
  { name: "Week 4", progress: 100 },
];

const ProfilePage = () => {
  const [editingProfile, setEditingProfile] = useState(false);
  const [userName, setUserName] = useState("John Doe");
  const [profilePic, setProfilePic] = useState(
    "https://mui.com/static/images/avatar/1.jpg"
  );
  const [favorites, setFavorites] = useState([
    "React for Beginners",
    "Advanced Node.js",
  ]);
  const [notifications, setNotifications] = useState(true);
  const [currentTab, setCurrentTab] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const handleProfileEdit = () => setEditingProfile((prev) => !prev);
  const handleProfilePicChange = (e) =>
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  const handleTabChange = (event, newValue) => setCurrentTab(newValue);
  const handleToggleDarkMode = () => setDarkMode((prev) => !prev);

  const tabContent = [
    {
      label: "Favorites",
      content: (
        <div>
          <Typography variant="h6" gutterBottom>
            Your Favorites
          </Typography>
          <ul>
            {favorites.map((fav, index) => (
              <li key={index}>{fav}</li>
            ))}
          </ul>
          {editingProfile && (
            <TextField
              variant="outlined"
              size="small"
              placeholder="Add a favorite"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setFavorites([...favorites, e.target.value]);
                  e.target.value = "";
                }
              }}
            />
          )}
        </div>
      ),
    },
    {
      label: "Notifications",
      content: (
        <div>
          <Typography variant="h6" gutterBottom>
            Notification Settings
          </Typography>
          <Typography>{notifications ? "Enabled" : "Disabled"}</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setNotifications((prev) => !prev)}
          >
            Toggle Notifications
          </Button>
        </div>
      ),
    },
    {
      label: "Settings",
      content: (
        <div>
          <Typography variant="h6" gutterBottom>
            Account Settings
          </Typography>
          <CountriesSelect />
          <Button startIcon={<EditOutlinedIcon />} onClick={handleProfileEdit}>
            {editingProfile ? "Save Changes" : "Edit Profile"}
          </Button>
        </div>
      ),
    },
  ];

  return (
    <motion.div
      className={`flex flex-col md:flex-row min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Sidebar */}
      <aside className="md:w-1/5 p-4 flex flex-col items-center">
        <Avatar
          alt="User Avatar"
          src={profilePic}
          sx={{ width: 100, height: 100 }}
        />
        {editingProfile && (
          <div className="mt-2">
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePicChange}
            />
          </div>
        )}
        <Typography variant="h6" className="mt-4">
          {userName}
        </Typography>
        {editingProfile && (
          <TextField
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            variant="outlined"
            size="small"
            className="mt-2"
          />
        )}
      </aside>

      {/* Main Content */}
      <main className="md:w-4/5 p-8">
        <Typography variant="h4" gutterBottom>
          Welcome, {userName}
        </Typography>

        {/* Dark Mode Toggle Button */}
        <Button
          variant="contained"
          color={darkMode ? "default" : "primary"}
          onClick={handleToggleDarkMode}
          className="mb-4"
        >
          Toggle Dark Mode
        </Button>

        <Box sx={{ borderBottom: 1, borderColor: "divider", marginBottom: 2 }}>
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            aria-label="profile tabs"
          >
            {tabContent.map((tab, index) => (
              <Tab key={index} label={tab.label} />
            ))}
          </Tabs>
        </Box>

        <div>{tabContent[currentTab].content}</div>

        {/* Progress Chart Section */}
        <section className="mt-8">
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Learning Progress
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={fakeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" stroke="#555" />
                  <YAxis stroke="#555" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="progress"
                    stroke="#8884d8"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="mt-8 text-gray-500">
          <Typography variant="body2">
            &copy; 2024 Your Company. All rights reserved.
          </Typography>
        </footer>
      </main>
    </motion.div>
  );
};

export default ProfilePage;
