import * as React from 'react'
import Head from 'next/head'

import LoginForm from './../../src/components/LoginForm/LoginForm'
import Grid from '@mui/material/Grid';

const index = () => {

  return (
    <>
      <Head>
        <title>Login | Admin Panel</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Grid 
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}>
        <LoginForm />
      </Grid>
    </>
  )
}

export default index