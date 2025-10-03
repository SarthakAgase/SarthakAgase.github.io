import { Typography, TypographyProps } from "@mui/material"
import React, { useEffect, useState } from "react"
import "./TypewriterText.css"

interface TypewriterTextProps extends Omit<TypographyProps, "children"> {
  text: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayAfterTyping?: number
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayAfterTyping = 1500,
  ...typographyProps
}) => {
  const [textIndex, setTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (isTyping) {
      if (displayText.length < text[textIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayText(text[textIndex].substring(0, displayText.length + 1))
        }, typingSpeed)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, delayAfterTyping)
        return () => clearTimeout(timeout)
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1))
        }, deletingSpeed)
        return () => clearTimeout(timeout)
      } else {
        setIsTyping(true)
        setTextIndex((prev) => (prev + 1) % text.length)
      }
    }
  }, [
    displayText,
    isTyping,
    text,
    textIndex,
    typingSpeed,
    deletingSpeed,
    delayAfterTyping,
  ])

  return (
    <Typography color="primary.main" {...typographyProps}>
      {displayText}
      <span className="cursor">|</span>
    </Typography>
  )
}

export default TypewriterText
