'use client'
import { createTheme } from "@mui/material";
import { green, orange, purple } from "@mui/material/colors";


export const theme = createTheme({
  palette: {
    primary: {
      main: purple[100],
    },
    secondary: {
      main: '#f44336',
    },
    text: {
      primary: green[900]
    }
  },
})