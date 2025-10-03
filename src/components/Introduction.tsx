import FileDownloadIcon from "@mui/icons-material/FileDownload"
import { Box, Button, Grid, Typography } from "@mui/material"
import { SECTION_CONTAINER_STYLINGS } from "./constants"
import TypewriterText from "./TypewriterText"

const Introduction = () => {
  const profileImage = "/profile/profile-photo.png"

  return (
    <Box id="introduction" sx={SECTION_CONTAINER_STYLINGS}>
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        gap={{ xs: 1, md: 2 }}
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            alt="Sarthak Agase"
            src={profileImage}
            sx={{
              width: "clamp(450px, 100%, 550px)",
              height: "auto",
              display: "block",
            }}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <Box
            id="introduction"
            sx={{
              ...SECTION_CONTAINER_STYLINGS,
              textAlign: "start",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
              minHeight: { xs: "max-content", md: "80vh" },
            }}
          >
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
              marginBottom={0}
            >
              Hi, I am{" "}
              <Typography
                component="span"
                variant="h2"
                sx={{ color: "primary.main", fontWeight: "bold" }}
              >
                Sarthak
              </Typography>
              ,
            </Typography>
            <Typography variant="h4" component="h4" gutterBottom>
              Yet another{" "}
              <TypewriterText
                variant="h4"
                component="span"
                sx={{ display: { xs: "block", md: "inline" } }}
                text={[
                  "Software Engineer.",
                  "IT Graduate.",
                  "ML Enthusiast.",
                  "Cricketer.",
                  "Trekker.",
                ]}
              />
            </Typography>
            <Typography variant="body1">
              Totally filled with curiosity, I love turning ideas into web apps.
              Whether it's building scalable solutions, exploring machine
              learnings. Blending creativity with technology excites me, and
              right now I'm diving deep into Full Stack development and always
              up for exploring new domains.
            </Typography>
            <Button
              variant="contained"
              href="/resume/sarthak-agase-resume.pdf"
              download="sarthak-agase-resume.pdf"
              endIcon={<FileDownloadIcon />}
              sx={{ mt: 4 }}
            >
              Resume
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Introduction
