import { Box } from "@mui/material"
import SectionHeader from "../SectionHeader"
import { EXPERIENCE_DETAILS } from "./constants"
import ExperienceCard from "./ExperienceCard"

const Experience = () => {
  return (
    <SectionHeader
      headerText={"Experience"}
      id={"experience"}
      headerProps={{ mb: { xs: 4, md: 2 } }}
    >
      <Box sx={{ position: "relative" }}>
        {/* Experience cards */}
        <Box sx={{ position: "relative", zIndex: 1 }}>
          {EXPERIENCE_DETAILS.map((details, index) => (
            <ExperienceCard
              key={index}
              index={index}
              experienceDetails={details}
            />
          ))}
        </Box>
      </Box>
    </SectionHeader>
  )
}

export default Experience
