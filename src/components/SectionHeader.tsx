import { Typography } from "@mui/material"
import { Box, SxProps, Theme } from "@mui/system"
import { JSX } from "react"
import { SECTION_CONTAINER_STYLINGS } from "./constants"

type SectionHeaderProps = {
  id: string
  headerText: string
  children: JSX.Element
  headerProps?: SxProps<Theme>
}

const SectionHeader = ({
  id,
  children,
  headerText,
  headerProps,
}: SectionHeaderProps) => {
  return (
    <Box id={id} sx={SECTION_CONTAINER_STYLINGS}>
      <Typography
        variant="h3"
        fontSize={{ xs: 40, md: 50 }}
        gutterBottom
        sx={{ mb: 4, ...headerProps }}
        fontFamily={"Courier New, monospace"}
      >
        {headerText}
      </Typography>
      {children}
    </Box>
  )
}

export default SectionHeader
