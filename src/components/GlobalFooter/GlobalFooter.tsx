import { Container } from '../Container';
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
      <Container center className="flex justify-between text-white px-6 lg:px-12">
        <div className="basis-1 flex-grow">@{year} McKMedia</div>
        <div><span>English (CA)</span></div>
      </Container>
    </div>
  )
}

