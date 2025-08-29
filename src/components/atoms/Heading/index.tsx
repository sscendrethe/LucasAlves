import { createElement } from 'react'
import styles from './styles.module.scss'
import { ReactNode } from 'react'

interface HeadingsProps {
  align?: string
  children?: React.ReactNode
  color?: string
  level?: string
  weight?: string
  id?: string
  className?: string
}
export const Heading = ({
  align,
  children,
  color,
  level,
  weight,
  id,
  className,
}: HeadingsProps) => {
  const headingStyle = [
    styles.heading,
    styles[`heading--${align}`],
    styles[`heading--${color}`],
    styles[`heading--h${level}`],
    styles[`heading--${weight}`],
    className,
  ].join(' ')

  const props = { className: headingStyle, id }
  const element = createElement('h' + level, props, children)

  return element
}
