import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import SchoolIcon from "@mui/icons-material/School"
import {
  Card,
  CardContent,
  Divider,
  Paper,
  Typography,
  useTheme,
} from "@mui/material"
import { Box } from "@mui/system"
import { EDUCATIONAL_DETAILS } from "./constants"
import { EducationalDetails } from "./types"

type InstituteDetailsCardProps = {
  index: number
  educationalDetails: EducationalDetails
}

const InstituteDetailsCard = ({
  educationalDetails,
  index,
}: InstituteDetailsCardProps) => {
  const theme = useTheme()

  return (
    <Box
      key={index}
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: index % 2 === 0 ? "row" : "row-reverse",
        },
        mb: { xs: EDUCATIONAL_DETAILS.length - 1 === index ? 1 : 7, md: 2 },
        position: "relative",
      }}
    >
      {/* Timeline dot */}
      <Box
        sx={{
          position: "absolute",
          left: { xs: "8px", md: "50%" },
          transform: { xs: "none", md: "translateX(-50%)" },
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          backgroundColor: "background.paper",
          border: "3px solid",
          borderColor: "primary.main",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
          top: { xs: "0", md: "50%" },
          marginTop: { xs: "0", md: "-15px" },
        }}
      >
        <SchoolIcon color="primary" sx={{ fontSize: 16 }} />
      </Box>
      {index < EDUCATIONAL_DETAILS.length - 1 && (
        <Box
          sx={{
            position: "absolute",
            left: { xs: "7px", md: "50%" },
            transform: { xs: "none", md: "translateX(-50%)" },
            width: "30px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
            top: { xs: "22px", md: `calc(50% + 22px)` },
            marginTop: { xs: "0", md: "-15px" },
          }}
        >
          <KeyboardArrowUpIcon color="primary" sx={{ fontSize: 36 }} />
        </Box>
      )}

      {/* Date indicator */}
      <Box
        sx={{
          position: { xs: "relative", md: "absolute" },
          left: { xs: "45px", md: index % 2 === 0 ? "auto" : "0" },
          right: { xs: "auto", md: index % 2 === 0 ? "0" : "auto" },
          width: { xs: "auto", md: "45%" },
          textAlign: {
            xs: "left",
            md: index % 2 === 0 ? "right" : "left",
          },
          top: { xs: "-8px", md: "50%" },
          transform: { xs: "none", md: "translateY(-50%)" },
          display: { xs: "block", md: "none" },
          pl: { xs: 0, md: index % 2 === 0 ? 0 : 3 },
          pr: { xs: 0, md: index % 2 === 0 ? 3 : 0 },
        }}
      >
        <Typography
          variant="h6"
          color="primary"
          sx={{
            fontWeight: "bold",
            display: "inline-block",
            backgroundColor: "background.paper",
            px: 2,
            py: 1,
            borderRadius: 1,
            boxShadow: 1,
          }}
        >
          {educationalDetails.period}
        </Typography>
      </Box>

      {/* Education card */}
      <Card
        elevation={3}
        sx={{
          width: { xs: "85%", md: "45%" },
          ml: { xs: "45px", md: index % 2 === 0 ? "auto" : "0" },
          mr: { xs: "0", md: index % 2 === 0 ? "0" : "auto" },
          borderLeft: {
            xs: `4px solid ${theme.palette.primary.main}`,
            md:
              index % 2 === 0
                ? `4px solid ${theme.palette.primary.main}`
                : "none",
          },
          borderRight: {
            md:
              index % 2 !== 0
                ? `4px solid ${theme.palette.primary.main}`
                : "none",
          },
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            {educationalDetails.institution}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            {educationalDetails.degree} | {educationalDetails.grade}
          </Typography>
          <Divider sx={{ my: 1.5 }} />
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="body1">
              {educationalDetails.location}
            </Typography>
            <Paper
              color="primary"
              sx={{
                fontWeight: "bold",
                display: { xs: "none", md: "block" },
                py: 0.1,
                px: 2,
              }}
            >
              {educationalDetails.period}
            </Paper>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export default InstituteDetailsCard
