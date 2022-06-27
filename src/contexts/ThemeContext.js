import React, { createContext, useState } from 'react'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { themeData } from '../data/themeData'

export const ThemeContext = createContext()

function ThemeContextProvider(props) {
    // eslint-disable-next-line
    const [theme, setTheme] = useState(themeData.theme)
    const [drawerOpen, setDrawerOpen] = useState(false)

    const MUITheme = createTheme({
        palette: {
          primary : {
            main: themeData.theme.s
          },
          secondary: {
            main: themeData.theme.p
          },
          warning: {
            main: themeData.theme.t
          }
        }
      });

    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

    const value = { theme, drawerOpen, setHandleDrawer }
    return (
        <ThemeContext.Provider value={value}> 
            <ThemeProvider theme={MUITheme}>
                {props.children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}


export default ThemeContextProvider