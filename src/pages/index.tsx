import Container from 'src/components/Layout/Container'
import Heading from 'src/components/Typography/Heading'
import Columns from '../components/Layout/Columns';

export default function Home() {
  return (
    <>
      <header>
        <Container center className=''>
          Masthead goes here
        </Container>
      </header>
      
      <main>
        <Container center>
          <Heading as="h1">
            Air BnB Clone
          </Heading>

          <Columns columns={3} gap={4}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, maiores? Expedita nulla vero aperiam iusto, quae necessitatibus quidem dolores consectetur perferendis commodi placeat id, laboriosam, mollitia quo officia assumenda modi.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, maiores? Expedita nulla vero aperiam iusto, quae necessitatibus quidem dolores consectetur perferendis commodi placeat id, laboriosam, mollitia quo officia assumenda modi.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, maiores? Expedita nulla vero aperiam iusto, quae necessitatibus quidem dolores consectetur perferendis commodi placeat id, laboriosam, mollitia quo officia assumenda modi.</p>
          </Columns>

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
