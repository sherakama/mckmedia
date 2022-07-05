import React from 'react';
import { MastheadStyles as styles } from './Masthead.styles';
import { dcnb } from 'cnbuilder';
import { Container } from '../Container';
import { Logo } from '../Logo';
import { ComboSearch } from '../ComboSearch';
import { UserUtilityNav } from '../UserUtilityNav';

export const Masthead = () => {
  return (
    <div className={dcnb(styles.root)} >
      <Container center className={dcnb(styles.container)}>
        <Logo className={dcnb(styles.logo)} />
        <ComboSearch className={dcnb(styles.search)} />
        <UserUtilityNav className={dcnb(styles.userNav)} />
      </Container>
    </div>
  )
}