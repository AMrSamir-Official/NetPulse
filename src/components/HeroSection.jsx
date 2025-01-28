import { Button } from "@mui/material";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const HeroSectionComponent = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const slides = [
    {
      title: "Skills that drive you forward",
      subtitle:
        "Technology and the world of work change fast — with us, you’re faster. Get the skills to achieve goals and stay competitive.",
      image:
        "https://img-c.udemycdn.com/notices/web_carousel_slide/image/10ca89f6-811b-400e-983b-32c5cd76725a.jpg",
    },
    {
      title: "Learn at your own pace",
      subtitle:
        "Whether you’re improving your skillset or starting something new, we’ll help you achieve your goals.",
      image:
        "https://img-c.udemycdn.com/notices/web_carousel_slide/image/7643bc51-e03f-4b40-9719-6e66b8b2f166.png",
    },
  ];

  return (
    <div className="bg-[#393c45] py-8 overflow-hidden max-w-[99%] m-auto">
      <div className="container mx-auto px-4 max-w-[100vw] overflow-hidden">
        <Slider {...sliderSettings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[300px] sm:h-[400px] object-cover max-w-full" // Preventing image from going out of the screen
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4 max-w-full">
                <h1 className="text-white text-3xl sm:text-4xl font-bold mb-4 max-w-full px-4">
                  {slide.title}
                </h1>
                <p className="text-white text-sm sm:text-lg mb-6 px-4 max-w-full">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-4 space-x-0 max-w-full">
                  <Button variant="contained" color="primary" size="large">
                    Plan for individuals
                  </Button>
                  <Button variant="outlined" color="primary" size="large">
                    Plan for organizations
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSectionComponent;
