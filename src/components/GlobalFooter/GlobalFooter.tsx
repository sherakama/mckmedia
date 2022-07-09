import { Container } from '../Container';
import Link from 'next/link';
import { GlobalFooterStyles as styles } from './GlobalFooter.styles';
import { dcnb } from 'cnbuilder';

interface GlobalFooterInterface {
  sticky?: boolean;
  className?: string;
}

export const GlobalFooter = ({ sticky = false, className }: GlobalFooterInterface) => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className={dcnb(styles.root, className, (sticky ? styles.sticky : ''))}>
      <Container center className="md:flex justify-between text-white">
        <div className="basis-1 flex-grow">@{year} McKMedia • <Link href={'#'} className="hocus:underline"><a>Privacy</a></Link> • <Link href={'#'}><a>Terms</a></Link></div>
        <div><Link href={'#'}><a>English (CA)</a></Link></div>
      </Container>
    </div>
  )
}

