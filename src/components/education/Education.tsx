import { Box } from "@mui/material"
import SectionHeader from "../SectionHeader"
import { EDUCATIONAL_DETAILS } from "./constants"
import InstituteDetailsCard from "./InstituteDetailsCard"

const Education = () => {
  return (
    <SectionHeader
      headerText={"Education"}
      id={"education"}
      headerProps={{ mb: { xs: 4, md: 1 } }}
    >
      <Box sx={{ position: "relative" }}>
        {/* Timeline line */}
        <Box
          sx={{
            position: "absolute",
            left: { xs: "20px", md: "50%" },
            transform: { xs: "none", md: "translate(-50%, 35%)" },
            width: "4px",
            height: { xs: "75%", md: "61%" },
            opacity: 0.7,
            zIndex: 0,
            borderLeft: "3.2px dashed",
            borderLeftColor: "primary.main",
          }}
        />

        {/* Education cards */}
        <Box sx={{ position: "relative", zIndex: 1 }}>
          {EDUCATIONAL_DETAILS.map((details, index) => (
            <InstituteDetailsCard
              key={index}
              index={index}
              educationalDetails={details}
            />
          ))}
        </Box>
      </Box>
    </SectionHeader>
  )
}

export default Education
