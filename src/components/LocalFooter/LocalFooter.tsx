import { Container } from '../Container';
import Link from 'next/link';
import { LocalFooterStyles as styles } from './LocalFooter.styles';
import { dcnb } from 'cnbuilder';
import { Heading } from '../Heading';
import { Grid } from '../Grid';

interface LocalFooterInterface {
  className?: string;
}

export const LocalFooter = ({ className }: LocalFooterInterface) => {

  return (
    <Container as="nav" center className={dcnb(styles.root, className)}>
      <Grid sm={2} lg={4} gap={8}>
        <ul className={dcnb(styles.ul)}>
          <li><Heading as="h4" className={dcnb(styles.heading)}>Drupal</Heading></li>
          <li className={dcnb(styles.litem)}><Link href={'#'}><a className={dcnb(styles.link)}>Content Modelling</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={'#'}><a className={dcnb(styles.link)}>Configuration Management</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={'#'}><a className={dcnb(styles.link)}>Custom Module Development</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={'#'}><a className={dcnb(styles.link)}>Custom Theme Development</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={'#'}><a className={dcnb(styles.link)}>Drupal Hosting</a></Link></li>
        </ul>

        <ul className={dcnb(styles.ul)}>
          <li><Heading as="h4" className={dcnb(styles.heading)}>Wordpress</Heading></li>
          <li className={dcnb(styles.litem)}><Link href={'#'}><a className={dcnb(styles.link)}>Content Modelling</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={'#'}><a className={dcnb(styles.link)}>Custom Wordpress Themes</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={'#'}><a className={dcnb(styles.link)}>Custom Wordpress Plugins</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={'#'}><a className={dcnb(styles.link)}>Gutenberg</a></Link></li>
        </ul>

        <ul className={dcnb(styles.ul)}>
          <li><Heading as="h4" className={dcnb(styles.heading)}>React</Heading></li>
          <li className={dcnb(styles.litem)}><Link href={'#'}><a className={dcnb(styles.link)}>Gatsby Development</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={'#'}><a className={dcnb(styles.link)}>NextJS Development</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={'#'}><a className={dcnb(styles.link)}>Redux</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={'#'}><a className={dcnb(styles.link)}>Serverless</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={'#'}><a className={dcnb(styles.link)}>JAM Stack</a></Link></li>
        </ul>

        <ul className={dcnb(styles.ul)}>
          <li><Heading as="h4" className={dcnb(styles.heading)}>Headless CMS</Heading></li>
          <li className={dcnb(styles.litem)}><Link href={'#'}><a className={dcnb(styles.link)}>API Development</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={'#'}><a className={dcnb(styles.link)}>Microservices</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={'#'}><a className={dcnb(styles.link)}>Contentful</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={'#'}><a className={dcnb(styles.link)}>Static Site Generation</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={'#'}><a className={dcnb(styles.link)}>Single Page Application</a></Link></li>
        </ul>
      </Grid>
    </Container>
  )
}

