import ExpandLessIcon from "@mui/icons-material/ExpandLess"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useTheme,
} from "@mui/material"
import { ReactNode } from "react"

type SkillAccordionProps = {
  expanded: boolean
  onChange: (event: React.SyntheticEvent, isExpanded: boolean) => void
  title: string
  icon: ReactNode
  children: ReactNode
}

const SkillAccordion = ({
  expanded,
  onChange,
  title,
  icon,
  children,
}: SkillAccordionProps) => {
  const theme = useTheme()
  return (
    <Accordion
      expanded={expanded}
      onChange={onChange}
      elevation={0}
      sx={{
        "&:before": { display: "none" },
        backgroundColor: "transparent",
        border: expanded ? `2px solid ${theme.palette.divider}` : "none",
        borderRadius: expanded ? "8px" : 0,
        padding: expanded ? "0 8px" : 0,
        mb: 1,
      }}
    >
      <AccordionSummary
        expandIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        sx={{
          padding: 0,
          "& .MuiAccordionSummary-content": {
            margin: "12px 0",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {icon}
          <Typography variant="h6">{title}</Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: "0 16px 16px" }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "flex-start",
          }}
        >
          {children}
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}

export default SkillAccordion
