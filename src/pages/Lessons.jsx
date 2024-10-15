import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Breadcrumbs,
  Button,
  Typography,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import lessonsData from "../Constant/lessonsData";

const LearnPage = () => {
  const { lessons } = useParams();
  const lessonDetails = lessonsData[lessons];

  if (!lessonDetails) {
    return <Typography>الدرس غير موجود.</Typography>;
  }

  return (
    <div>
      {/* Breadcrumbs navigation */}
      <Breadcrumbs aria-label="breadcrumbs">
        <Link color="inherit" to="/Learn">
          Learn
        </Link>
        <Typography>{lessonDetails.title}</Typography>
      </Breadcrumbs>

      <h1>{lessonDetails.title}</h1>
      <p>{lessonDetails.description}</p>

      {/* Dynamic accordions for each lesson */}
      {lessonDetails.lessons.map((lesson, lessonIndex) => (
        <Accordion key={lessonIndex}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{lesson.lesson}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="grid grid-cols-5 gap-4">
              {/* Display steps dynamically from 0 to lessonDetails.lessonsLength - 1 */}
              {[...Array(lessonDetails.lessonsLength).keys()].map((step) => (
                <Link
                  key={step}
                  className="map-grid-item     mb-3 "
                  to={`/learn/${lessons}/${step}`}
                >
                  <span className="sr-only">Step</span>
                  <span className="px-4 py-2 border border-dashed border-gray-500 hover:bg-[rgba(44,77,144,0.43)] transition duration-300">
                    {step + 1}
                  </span>
                  <span className="sr-only">Not Passed</span>
                </Link>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
      ))}

      {/* Start Project Button */}
      <Button
        variant="contained"
        color="primary"
        className="mt-4"
        onClick={() => alert("تم بدء المشروع")}
      >
        ابدأ المشروع
      </Button>
    </div>
  );
};

export default LearnPage;
