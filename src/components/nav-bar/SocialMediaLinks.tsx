import { IconButton, Tooltip, useTheme } from "@mui/material"
import { Box } from "@mui/system"

const SOCIAL_MEDIA_LINKS = [
  {
    icon: "/logos/linkedin.svg",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sarthakagase/",
  },
  {
    icon: "/logos/github.svg",
    iconDark: "/logos/github-dark.svg",
    name: "GitHub",
    url: "https://github.com/SarthakAgase",
  },
  {
    icon: "/logos/instagram.svg",
    name: "Instagram",
    url: "https://www.instagram.com/agase_sarthak/",
  },
  {
    icon: "/logos/gmail.svg",
    name: "Gmail",
    url: "mailto:sarthak.agase@gmail.com",
  },
]

export const SocialMediaLinks = () => {
  const theme = useTheme()
  const isDarkMode = theme.palette.mode === "dark"

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "0.2rem" }}>
      {SOCIAL_MEDIA_LINKS.map((item) => (
        <Tooltip title={item.name} key={item.name}>
          <IconButton
            color="inherit"
            aria-label={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{
              mx: 0.5,
              "&:hover": {
                transform: "scale(1.5)",
                transition: "all 0.3s",
              },
              "&:active": {
                transform: "scale(1)",
              },
            }}
          >
            <img
              src={isDarkMode && item.iconDark ? item.iconDark : item.icon}
              alt={item.name}
              width="24"
              height="24"
            />
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  )
}
