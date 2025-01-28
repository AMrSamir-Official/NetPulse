import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"; // Importing arrow icons
import { CSSTransition } from "react-transition-group";
import "./help.css";

const CoursesSection = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const projectsData = {
    "Data Science": [
      {
        title: "Data Science ML:Predictive Analytics,Modeling Interview Prep",
        image: "https://img-c.udemycdn.com/course/240x135/5746566_fe65_7.jpg",
        link: "/course/data-science-master",
        instructor: "John Doe",
        rating: 4.8,
        reviews: 200,
        price: "E£799.99",
        totalHours: "15 hours",
        lectures: "120 lectures",
      },
      {
        title: "Deep Learning A-Z 2025: Neural Networks, AI & ChatGPT Prize",
        image: "https://img-c.udemycdn.com/course/240x135/1151632_de9b.jpg",
        link: "/course/machine-learning",
        instructor: "Jane Smith",
        rating: 4.7,
        reviews: 300,
        price: "E£649.99",
        totalHours: "10 hours",
        lectures: "80 lectures",
      },
    ],
    "IT Certifications": [
      {
        title: "TOTAL: CompTIA A+ Core 1 (220-1101) Course + Exam",
        image: "https://img-c.udemycdn.com/course/240x135/2359992_37e3_9.jpg",
        link: "/course/comptia-a-plus",
        instructor: "Total Seminars Over 1 Million Enrollments, Mike Meyers",
        rating: 4.7,
        reviews: 500,
        price: "E£999.99",
        totalHours: "20 hours",
        lectures: "150 lectures",
      },
    ],
    "Web Development": [
      {
        title: "The Ultimate React Course 2024: React, Next.js, Redux & More",
        image: "https://img-c.udemycdn.com/course/240x135/4471614_361e_8.jpg",
        link: "/course/react-for-beginners",
        instructor: "Jonas Schmedtmann",
        rating: 4.9,
        reviews: 400,
        price: "E£599.99",
        totalHours: "8 hours",
        lectures: "70 lectures",
      },
    ],
    Leadership: [
      {
        title: "5 Basic Leadership Styles + 5 Essential Management Skills",
        image: "https://img-c.udemycdn.com/course/240x135/1902656_9efd_17.jpg",
        link: "/course/leadership-essentials",
        instructor: "Angela White",
        rating: 4.7,
        reviews: 220,
        price: "E£799.99",
        totalHours: "12 hours",
        lectures: "90 lectures",
      },
    ],
    Communication: [
      {
        title: "Effective Communication in the Workplace",
        image: "https://img-c.udemycdn.com/course/240x135/1984246_73bf_4.jpg",
        link: "/course/communication-skills",
        instructor: null,
        rating: 4.5,
        reviews: 180,
        price: "E£499.99",
        totalHours: "10 hours",
        lectures: "80 lectures",
      },
    ],
    "Business Analytics & Intelligence": [
      {
        title: "Business Analytics Bootcamp: Complete Mastery",
        image: "https://img-c.udemycdn.com/course/240x135/6193029_7ee4_2.jpg",
        link: "/course/business-analytics",
        instructor: "Lisa Green",
        rating: 4.6,
        reviews: 300,
        price: "E£849.99",
        totalHours: "18 hours",
        lectures: "120 lectures",
      },
    ],
  };

  const [projects, setProjects] = useState(projectsData["Data Science"]);

  const handleCategoryChange = (category) => {
    setProjects(projectsData[category]);
  };

  return (
    <div className="bg-[#393c45] py-8  max-w-[98vw]">
      <div className="container mx-auto px-4 max-w-full">
        <div className="flex items-center justify-between mb-4">
          <IoIosArrowBack
            className="text-white text-2xl cursor-pointer"
            onClick={() => setTabIndex(tabIndex === 0 ? 0 : tabIndex - 1)}
          />
          <Tabs
            value={tabIndex}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            className="flex-grow"
          >
            <Tab
              label="Data Science"
              onClick={() => handleCategoryChange("Data Science")}
            />
            <Tab
              label="IT Certifications"
              onClick={() => handleCategoryChange("IT Certifications")}
            />
            <Tab
              label="Leadership"
              onClick={() => handleCategoryChange("Leadership")}
            />
            <Tab
              label="Web Development"
              onClick={() => handleCategoryChange("Web Development")}
            />
            <Tab
              label="Communication"
              onClick={() => handleCategoryChange("Communication")}
            />
            <Tab
              label="Business Analytics & Intelligence"
              onClick={() =>
                handleCategoryChange("Business Analytics & Intelligence")
              }
            />
          </Tabs>
          <IoIosArrowForward
            className="text-white text-2xl cursor-pointer"
            onClick={() => setTabIndex(tabIndex === 5 ? 5 : tabIndex + 1)}
          />
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-hidden">
          {projects.map((project, index) => (
            <CSSTransition
              key={index}
              in={true}
              timeout={500}
              classNames="fade"
              unmountOnExit
            >
              <div className="course-card bg-[#2c2f36] shadow-lg rounded-xl p-6 hover:scale-105 transform transition duration-300 ease-in-out max-w-full">
                <div className="course-card-image-container mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto rounded-xl object-cover"
                  />
                </div>
                <div className="course-card-details">
                  <h3 className="text-xl font-semibold text-white mb-2 truncate">
                    <a
                      href={project.link}
                      className="hover:text-yellow-500"
                      target="_blank"
                      rel="noopener"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <p className="text-sm text-gray-400 mb-2 truncate">
                    Instructor: {project.instructor}
                  </p>
                  <div className="flex items-center mb-3">
                    <span className="text-yellow-500">⭐</span>
                    <span className="ml-1 text-white">{`Rating: ${project.rating} (${project.reviews} reviews)`}</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-300">
                    <span className="font-semibold">{project.price}</span>
                    <div className="flex items-center">
                      <span className="mr-2 text-sm">{project.totalHours}</span>
                      <span className="text-sm">{project.lectures}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CSSTransition>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
