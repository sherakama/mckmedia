import { Container } from 'src/components/Container/Container'
import { Heading } from 'src/components/Heading'
import { Columns } from 'src/components/Columns';
import { FlexBox } from 'src/components/FlexBox';
import { Grid } from 'src/components/Grid';

export default function Home() {
  return (
    <>
      <header>
        <Container center className="">
          Masthead goes here
        </Container>
      </header>

      <main>
        <Container center>
          <Heading as="h1">
            Air BnB Clone
          </Heading>

          <Columns columns={4} gap={4} className="mb-4">
            <p className="bg-orange-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum modi eos exercitationem labore tenetur asperiores quo ratione beatae mollitia harum dolorum quis perferendis repellat corrupti, vitae amet quibusdam rerum.</p>
            <p className="bg-orange-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum modi eos exercitationem labore tenetur asperiores quo ratione beatae mollitia harum dolorum quis perferendis repellat corrupti, vitae amet quibusdam rerum.</p>
            <p className="bg-orange-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum modi eos exercitationem labore tenetur asperiores quo ratione beatae mollitia harum dolorum quis perferendis repellat corrupti, vitae amet quibusdam rerum.</p>
            <p className="bg-orange-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum modi eos exercitationem labore tenetur asperiores quo ratione beatae mollitia harum dolorum quis perferendis repellat corrupti, vitae amet quibusdam rerum.</p>
          </Columns>

          <FlexBox direction="row" wrap="wrap" alignContent="start" gap={4} justifyContent="between" className="mb-4">
            <p className="bg-orange-400 flex-grow basis-[21%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum modi eos exercitationem labore tenetur asperiores quo ratione beatae mollitia harum dolorum quis perferendis repellat corrupti, vitae amet quibusdam rerum.</p>
            <p className="bg-orange-500 flex-grow basis-[21%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum modi eos exercitationem labore tenetur asperiores quo ratione beatae mollitia harum dolorum quis perferendis repellat corrupti, vitae amet quibusdam rerum.</p>
            <p className="bg-orange-600 flex-grow basis-[21%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum modi eos exercitationem labore tenetur asperiores quo ratione beatae mollitia harum dolorum quis perferendis repellat corrupti, vitae amet quibusdam rerum.</p>
            <p className="bg-orange-800 flex-grow basis-[21%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum modi eos exercitationem labore tenetur asperiores quo ratione beatae mollitia harum dolorum quis perferendis repellat corrupti, vitae amet quibusdam rerum.</p>
            <p className="bg-orange-800 flex-grow basis-[21%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum modi eos exercitationem labore tenetur asperiores quo ratione beatae mollitia harum dolorum quis perferendis repellat corrupti, vitae amet quibusdam rerum.</p>
            <p className="bg-orange-700 flex-grow basis-[21%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum modi eos exercitationem labore tenetur asperiores quo ratione beatae mollitia harum dolorum quis perferendis repellat corrupti, vitae amet quibusdam rerum.</p>
            <p className="bg-orange-600 flex-grow basis-[21%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum modi eos exercitationem labore tenetur asperiores quo ratione beatae mollitia harum dolorum quis perferendis repellat corrupti, vitae amet quibusdam rerum.</p>
            <p className="bg-orange-500 flex-grow basis-[21%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum modi eos exercitationem labore tenetur asperiores quo ratione beatae mollitia harum dolorum quis perferendis repellat corrupti, vitae amet quibusdam rerum.</p>
            <p className="bg-orange-400 flex-grow basis-[21%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum modi eos exercitationem labore tenetur asperiores quo ratione beatae mollitia harum dolorum quis perferendis repellat corrupti, vitae amet quibusdam rerum.</p>
          </FlexBox>

          <Grid sm={2} md={3} lg={4} xl={5} xxl={6} gap={4}>
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
