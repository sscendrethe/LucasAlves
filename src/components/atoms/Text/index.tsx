import { ReactNode } from 'react';
import styles from './styles.module.scss'

interface TextProps {
  align?: string
  children?: ReactNode
  color?: string
  weight?: string
  className?: string
}
export const Text = ({
  align = 'left',
  children,
  color = 'darkgray',
  weight = '400',
  className = '',
}: TextProps) => {
  const textStyle = [
    styles[`text`],
    styles[`text--${align}`],
    styles[`text--${color}`],
    styles[`text--${weight}`],
    className,
  ].join(' ')
  return <p className={textStyle}>{children}</p>
}
