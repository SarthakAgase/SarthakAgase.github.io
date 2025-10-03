import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import React, { createContext, useMemo, useState } from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import reportWebVitals from "./reportWebVitals"

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
})

const AppWrapper = () => {
  const [mode, setMode] = useState<"light" | "dark">("dark")
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
      },
    }),
    []
  )

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
