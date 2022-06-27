import '../styles/globals.css'
import './../src/css/LoginForm.css'
import ThemeContextProvider from './../src/contexts/ThemeContext'

function MyApp({ Component, pageProps }) {


  return (
    <ThemeContextProvider>
        <Component {...pageProps} />
    </ThemeContextProvider>
  )
}

export default MyApp
