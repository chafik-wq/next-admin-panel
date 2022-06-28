import * as React from 'react'
import Head from 'next/head'

import CheckIfLoggin from './../src/utils/CheckIfLoggin'
import { Box } from '@mui/material';
import Main from '../src/components/AdminForm/Main'
import AdminPanelRootsContextProvider from './../src/contexts/AdminPanelRootsContext'
import { ThemeContext } from './../src/contexts/ThemeContext';

export default function Home() {

  
  const { theme } = React.useContext(ThemeContext);

  React.useEffect(() => {
    CheckIfLoggin()
  } , [])

  return (
    <>
      <Head>
        <title>Admin Panel</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        style={{color : theme.text}}
      >
        <AdminPanelRootsContextProvider>
          <Main />
        </AdminPanelRootsContextProvider>
      </Box>
    </>
  )
}