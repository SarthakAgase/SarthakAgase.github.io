import { Box, Container } from "@mui/material"
import { Suspense } from "react"
import Achievements from "./components/achievements/Achievements"
import Certifications from "./components/Certifications/Certifications"
import Education from "./components/education/Education"
import Experience from "./components/experience/Experience"
import Introduction from "./components/Introduction"
import { NAVBAR_HEIGHT } from "./components/nav-bar/constants"
import NavBar from "./components/nav-bar/NavBar"

const App = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <NavBar />

      <Box component="main" sx={{ flexGrow: 1, mt: `${NAVBAR_HEIGHT}px` }}>
        <Container maxWidth="lg">
          <Introduction />
          <Suspense
            fallback={<Box sx={{ minHeight: { xs: 0, md: "100vh" } }} />}
          >
            <Box sx={{ minHeight: { xs: 50, md: "100vh" } }} />
            <Education />
            <Box sx={{ minHeight: { xs: 50, md: "100vh" } }} />
            <Experience />
            <Box sx={{ minHeight: { xs: 50, md: "100vh" } }} />
            <Achievements />
            <Box sx={{ minHeight: { xs: 50, md: "100vh" } }} />
            <Certifications />
          </Suspense>
        </Container>
      </Box>
    </Box>
  )
}

export default App
