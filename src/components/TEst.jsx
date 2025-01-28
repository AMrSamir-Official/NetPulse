import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import "./test.css"; // Import your CSS file

const RotatingText = () => {
  useEffect(() => {
    let words = document.querySelectorAll(".word");
    words.forEach((word) => {
      let letters = word.textContent.split("");
      word.textContent = "";
      letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
      });
    });

    let currentWordIndex = 0;
    let maxWordIndex = words.length - 1;
    words[currentWordIndex].style.opacity = "1";

    const rotateText = () => {
      let currentWord = words[currentWordIndex];
      let nextWord =
        currentWordIndex === maxWordIndex
          ? words[0]
          : words[currentWordIndex + 1];

      // Rotate out letters of the current word
      Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
          letter.className = "letter out"; // Apply the "out" class for transition
        }, i * 80);
      });

      // Reveal and rotate in letters of the next word
      nextWord.style.opacity = "1";
      Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind"; // Apply the "behind" class first
        setTimeout(() => {
          letter.className = "letter in"; // Apply the "in" class to rotate and fade the letter in
        }, 340 + i * 80);
      });

      currentWordIndex =
        currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    };

    rotateText();
    const interval = setInterval(rotateText, 4000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <Box className="rotating-text text-4xl max-w-[98vw] m-auto">
      <Typography
        variant="h5"
        component="p"
        className="inline-flex m-0 align-top"
      >
        Learn from ZeroWebSchool and get Courses from
      </Typography>
      <Typography
        variant="h5"
        component="p"
        className="inline-flex m-0 align-top"
      >
        <span className="word alizarin">Udemy</span>
        <span className="word wisteria">LinkedIn Courses</span>
        <span className="word peter-river">and any</span>
        <span className="word emerald">premium</span>
        <span className="word sun-flower">content</span>
        <span className="word alizarin">for</span>
        <span className="word wisteria">free.</span>
      </Typography>
    </Box>
  );
};

export default RotatingText;
