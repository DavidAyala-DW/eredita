import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      
      <Head>
        <link rel="shortcut icon" href="/favicon.webp" />        
        {/* <script
          type="text/javascript"
          src="//cdn.storerocket.io/widget.js"
          async
        ></script> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}