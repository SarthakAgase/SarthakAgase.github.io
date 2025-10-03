import { Avatar, Box, Paper, Typography, Zoom, useTheme } from "@mui/material"
import { useSkillHelpers } from "./helpers"

type SkillPaperProps = {
  skill: string
  index: number
}

const SKILLS_WITH_DARK_MODE_ICON = [
  "Cypress",
  "GitHub",
  "NextJs",
  "VisX",
  "gRPC",
]

const SkillPaper = ({ skill, index }: SkillPaperProps) => {
  const { getBorderColor } = useSkillHelpers()
  const theme = useTheme()
  const isDarkMode = theme.palette.mode === "dark"

  const getIconSrc = () => {
    if (isDarkMode && SKILLS_WITH_DARK_MODE_ICON.includes(skill)) {
      return `/logos/${skill} - dark.svg`
    }
    return `/logos/${skill}.svg`
  }

  return (
    <Zoom in={true} key={index} style={{ transitionDelay: `${index * 50}ms` }}>
      <Paper
        elevation={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: { xs: "80px", sm: "100px" },
          height: { xs: "110px", sm: "120px" },
          borderRadius: 1,
          overflow: "hidden",
          border: "1px solid #e0e0e0",
          borderTop: `4px solid ${getBorderColor(skill, isDarkMode)}`,
          "&:hover .MuiAvatar-root": {
            transform: "scale(1.2)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            p: 1,
            width: "100%",
            height: "100%",
          }}
        >
          <Avatar
            src={getIconSrc()}
            alt={skill}
            sx={{
              width: 50,
              height: 50,
              mb: 2,
              transition: "transform 0.3s ease-in-out",
              "& .MuiAvatar-img": {
                objectFit: "contain",
                p: 0.5,
              },
            }}
          />
          <Typography variant="body2" align="center" fontWeight="medium">
            {skill}
          </Typography>
        </Box>
      </Paper>
    </Zoom>
  )
}

export default SkillPaper
