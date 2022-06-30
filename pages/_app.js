import * as React from 'react'

import '../styles/globals.css'
import './../src/css/LoginForm.css'
import ThemeContextProvider from './../src/contexts/ThemeContext'
import { CookiesProvider } from 'react-cookie';

function MyApp({ Component, pageProps }) {

  // Remove this in production
  React.useEffect(() => {
    console.log('%cnext-admin-panel' , 'font-size: 25px;color: red')
    console.log('%cFollow or Fork in github please :(' , 'font-size: 15px')
    console.log('https://github.com/Chafik321')
  }, [])

  return (
    <CookiesProvider>
      <ThemeContextProvider>
          <Component {...pageProps} />
      </ThemeContextProvider>
    </CookiesProvider>
  )
}

export default MyApp
