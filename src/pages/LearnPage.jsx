/* eslint-disable react/no-unescaped-entities */
import { Button, LinearProgress, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import categories from "../Constant/LearnCategories";
import scrollToTop from "../hooks/scrollToTop";
const LearnPage = () => {
  scrollToTop();
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      {/* Welcome Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Welcome to ZeroWebSchool</h1>
        <Typography variant="h6" className="mt-4">
          "Everybody has talent, but ability takes hard work."
        </Typography>
        <Typography variant="subtitle1" className="mt-2">
          - Michael Jordan
        </Typography>
      </div>

      {/* Donation Progress */}
      <div className="mb-8 text-center">
        <Typography variant="h6" className="mb-2">
          Progress towards donation goal
        </Typography>
        <div className="w-2/3 mx-auto">
          <LinearProgress variant="determinate" value={53} />
        </div>
        <Typography variant="h5" className="mt-2">
          53%
        </Typography>
        <Typography variant="subtitle2" className="mt-2">
          Donate now to help our charity reach our goal of 20,000 monthly
          supporters this year.
        </Typography>
        <Button variant="contained" color="primary" className="mt-4">
          Donate
        </Button>
      </div>

      {/* Categories Section */}
      {categories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-12">
          <Typography variant="h4" className="text-center font-bold mb-8">
            {category.title}
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.courses.map((certification, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-4 flex items-center relative"
              >
                <div className="absolute left-0 -translate-x-2">
                  <svg
                    width="45"
                    height="50"
                    viewBox="0 0 45 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="22"
                      cy="21"
                      r="20"
                      fill="#1F2937"
                      stroke="#3B82F6"
                      strokeWidth="3"
                    ></circle>
                    <text
                      x="50%"
                      y="55%"
                      fill="#3B82F6"
                      fontSize="1rem"
                      textAnchor="middle"
                    >
                      {index + 1}
                    </text>
                  </svg>
                </div>
                <Link
                  to={certification.link}
                  className="text-lg hover:underline ml-10" // Add left margin to create space for the number
                >
                  {certification.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LearnPage;
