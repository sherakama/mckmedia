import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=optional" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Lobster&display=optional" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Lobster+Two&display=optional" rel="stylesheet" type="text/css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}