import ArrowRightIcon from "@mui/icons-material/ArrowRight"
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material"

type ResponsibilitiesListProps = {
  responsibilities: string[]
}

const ResponsibilitiesList = ({
  responsibilities,
}: ResponsibilitiesListProps) => {
  return (
    <List dense disablePadding>
      {responsibilities.map((responsibility, idx) => (
        <ListItem key={idx} alignItems="flex-start" disableGutters>
          <ListItemIcon sx={{ minWidth: 24 }}>
            <ArrowRightIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={
              <span dangerouslySetInnerHTML={{ __html: responsibility }} />
            }
            primaryTypographyProps={{
              fontSize: "1.1rem",
              lineHeight: "1.65rem",
            }}
          />
        </ListItem>
      ))}
    </List>
  )
}

export default ResponsibilitiesList
