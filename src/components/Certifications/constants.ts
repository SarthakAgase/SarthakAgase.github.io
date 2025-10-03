import { ICertification } from "./types"

export const CERTIFICATIONS_DATA: ICertification[] = [
  {
    courseName: "IBM Data Science",
    validationLink:
      "https://coursera.org/verify/professional-cert/V9MVXSJ93MRO",
    certificateImage: "/certificates/IBM-Data Science.jpg",
    issuer: "Coursera",
    year: "2024",
    issuerLogo: "/logos/coursera.svg",
  },
  {
    courseName: "Machine Learning A-Z",
    validationLink:
      "https://www.udemy.com/certificate/UC-0e4196cd-3258-4fca-913d-a046b096d329/",
    certificateImage: "/certificates/Udemy-ML.jpg",
    issuer: "Udemy",
    year: "2023",
    issuerLogo: "/logos/udemy - light.svg",
    issuerLogoDark: "/logos/Udemy - dark.svg",
  },
  {
    courseName: "GraphQL Developer",
    validationLink:
      "https://www.apollographql.com/tutorials/certifications/2e182ce7-d190-40f1-9f02-90417f1bc4fc",
    certificateImage: "/certificates/Apollo-GraphQL.jpg",
    issuer: "Apollo",
    year: "2025",
    issuerLogo: "/logos/Apollo.svg",
  },
]
