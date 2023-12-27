// import React from "react";
// import styles from "./AccordionComponent.module.css";
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//  function AccordionComponent({ contentAcc }) {
//   return (
//       <Accordion className={styles.customAccordion}>

//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//           className={styles.summary}
//         >

//         <Typography>{contentAcc.question}</Typography>

//         </AccordionSummary>

//         <AccordionDetails>

//           <Typography>{contentAcc.answer}</Typography>

//         </AccordionDetails>

//       </Accordion>

//   );
// }

// export default AccordionComponent;

import React from "react";
import styles from "./AccordionComponent.module.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function AccordionComponent({ contentAcc }) {
  return (
    <Accordion className={styles.customAccordion}>

      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon className={styles.arrowIcon} />
        } 

        aria-controls="panel1a-content"
        id="panel1a-header"
        className={styles.summary}
        >
        <Typography className={styles.summaryText}>
          {contentAcc.question}
        </Typography>
      </AccordionSummary>

      <AccordionDetails className={styles.details}>
        <Typography className={styles.detailsText}>
          {contentAcc.answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default AccordionComponent;
