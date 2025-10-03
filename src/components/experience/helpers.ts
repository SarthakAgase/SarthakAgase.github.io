import { useTheme } from "@mui/material"

export const useSkillHelpers = () => {
  const theme = useTheme()

  const getBorderColor = (skill: string, isDarkMode: boolean) => {
    const colors: { [key: string]: string } = {
      NextJs: isDarkMode ? "#ffffff" : "#000000",
      React: "#61dafb",
      "React-Native": "#61dafb",
      NodeJs: "#3F863E",
      TypeScript: "#3178c6",
      Python: "#FFD43B",
      "Graph QL": "#E10098",
      gRPC: "#00B454",
      "Chakra UI": "#319795",
      VisX: "#000000",
      Cypress: "#5Cd09F",
      Jest: "#c21325",
      GitHub: "#000000",
      Jira: "#0052CC",
      Apollo: "#A270F3",
    }

    return colors[skill] || theme.palette.primary.main
  }

  return { getBorderColor }
}
