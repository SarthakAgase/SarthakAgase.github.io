import ArticleIcon from "@mui/icons-material/Article"
import BarChartIcon from "@mui/icons-material/BarChart"
import LinkIcon from "@mui/icons-material/Link"
import MicIcon from "@mui/icons-material/Mic"
import SchoolIcon from "@mui/icons-material/School"
import VerifiedIcon from "@mui/icons-material/Verified"
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Fade,
  Grid,
  Link,
  Paper,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material"
import SectionHeader from "../SectionHeader"
import { ACHIEVEMENTS_DATA } from "./constants"

const Achievements = () => {
  const theme = useTheme()

  return (
    <SectionHeader
      headerText={"Achievements"}
      id={"achievements"}
      headerProps={{ mb: { xs: 4, md: 4 } }}
    >
      <Box
        sx={{
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.02)",
          },
        }}
      >
        <Card
          elevation={4}
          sx={{
            position: "relative",
            overflow: "visible",
            padding: "10px",
            borderRadius: 2,
            "&:before": {
              content: '""',
              position: "absolute",
              top: -15,
              left: 20,
              width: 30,
              height: 30,
              borderRadius: "50%",
              backgroundColor: theme.palette.primary.main,
              boxShadow: `0 0 0 8px ${theme.palette.background.paper}`,
              zIndex: 1,
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: -15,
              left: 20,
              width: 30,
              height: 30,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2,
            }}
          >
            <ArticleIcon
              sx={{
                color: theme.palette.background.paper,
                fontSize: 18,
              }}
            />
          </Box>

          <CardContent sx={{ pt: 3 }}>
            <Box sx={{ maxWidth: { xs: "100%" } }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {ACHIEVEMENTS_DATA.title}
                </Typography>
                <Chip
                  icon={<SchoolIcon />}
                  label="IEEE"
                  color="primary"
                  sx={{
                    fontWeight: "bold",
                    mt: { xs: 2, sm: 0 },
                    height: 32,
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  color="text.secondary"
                  sx={{
                    display: { xs: "contents", md: "flex" },
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <ArticleIcon
                    fontSize="small"
                    sx={{ mr: { xs: 0.5, md: 1 } }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontStyle: "italic",
                      fontSize: { xs: "0.9rem", md: "1.1rem" },
                    }}
                  >
                    {ACHIEVEMENTS_DATA.paperTitle}
                  </Typography>
                </Box>
                <Tooltip title={ACHIEVEMENTS_DATA.viewPublicationTooltip} arrow>
                  <Button
                    variant="text"
                    color="primary"
                    startIcon={<LinkIcon />}
                    component={Link}
                    href={ACHIEVEMENTS_DATA.link}
                    target="_blank"
                    rel="noopener"
                    sx={{ textTransform: "none", padding: { xs: 0, md: 1 } }}
                  >
                    View Publication
                  </Button>
                </Tooltip>
              </Box>
            </Box>

            <Divider sx={{ mb: { xs: 1, md: 2 } }} />

            <Typography variant="body1" paragraph fontSize={"1.1rem"}>
              {ACHIEVEMENTS_DATA.description}
            </Typography>

            <Fade in={true} timeout={500}>
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  bgcolor:
                    theme.palette.mode === "dark"
                      ? "rgba(255,255,255,0.05)"
                      : "rgba(0,0,0,0.02)",
                  borderRadius: 2,
                  border: `1px solid ${theme.palette.divider}`,
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold">
                  Key Features:
                </Typography>

                <Grid container spacing={2} mt={"0.1rem"}>
                  <Grid item xs={12} md={6}>
                    <Paper
                      elevation={2}
                      sx={{
                        p: 2,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        padding: "20px",
                        position: "relative",
                        overflow: "hidden",
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                          transform: "scale(1.03)",
                        },
                        "&:after": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "5px",
                          height: "100%",
                          backgroundColor: theme.palette.primary.main,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mb: 1,
                        }}
                      >
                        <MicIcon color="primary" sx={{ mr: 1 }} />
                        <Typography
                          variant="subtitle1"
                          fontWeight="bold"
                          fontSize={"1.3rem"}
                        >
                          CNN Model
                        </Typography>
                      </Box>
                      <Typography variant="body2" fontSize={"1rem"}>
                        {ACHIEVEMENTS_DATA.highlights[0]}
                      </Typography>
                      <Box
                        sx={{
                          mt: "auto",
                          pt: 2,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <VerifiedIcon
                          fontSize="small"
                          color="success"
                          sx={{ mr: 0.5 }}
                        />
                        <Typography
                          variant="body2"
                          fontWeight="bold"
                          color="success.main"
                        >
                          96.48% Accuracy
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Paper
                      elevation={2}
                      sx={{
                        p: 2,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        padding: "20px",
                        overflow: "hidden",
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                          transform: "scale(1.03)",
                        },
                        "&:after": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "5px",
                          height: "100%",
                          backgroundColor: theme.palette.secondary.main,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mb: 1,
                        }}
                      >
                        <BarChartIcon color="secondary" sx={{ mr: 1 }} />
                        <Typography
                          variant="subtitle1"
                          fontWeight="bold"
                          fontSize={"1.3rem"}
                        >
                          Feature Extraction
                        </Typography>
                      </Box>
                      <Typography variant="body2" fontSize={"1rem"}>
                        {ACHIEVEMENTS_DATA.highlights[1]}
                      </Typography>
                      <Box
                        sx={{
                          mt: "auto",
                          pt: 2,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <VerifiedIcon
                          fontSize="small"
                          color="success"
                          sx={{ mr: 0.5 }}
                        />
                        <Typography
                          variant="body2"
                          fontWeight="bold"
                          color="success.main"
                        >
                          98.72% Accuracy
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                </Grid>
              </Paper>
            </Fade>
          </CardContent>
        </Card>
      </Box>
    </SectionHeader>
  )
}

export default Achievements
