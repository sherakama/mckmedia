import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head';
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>AirBnB Clone Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="noindex,follow" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
