import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      
      <Head>

        <link rel="shortcut icon" href="/favicon.webp" />        

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-J4YZD7MQ9W"  strategy="afterInteractive"></Script>
        <Script id="google-tag-manager">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());            
            gtag('config', 'G-J4YZD7MQ9W');
          `}
        </Script>
                
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}