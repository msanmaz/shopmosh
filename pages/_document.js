import Document, { Head, Html, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {


    return (
      <Html lang="en">
        <Head>
                 <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="description" content="Designer Hoodies/Tshirts" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.relavoux.com" />
                <link rel="shortcut icon" href="/static/favicon.ico" />
                <meta property="og:image" content="https://www.attilahomes.com/_next/image?url=%2FATTILA(2).svg&w=2048&q=75" />
                <meta property="og:description"
                    content="RLVX | das Label für Oversize T-Shirts, Oversize Hoodies und Oversize Sweatshirts" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:site_name" content="RLVX" />
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
