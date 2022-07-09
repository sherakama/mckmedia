import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Lobster+Two" rel="stylesheet" type="text/css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}