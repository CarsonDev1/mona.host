"use client"

import { PaletteMode, createTheme } from "@mui/material"

export interface Theme {
  palette: {
    mode: PaletteMode
  }
}

export const lightThem = createTheme({
  palette: {
    mode: 'light'
  }
})

export const darkThem = createTheme({
  palette: {
    mode: 'dark'
  }
})