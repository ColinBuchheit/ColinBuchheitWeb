import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Experience.css';

const Experience: React.FC = () => (
  <div className="experience">
    <Typography variant="h4" gutterBottom>
      Experience
    </Typography>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>IT Intern – Metal Exchange (MX Holdings), Summer 2024</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <ul>
            <li>Collaborated on special projects including IT solutions and strategies to streamline internal processes and enhance digital infrastructure.</li>
            <li>Gained knowledge of MX Holdings' products, services, and developmental projects to support IT solutions for both existing and new product initiatives.</li>
            <li>Contributed to research projects aimed at developing new products and solutions, including market trend analysis and evaluating IT solutions.</li>
            <li>Built working relationships with internal departments to develop integrated solutions that optimize operations and enhance customer experience.</li>
            <li>Contributed to the creation and review of documents such as presentations, white papers, and marketing collateral to communicate strategic initiatives effectively.</li>
            <li>Supported consumer analytics, communication material creation, and process improvement initiatives utilizing IT tools to streamline workflows and improve data analysis.</li>
          </ul>
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>TigerHacks Hackathon 2023 – University of Missouri, Columbia</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <ul>
            <li>Participated in the annual Mizzou hackathon, TigerHacks, from November 3rd-5th.</li>
            <li>Competed in a team of 4 against nearly 250 participants and 33 projects.</li>
            <li>Created the project “Rapid Reels,” which placed first in the top category with a development window of 36 hours.</li>
          </ul>
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Google IT Support Certificate</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <ul>
            <li>Completed a certificate through Coursera offered by Google. The program included courses in Technical Support, Computer Networking, Operating Systems, System Administration, IT Infrastructure, and IT Security.</li>
          </ul>
        </Typography>
      </AccordionDetails>
    </Accordion>
  </div>
);

export default Experience;
