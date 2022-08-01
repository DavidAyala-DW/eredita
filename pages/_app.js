import '../styles/globals.scss'
import {AppProvider } from "../helpers/Context";
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    
    <AppProvider>
      <Script src="//cdn.storerocket.io/widget.js"/>
      <Component {...pageProps} />
    </AppProvider>    
  )
}

export default MyApp
