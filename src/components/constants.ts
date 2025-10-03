import { NAVBAR_HEIGHT } from "./nav-bar/constants"

export const SECTION_CONTAINER_STYLINGS = {
  minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  py: { xs: 0, md: 3 },
  px: { xs: 1.5, md: 3 },
  pr: { xs: 0 },
  scrollMarginTop: `${NAVBAR_HEIGHT}px`,
  scrollSnapAlign: "start",
}
