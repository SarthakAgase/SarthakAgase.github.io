import { Grid } from "@mui/material"
import SectionHeader from "../SectionHeader"
import CertificationCard from "./CertificationCard"
import { CERTIFICATIONS_DATA } from "./constants"

const Certifications = () => (
  <SectionHeader headerText={"Certificates"} id={"certificates"}>
    <Grid container spacing={3} mb={{ xs: 7, md: 0 }}>
      {CERTIFICATIONS_DATA.map((certification, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <CertificationCard certification={certification} />
        </Grid>
      ))}
    </Grid>
  </SectionHeader>
)

export default Certifications
