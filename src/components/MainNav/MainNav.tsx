import slugify from 'src/utilities/slugify';
import { MainNavStyles as styles } from './MainNav.styles';
import { dcnb } from 'cnbuilder';
import { NavItem } from './NavItem';
import { Container } from '../Container/Container';

interface MainNavProps {
  className?: string;
  navData: { items: { title: string, icon: string }[], meta: { direction: string, lang: string } }
}

export const MainNav = ({ navData }: MainNavProps) => {

  const navItems = navData.items.map((item: { title: string, icon: string }) => {
    return <NavItem key={slugify(item.title)} title={item.title} icon={item.icon} />
  });

  return (
    <Container center as="nav" className={dcnb(styles.root)}>
      <ul className={dcnb(styles.list)}>
        {navItems}
      </ul>
    </Container>
  );
}