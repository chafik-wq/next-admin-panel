import '../styles/globals.css'
import './../src/css/LoginForm.css'
import ThemeContextProvider from './../src/contexts/ThemeContext'
import { CookiesProvider } from 'react-cookie';

function MyApp({ Component, pageProps }) {


  return (
    <CookiesProvider>
      <ThemeContextProvider>
          <Component {...pageProps} />
      </ThemeContextProvider>
    </CookiesProvider>
  )
}

export default MyApp
