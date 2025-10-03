export type Skill = {
  category: string
  items: string[]
}

export type ExperienceDetails = {
  company: string
  position: string
  location: string
  period: string
  responsibilities: string[]
  skills: Skill[]
}
