import { classyHeader } from 'src/styles/global'

export const LocalFooterStyles: {
  [key: string]: string[]
} = {
  root: ['p-8', 'lg:px-12'],
  ul: [''],
  litem: ['prose-sm', 'leading-9'],
  heading: [classyHeader, 'mb-3', 'block', 'w-full'],
  link: ['text-white', 'classy-hover', 'block'],
}