import React, { ReactNode } from "react";
import { dcnb, ClassValue } from 'cnbuilder';

export const containerElements = ['div', 'section', 'article', 'main', 'footer', 'aside', 'header', 'nav', 'form'];

export interface ContainerProps {
  as?: typeof containerElements[number];
  children?: ReactNode;
  className?: ClassValue;
  center?: boolean;
}

const Container = ({as = 'div', children, className, center, ...props}: ContainerProps) => {
  const styles = ['container'];
  if (center) { styles.push('mx-auto') }
  return React.createElement(as, { className: dcnb(styles, className), ...props}, children);
}

export default Container