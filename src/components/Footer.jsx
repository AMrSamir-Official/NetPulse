import { Facebook, LinkedIn } from "@mui/icons-material";
import { Box, Grid, IconButton, Link, Typography } from "@mui/material";
import { BsGithub } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import footerImage from "../assets/footer.gif";
import Logo from "../assets/logo.png";
const tutorials = [
  "HTML Tutorial",
  "CSS Tutorial",
  "JavaScript Tutorial",
  "How To Tutorial",
  "SQL Tutorial",
  "Python Tutorial",
  "amrsamir.vercel.app Tutorial",
  "Bootstrap Tutorial",
  "PHP Tutorial",
  "Java Tutorial",
  "C++ Tutorial",
  "jQuery Tutorial",
];

const references = [
  "HTML Reference",
  "CSS Reference",
  "JavaScript Reference",
  "SQL Reference",
  "Python Reference",
  "amrsamir.vercel.app Reference",
  "Bootstrap Reference",
  "PHP Reference",
  "Java Reference",
  "Angular Reference",
  "jQuery Reference",
];

const examples = [
  "HTML Examples",
  "CSS Examples",
  "JavaScript Examples",
  "How To Examples",
  "SQL Examples",
  "Python Examples",
  "amrsamir.vercel.app Examples",
  "Bootstrap Examples",
  "PHP Examples",
  "Java Examples",
  "XML Examples",
  "jQuery Examples",
];
const socialLinks = [
  { icon: <Facebook />, url: "https://www.facebook.com/fb.Amr.Samir" },
  { icon: <BsGithub />, url: "https://github.com/AMrSamir-Official" },
  { icon: <FaCode />, url: "https://amrsamir.vercel.app/" },
  {
    icon: <LinkedIn />,
    url: "https://www.linkedin.com/in/amr-samir-a07790303/?originalSubdomain=eg",
  },
];

function Footer() {
  return (
    <footer className="p-12 relative bg-[#132b33]  ">
      <img src={Logo} className="w-12 h-12 " alt="NetPulse " />
      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Top Tutorials</Typography>
          <ul>
            {tutorials.map((item, index) => (
              <li key={index}>
                <Link href="#" underline="hover" color="textPrimary">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Top References</Typography>
          <ul>
            {references.map((item, index) => (
              <li key={index}>
                <Link href="#" underline="hover" color="textPrimary">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Top Examples</Typography>
          <ul>
            {examples.map((item, index) => (
              <li key={index}>
                <Link href="#" underline="hover" color="textPrimary">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Forum</Typography>
          <Typography variant="body2">
            Net Pulse is optimized for learning and training. Examples might be
            simplified to improve reading and learning. Tutorials, references,
            and examples are constantly reviewed to avoid errors, but we cannot
            warrant full correctness of all content. While using NetPulse, you
            agree to have read and accepted our terms of use, cookie, and
            privacy policy.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">About Academy</Typography>
          <Typography variant="body2">
            Copyright2024 by Refsnes Data. All Rights Reserved. NetPulse is
            Powered by amrsamir.vercel.app.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Follow Us</Typography>
          <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
            {socialLinks.map((social, index) => (
              <IconButton
                key={index}
                component="a"
                href={social.url}
                target="_blank"
                aria-label={social.url}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Grid>
      </Grid>
      <Grid>
        <img
          style={{
            position: "absolute",
            right: "0px",
            bottom: "0px",

            filter: "saturate(0.5)",
          }}
          src={footerImage}
        />
      </Grid>
    </footer>
  );
}

export default Footer;
