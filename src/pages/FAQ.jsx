import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "Can I easily access video channels?",
      answer:
        "Yes, you can access all video channels through your dashboard, where they are organized by different topics.",
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer:
        "Yes, you can cancel your subscription at any time from your account settings, and you will not be charged the following month.",
    },
    {
      question: "What types of subscriptions are available?",
      answer:
        "We currently offer a monthly subscription only, and you can upgrade or cancel your account at any time with no further obligation.",
    },
    {
      question: "How can I update my payment information?",
      answer:
        "You can update your payment information in the billing section of your dashboard.",
    },
    {
      question: "Do you issue refunds for any charges?",
      answer:
        "Unfortunately, we do not issue full or partial refunds for any reason.",
    },
    {
      question: "Is there a free plan available?",
      answer:
        "Of course! We’re happy to offer a free plan to anyone who wants to try our service.",
    },
  ];

  return (
    <Box sx={{ maxWidth: 600, margin: "auto", padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Typography variant="body1" paragraph>
        Find the answers to the most frequently asked questions below
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      {/* Ask Us Section */}
      <Box mt={4}>
        <Typography variant="h5" gutterBottom>
          Ask Us a Question
        </Typography>
        <Card>
          <CardContent>
            <Typography variant="body1" paragraph>
              If you have any questions that are not covered here, feel free to
              ask us!
            </Typography>
            <TextField
              label="Your Question"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              margin="normal"
            />
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default FAQ;
