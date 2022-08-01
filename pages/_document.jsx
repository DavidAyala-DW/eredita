import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      
      <Head>
        <link rel="shortcut icon" href="/favicon.webp" />        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}