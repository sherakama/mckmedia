import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>AirBnB Clone Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='bg-slate-400'>
        Header goes here
      </header>

      <main>
        <h1 className='text-3xl font-bold underline text-blue-400'>
          Air BnB Clone
        </h1>
      </main>

      <footer>
        Footer goes here.
      </footer>
    </>
  )
}
