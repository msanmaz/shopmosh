import Document, { Head, Html, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {


    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="description" content="Designer Hoodies/Tshirts" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.moshapparel.com" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta property="og:image" content="https://www.attilahomes.com/_next/image?url=%2FATTILA(2).svg&w=2048&q=75" />
          <meta property="og:description"
            content="MOSH | das Label für Oversize T-Shirts, Oversize Hoodies und Oversize Sweatshirts" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="MOSH" />
          <meta name="facebook-domain-verification" content="mpcvva50tgvraocluv3s7inbhbd1oc" />
          <link rel="apple-touch-icon" sizes="180x180" href="/public/static/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/public/static/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/public/static/favicon-16x16.png" />
          <link rel="manifest" href="/public/static/site.webmanifest"/>
          <link rel="mask-icon" href="/public/static/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
