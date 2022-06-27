import * as React from 'react'
import Head from 'next/head'

import CheckIfLoggin from './../src/utils/CheckIfLoggin'
import { Box } from '@mui/material';
import Main from '../src/components/AdminForm/Main'
import AdminPanelRootsContextProvider from './../src/contexts/AdminPanelRootsContext'

export default function Home() {

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
      >
        <AdminPanelRootsContextProvider>
          <Main />
        </AdminPanelRootsContextProvider>
      </Box>
    </>
  )
}