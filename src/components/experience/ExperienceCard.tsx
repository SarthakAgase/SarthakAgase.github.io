import { Box, Card, CardContent, Divider, useTheme } from "@mui/material"
import ExperienceCardHeader from "./ExperienceCardHeader"
import ResponsibilitiesList from "./ResponsibilitiesList"
import TechnicalSkillsCard from "./TechnicalSkillsCard"
import { ExperienceDetails } from "./types"

type ExperienceCardProps = {
  index: number
  experienceDetails: ExperienceDetails
}

const ExperienceCard = ({ experienceDetails, index }: ExperienceCardProps) => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "center", md: "stretch" },
      }}
      key={index}
    >
      <Card
        elevation={3}
        sx={{
          width: { xs: "85%", md: "50%" },
          borderLeft: `4px solid ${theme.palette.primary.main}`,
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.03)",
          },
        }}
      >
        <CardContent>
          <ExperienceCardHeader experienceDetails={experienceDetails} />
          <Divider sx={{ my: 1.5 }} />
          <ResponsibilitiesList
            responsibilities={experienceDetails.responsibilities}
          />
        </CardContent>
      </Card>
      <TechnicalSkillsCard
        index={index}
        experienceDetails={experienceDetails}
      />
    </Box>
  )
}

export default ExperienceCard
