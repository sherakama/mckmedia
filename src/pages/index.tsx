import { Container } from 'src/components/Container/Container'
import { Heading } from 'src/components/Heading'
import { Grid } from 'src/components/Grid';
import { Masthead } from 'src/components/Masthead';
import { MainNav } from 'src/components/MainNav';

import navItems from '../data/main-nav.json';

export default function Home() {
  return (
    <>
      <header>
        <Masthead />
        <MainNav navData={navItems} />
      </header>

      <main>
        <Container center>
          <Heading as="h1">
            Air BnB Clone
          </Heading>

          <Grid sm={2} md={3} lg={4} xl={5} gap={4}>
            <p className="bg-orange-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum modi eos exercitationem labore tenetur asperiores quo ratione beatae mollitia harum dolorum quis perferendis repellat corrupti, vitae amet quibusdam rerum.</p>
            <p className="bg-orange-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum modi eos exercitationem labore tenetur asperiores quo ratione beatae mollitia harum dolorum quis perferendis repellat corrupti, vitae amet quibusdam rerum.</p>
            <p className="bg-orange-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum modi eos exercitationem labore tenetur asperiores quo ratione beatae mollitia harum dolorum quis perferendis repellat corrupti, vitae amet quibusdam rerum.</p>
            <p className="bg-orange-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum modi eos exercitationem labore tenetur asperiores quo ratione beatae mollitia harum dolorum quis perferendis repellat corrupti, vitae amet quibusdam rerum.</p>
            <p className="bg-orange-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum modi eos exercitationem labore tenetur asperiores quo ratione beatae mollitia harum dolorum quis perferendis repellat corrupti, vitae amet quibusdam rerum.</p>
            <p className="bg-orange-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum modi eos exercitationem labore tenetur asperiores quo ratione beatae mollitia harum dolorum quis perferendis repellat corrupti, vitae amet quibusdam rerum.</p>
            <p className="bg-orange-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum modi eos exercitationem labore tenetur asperiores quo ratione beatae mollitia harum dolorum quis perferendis repellat corrupti, vitae amet quibusdam rerum.</p>
            <p className="bg-orange-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum modi eos exercitationem labore tenetur asperiores quo ratione beatae mollitia harum dolorum quis perferendis repellat corrupti, vitae amet quibusdam rerum.</p>
            <p className="bg-orange-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum modi eos exercitationem labore tenetur asperiores quo ratione beatae mollitia harum dolorum quis perferendis repellat corrupti, vitae amet quibusdam rerum.</p>
          </Grid>

        </Container>
      </main>

      <footer>
        <Container center>
          Footer goes here.
        </Container>
      </footer>
    </>
  )
}
