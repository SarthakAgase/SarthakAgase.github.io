import { ExperienceDetails } from "./types"

export const EXPERIENCE_DETAILS: ExperienceDetails[] = [
  {
    company: "Raja Software Labs",
    position: "Intern — Software Engineer",
    location: "Pune, Maharashtra",
    period: "July 2024 — Ongoing",
    responsibilities: [
      "Worked on a <strong>full-stack web application</strong> having <strong>Next.js</strong>, <strong>gRPC</strong>, <strong>Ably</strong>, <strong>GraphQL</strong>, with comprehensive <strong>unit and E2E testing</strong> via <strong>Jest and <strong>Cypress</strong>.",
      "<strong>Redesigned navigation architecture</strong> in Next.js, cutting <strong>initial load time by 50%</strong> and improving <strong>FCP from 6s to under 2s</strong>, significantly enhancing user experience.",
      "<strong>Optimized backend performance</strong> by tuning <strong>Snowflake connection pooling</strong> and session management, preventing token expiry and improving system reliability.",
      "Developed <strong>dynamic, reusable data visualization components</strong> using <strong>Visx</strong> and <strong>Chakra UI</strong>. Managed a <strong>shared UI component library</strong> and implemented a <strong>generic filtering system</strong>.",
    ],
    skills: [
      {
        category: "JavaScript Frameworks",
        items: ["NextJs", "React", "React-Native", "NodeJs"],
      },
      {
        category: "Languages and Technologies",
        items: ["TypeScript", "Python", "Graph QL", "gRPC"],
      },
      {
        category: "UI Libraries and Testing Frameworks",
        items: ["Chakra UI", "VisX", "Cypress", "Jest"],
      },
      {
        category: "Development Tools",
        items: ["GitHub", "Jira", "Apollo"],
      },
    ],
  },
]
