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
      <Container className="flex" center>
        <Logo className="basis-1 flex-grow" />
        <ComboSearch className="basis-3 flex-grow" />
        <UserUtilityNav className="basis-1 flex-grow text-right" />
      </Container>
    </div>
  )
}