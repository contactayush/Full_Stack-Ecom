import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Faqsconainer = ({ ques, ans }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <Typography>{ques}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{ans}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Faqsconainer;
