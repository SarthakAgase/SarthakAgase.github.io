import BuildIcon from "@mui/icons-material/Build"
import CodeIcon from "@mui/icons-material/Code"
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode"
import LayersIcon from "@mui/icons-material/Layers"
import TagIcon from "@mui/icons-material/Tag"
import { Box, Card, CardContent, Typography, useTheme } from "@mui/material"
import { useState } from "react"
import SkillAccordion from "./SkillAccordion"
import SkillPaper from "./SkillPaper"
import { ExperienceDetails } from "./types"

type TechnicalSkillsCardProps = {
  index: number
  experienceDetails: ExperienceDetails
}

const TechnicalSkillsCard = ({
  index,
  experienceDetails,
}: TechnicalSkillsCardProps) => {
  const theme = useTheme()
  const [expanded, setExpanded] = useState<string | false>("panel1")

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  return (
    <Card
      elevation={3}
      sx={{
        width: { xs: "85%", md: "50%" },
        borderLeft: `4px solid ${theme.palette.primary.main}`,
        ml: { xs: 0, md: index % 2 === 0 ? "auto" : "0" },
        mr: { xs: "0", md: index % 2 === 0 ? "0" : "auto" },
        mt: { xs: "1.5rem", md: 0 },
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.03)",
        },
      }}
    >
      <CardContent>
        <Typography variant="h5" gutterBottom fontWeight="bold" mb={"1rem"}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <TagIcon fontSize="large" color="primary" />
            Technical Skills
          </Box>
        </Typography>

        <SkillAccordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          title="Languages and Technologies"
          icon={<CodeIcon color="primary" />}
        >
          {experienceDetails.skills
            .find((s) => s.category === "Languages and Technologies")
            ?.items.map((skill, idx) => (
              <SkillPaper skill={skill} index={idx} key={idx} />
            ))}
        </SkillAccordion>

        <SkillAccordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          title="JavaScript Frameworks"
          icon={<LayersIcon color="primary" />}
        >
          {experienceDetails.skills
            .find((s) => s.category === "JavaScript Frameworks")
            ?.items.map((skill, idx) => (
              <SkillPaper skill={skill} index={idx} key={idx} />
            ))}
        </SkillAccordion>

        <SkillAccordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          title="UI Libraries and Testing Frameworks"
          icon={<DeveloperModeIcon color="primary" />}
        >
          {experienceDetails.skills
            .find((s) => s.category === "UI Libraries and Testing Frameworks")
            ?.items.map((skill, idx) => (
              <SkillPaper skill={skill} index={idx} key={idx} />
            ))}
        </SkillAccordion>

        <SkillAccordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
          title="Development Tools"
          icon={<BuildIcon color="primary" />}
        >
          {experienceDetails.skills
            .find((s) => s.category === "Development Tools")
            ?.items.map((skill, idx) => (
              <SkillPaper skill={skill} index={idx} key={idx} />
            ))}
        </SkillAccordion>
      </CardContent>
    </Card>
  )
}

export default TechnicalSkillsCard
