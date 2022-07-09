import { Container } from 'src/components/Container/Container'
import { Masthead } from 'src/components/Masthead';
import { GlobalFooter } from 'src/components/GlobalFooter';
import { LocalFooter } from 'src/components/LocalFooter';
import { LogoBanner } from 'src/components/LogoBanner';
import { classyHeader } from 'src/styles/global';
import Link from 'next/link';

export default function Home() {

  return (
    <>
      <header className="">
        <Masthead />
        <LogoBanner />
      </header>

      <main className="bg-neutral-800 border-y border-color-neutral-500">
        <Container center className="text-center py-8">
          <h2 className={classyHeader}> Get in touch</h2>
          <address className="text-white not-italic prose-lg p-3">
            McKMedia <br />
            38355 Summit&lsquo;s View Drive.<br />
            Squamish, BC
          </address>

          <p className="text-white"><Link href="tel:+17788399132"><a className="hocus:underline">+1 778.839.9132</a></Link> - <Link href="https://twitter.com/sherakama/"><a className="hocus:underline">@sherakama</a></Link></p>
        </Container>
      </main>

      <footer className="bg-neutral-800">
        <LocalFooter className="" />
        <GlobalFooter />
      </footer>
    </>
  )
}
