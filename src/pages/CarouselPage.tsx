import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CoursesSection from "../components/CoursesSection";
import HeroSectionComponent from "../components/HeroSection";
import RotatingText from "../components/TEst";
import "./help.css";

const Testimonial = () => {
  return (
    <div>
      <div>
        {/* Testimonials Section */}
        <div className="mt-8 text-center">
          <h2 className="text-3xl text-white mb-4">
            See what others are achieving through learning
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            <div className="bg-[#2c2f36] p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-400 mb-4">
                "I transformed my career by learning Python through this
                platform!"
              </p>
              <p className="text-white font-semibold">
                - Ahmed, Data Scientist
              </p>
            </div>
            <div className="bg-[#2c2f36] p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-400 mb-4">
                "The React course gave me the confidence to land my first web
                development job!"
              </p>
              <p className="text-white font-semibold">
                - Sarah, Front-End Developer
              </p>
            </div>
            <div className="bg-[#2c2f36] p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-400 mb-4">
                "Machine Learning has opened so many doors for me in tech.
                Thanks for the fantastic course!"
              </p>
              <p className="text-white font-semibold">- John, ML Engineer</p>
            </div>
          </div>
        </div>

        {/* Udemy Business Report Banner with responsive side-by-side layout */}
        <div className="mt-8 flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/2">
            <img
              src="https://cms-images.udemycdn.com/96883mtakkm8/1qvvR0FDKv9chruIpia6Sc/b2af22a0097e47de4e4354237e3f378c/Onsite_Desktop_GLSTR25.png"
              alt="Collage of images for the latest Udemy Business reports"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="text-3xl font-bold text-white mb-4">
              Top trends for the future of work
            </div>
            <div className="text-lg text-gray-400 mb-4">
              Our 2025 Global Learning & Skills Trends Report is out now! Find
              out how to build the skills to keep pace with change.
            </div>
            <a
              className="bg-blue-600 text-white px-6 py-3 rounded-md"
              href="https://business.udemy.com/2025-global-learning-skills-trends-report/?ref=ub_report_cta_lohp"
              target="_blank"
              rel="noopener"
            >
              Get the report
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const SwipeSectionPage = () => {
  return (
    <main className="max-w-[99vw] ">
      <HeroSectionComponent />
      <CoursesSection />
      <Testimonial />
      <RotatingText />
    </main>
  );
};

export default SwipeSectionPage;
