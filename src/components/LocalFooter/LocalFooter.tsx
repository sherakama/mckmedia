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
      <Grid md={4} gap={8}>
        <ul className={dcnb(styles.ul)}>
          <li><Heading as="h4" className={dcnb(styles.heading)}>Support</Heading></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a className={dcnb(styles.link)}>Help Centre</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a className={dcnb(styles.link)}>AirCover</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a className={dcnb(styles.link)}>Safety information</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a className={dcnb(styles.link)}>Supporting people with disabilities</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a className={dcnb(styles.link)}>Cancellation options</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a className={dcnb(styles.link)}>Our COVID-19 Response</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a className={dcnb(styles.link)}>Report a neighbourhood concern</a></Link></li>
        </ul>

        <ul className={dcnb(styles.ul)}>
          <li><Heading as="h4" className={dcnb(styles.heading)}>Community</Heading></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a className={dcnb(styles.link)}>Airbnb.org: disaster relief housing</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a className={dcnb(styles.link)}>Support Afghan refugees</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a className={dcnb(styles.link)}>Combating discrimination</a></Link></li>
        </ul>

        <ul className={dcnb(styles.ul)}>
          <li><Heading as="h4" className={dcnb(styles.heading)}>Hosting</Heading></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a className={dcnb(styles.link)}>Try hosting</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a className={dcnb(styles.link)}>AirCover for Hosts</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a className={dcnb(styles.link)}>Explore hosting resources</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a className={dcnb(styles.link)}>Visit our community forum</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a className={dcnb(styles.link)}>How to host responsibly</a></Link></li>
        </ul>

        <ul className={dcnb(styles.ul)}>
          <li><Heading as="h4" className={dcnb(styles.heading)}>About</Heading></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a className={dcnb(styles.link)}>Newsroom</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a className={dcnb(styles.link)}>Learn about new features</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a className={dcnb(styles.link)}>Letter from our founders</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a className={dcnb(styles.link)}>Careers</a></Link></li>
          <li className={dcnb(styles.litem)}><Link href={''}><a className={dcnb(styles.link)}>Investors</a></Link></li>
        </ul>
      </Grid>
    </Container>
  )
}

