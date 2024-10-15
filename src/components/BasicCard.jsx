import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined"; // Icon for collapsing
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined"; // Icon for expanding
import { Card, CardContent, Chip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import React, { useState } from "react"; // Import useState for managing state
import { Link } from "react-router-dom"; // Import Link for navigation

const ProfilePage = () => {
  const [showCourses, setShowCourses] = useState(false); // State to manage course visibility
  const [showProjects, setShowProjects] = useState(false); // State to manage project visibility

  const toggleCourses = () => {
    setShowCourses((prevState) => !prevState); // Toggle course visibility
  };

  const toggleProjects = () => {
    setShowProjects((prevState) => !prevState); // Toggle project visibility
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="md:w-1/5 bg-gray-800 p-4 flex flex-col items-center">
        <Avatar
          alt="Devon Lane"
          src="https://mui.com/static/images/avatar/1.jpg"
          sx={{ width: 100, height: 100 }}
        />
        <h2 className="mt-4 text-xl font-semibold">Devon Lane</h2>
        <p className="text-gray-400">Premium User</p>

        <nav className="mt-8">
          <ul className="space-y-4">
            <li>
              <Link
                to="/dashboard"
                className="text-purple-500 hover:text-white"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/favorites" className="text-gray-400 hover:text-white">
                Favorites
              </Link>
            </li>
            <li>
              <Link
                to="/notifications"
                className="text-gray-400 hover:text-white"
              >
                Notifications
              </Link>
            </li>
            <li>
              <Link to="/settings" className="text-gray-400 hover:text-white">
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="md:w-4/5 p-8">
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Welcome, Devon Lane</h1>
          <p className="text-gray-400">Here are your latest updates.</p>
        </header>

        {/* Personal Information Section */}
        <section className="mb-8">
          <Card className="bg-gray-800 mb-6">
            <CardContent>
              <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p>
                    <strong>Full Name:</strong> Devon Lane
                  </p>
                  <p>
                    <strong>Age:</strong> 29
                  </p>
                  <p>
                    <strong>Relationship Status:</strong> Single
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Location:</strong> San Francisco, CA
                  </p>
                  <p>
                    <strong>Email:</strong> devonlane@example.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +1 234 567 890
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Courses Section */}
        <section className="mb-8">
          <Card className="bg-gray-800 mb-6">
            <CardContent>
              <h2 className="text-2xl font-bold mb-4 flex justify-between items-center">
                Courses
                <button
                  onClick={toggleCourses}
                  className="text-gray-400 hover:text-white focus:outline-none"
                >
                  {showCourses ? (
                    <ExpandLessOutlinedIcon fontSize="small" />
                  ) : (
                    <ExpandMoreOutlinedIcon fontSize="small" />
                  )}
                </button>
              </h2>
              {showCourses && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg">Ongoing Courses</h3>
                    <ul className="list-disc list-inside text-gray-400">
                      <li>
                        <Link
                          to="/courses/full-stack"
                          className="hover:text-purple-500"
                        >
                          Full Stack Web Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/courses/data-structures"
                          className="hover:text-purple-500"
                        >
                          Data Structures and Algorithms
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Completed Courses</h3>
                    <ul className="list-disc list-inside text-gray-400">
                      <li>
                        <Link
                          to="/courses/uiux-design"
                          className="hover:text-purple-500"
                        >
                          UI/UX Design Fundamentals
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/courses/js-mastery"
                          className="hover:text-purple-500"
                        >
                          JavaScript Mastery
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Projects Section */}
        <section className="mb-8">
          <Card className="bg-gray-800 mb-6">
            <CardContent>
              <h2 className="text-2xl font-bold mb-4 flex justify-between items-center">
                Projects
                <button
                  onClick={toggleProjects}
                  className="text-gray-400 hover:text-white focus:outline-none"
                >
                  {showProjects ? (
                    <ExpandLessOutlinedIcon fontSize="small" />
                  ) : (
                    <ExpandMoreOutlinedIcon fontSize="small" />
                  )}
                </button>
              </h2>
              {showProjects && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg">
                      Professional Projects
                    </h3>
                    <ul className="list-disc list-inside text-gray-400">
                      <li>
                        <Link
                          to="/projects/e-commerce"
                          className="hover:text-purple-500"
                        >
                          E-commerce Website
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/projects/hr-management"
                          className="hover:text-purple-500"
                        >
                          HR Management System
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Personal Projects</h3>
                    <ul className="list-disc list-inside text-gray-400">
                      <li>
                        <Link
                          to="/projects/portfolio"
                          className="hover:text-purple-500"
                        >
                          Portfolio Website
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/projects/chat-application"
                          className="hover:text-purple-500"
                        >
                          Chat Application
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Portfolio Links Section */}
        <section className="mb-8">
          <Card className="bg-gray-800 mb-6">
            <CardContent>
              <h2 className="text-2xl font-bold mb-4">Portfolio & Links</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p>
                    <strong>Portfolio:</strong>{" "}
                    <a
                      href="https://portfolio.devonlane.com"
                      className="text-purple-500 hover:underline"
                    >
                      portfolio.devonlane.com
                    </a>
                  </p>
                  <p>
                    <strong>GitHub:</strong>{" "}
                    <a
                      href="https://github.com/devonlane"
                      className="text-purple-500 hover:underline"
                    >
                      github.com/devonlane
                    </a>
                  </p>
                </div>
                <div>
                  <p>
                    <strong>LinkedIn:</strong>{" "}
                    <a
                      href="https://linkedin.com/in/devonlane"
                      className="text-purple-500 hover:underline"
                    >
                      linkedin.com/in/devonlane
                    </a>
                  </p>
                  <p>
                    <strong>Blog:</strong>{" "}
                    <a
                      href="https://devonlaneblog.com"
                      className="text-purple-500 hover:underline"
                    >
                      devonlaneblog.com
                    </a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <section className="mb-8">
          <Card className="bg-gray-800 mb-6">
            <CardContent>
              <h2 className="text-2xl font-bold mb-4">Skills & Technologies</h2>
              <div className="flex flex-wrap gap-2">
                <Chip label="JavaScript" className="bg-purple-600 text-white" />
                <Chip label="React" className="bg-purple-600 text-white" />
                <Chip label="Node.js" className="bg-purple-600 text-white" />
                <Chip
                  label="Tailwind CSS"
                  className="bg-purple-600 text-white"
                />
                <Chip label="MongoDB" className="bg-purple-600 text-white" />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="mt-8 text-gray-500">
          <p>&copy; 2024 Your Company Name</p>
        </footer>
      </main>
    </div>
  );
};

export default ProfilePage;
