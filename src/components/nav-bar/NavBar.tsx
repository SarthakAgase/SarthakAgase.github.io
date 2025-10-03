import Brightness4Icon from "@mui/icons-material/Brightness4"
import Brightness7Icon from "@mui/icons-material/Brightness7"
import MenuIcon from "@mui/icons-material/Menu"
import {
  AppBar,
  Box,
  Collapse,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material"
import { useMediaQuery } from "@mui/system"
import { MouseEvent, useContext, useEffect, useState } from "react"
import { ColorModeContext } from "../.."
import { SocialMediaLinks } from "./SocialMediaLinks"

const NavBar = () => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      window.addEventListener("scroll", handleScroll)
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isMobileMenuOpen])

  const handleLogoClick = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{ bgcolor: "background.default", color: "text.primary" }}
      >
        <Container maxWidth="lg" disableGutters>
          <Toolbar>
            <Typography
              component="div"
              sx={{
                fontFamily: '"Courier New", monospace',
                fontWeight: "bold",
                letterSpacing: 1,
                display: "flex",
                alignItems: "center",
                fontSize: { xs: "1.5rem", md: "2.5rem" },
                cursor: "pointer",
                color: "inherit",
                flexGrow: 1,
                p: { xs: 0, md: "0.6rem" },
              }}
              onClick={handleLogoClick}
            >
              <Box component="span" sx={{ color: "primary.main", mr: 1 }}>
                #
              </Box>
              <Box component="span" sx={{ letterSpacing: 2 }}>
                SARTHAK AGASE
              </Box>
            </Typography>

            {!isMobile && (
              <Box sx={{ mr: 1 }}>
                <SocialMediaLinks />
              </Box>
            )}

            <Tooltip title="Toggle theme">
              <IconButton
                sx={{
                  ml: 1,
                  mr: { xs: 1, md: 0 },
                  "&:hover": {
                    color: "primary.main",
                    transform: "scale(1.5)",
                    transition: "all 0.3s",
                  },
                  "&:active": {
                    transform: "scale(1)",
                  },
                }}
                onClick={colorMode.toggleColorMode}
                color="inherit"
              >
                {theme.palette.mode === "dark" ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}
              </IconButton>
            </Tooltip>

            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleMobileMenuToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
          {isMobile && (
            <Collapse in={isMobileMenuOpen} timeout="auto" unmountOnExit>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  p: 2,
                  mr: 3,
                }}
              >
                <SocialMediaLinks />
              </Box>
            </Collapse>
          )}
        </Container>
      </AppBar>
    </>
  )
}

export default NavBar
