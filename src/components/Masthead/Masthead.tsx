import React from 'react';
import { MastheadStyles as styles } from './Masthead.styles';
import { dcnb } from 'cnbuilder';
import { Container } from '../Container';
import Link from 'next/link';
import { MailIcon } from '@heroicons/react/outline';
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Masthead = () => {
  const socialStyles = 'inline-block w-[1rem] md:w-4 mx-2 md:mx-1 pt-1';

  return (
    <div className={dcnb(styles.root)} >
      <Container center className={dcnb(styles.container)}>
        <div className="prose-sm text-center mb-2 md:mb-0">Howdy! Welcome to our site <Link href={'mailto:shea@mckmedia.ca'}><a className="classy-hover p-1"><MailIcon className="h-5 w-5 inline" /> shea@mckmedia.ca</a></Link></div>
        <div className="prose-sm text-center">
          <Link href={'https://twitter.com/sherakama'}>
            <a className={socialStyles}>
              <FontAwesomeIcon icon={faTwitter} /> <span className="sr-only">Twitter</span>
            </a>
          </Link>
          <Link href={'https://www.linkedin.com/in/sheamckinney/'}>
            <a className={socialStyles}>
              <FontAwesomeIcon icon={faLinkedinIn} /> <span className="sr-only">LinkedIn</span>
            </a>
          </Link>
          <Link href={'https://github.com/sherakama'}>
            <a className={socialStyles}>
              <FontAwesomeIcon icon={faGithub} /> <span className="sr-only">GitHub</span>
            </a>
          </Link>
        </div>
      </Container>
    </div>
  )
}