import { Box, Paper, Tooltip, Typography } from "@mui/material"
import { ExperienceDetails } from "./types"

type ExperienceCardHeaderProps = {
  experienceDetails: ExperienceDetails
}

const ExperienceCardHeader = ({
  experienceDetails,
}: ExperienceCardHeaderProps) => {
  return (
    <>
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "flex-end" },
          gap: { xs: "0px", md: "10px" },
        }}
      >
        <Tooltip title="Visit company website" arrow placement="top">
          <Box
            component="a"
            href="https://rajasoftwarelabs.com/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              textDecoration: "none",
              color: "inherit",
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            {experienceDetails.company}
          </Box>
        </Tooltip>
        <Typography variant="subtitle1" color="text.secondary" component="span">
          {experienceDetails.location}
        </Typography>
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
        }}
      >
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {experienceDetails.position}
        </Typography>
        <Paper
          color="primary"
          sx={{
            fontWeight: "bold",
            display: "block",
            py: 0.1,
            px: 2,
          }}
        >
          {experienceDetails.period}
        </Paper>
      </Box>
    </>
  )
}

export default ExperienceCardHeader
