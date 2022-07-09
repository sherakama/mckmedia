import React from 'react';
import { MastheadStyles as styles } from './Masthead.styles';
import { dcnb } from 'cnbuilder';
import { Container } from '../Container';
import Link from 'next/link';
import { MailIcon } from '@heroicons/react/outline';

export const Masthead = () => {
  return (
    <div className={dcnb(styles.root)} >
      <Container center className={dcnb(styles.container)}>
        <div className="prose-sm">Howdy! Welcome to our site <Link href={'mailto:shea@mckmedia.ca'}><a className="classy-hover p-1"><MailIcon className="h-5 w-5 inline" />shea@mckmedia.ca</a></Link></div>
        <div className="prose-sm"><Link href={'#'}><a className="classy-hover p-1">Twitter</a></Link> <Link href={'#'}><a className="classy-hover p-1">LinkedIn</a></Link> <Link href={'#'}><a className="classy-hover p-1">GitHub</a></Link></div>
      </Container>
    </div>
  )
}