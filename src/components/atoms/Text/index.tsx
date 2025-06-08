import styles from './styles.module.scss'

interface TextProps {
  align?: string
  children?: string
}
export const Text = ({ align = 'left', children }: TextProps) => {
  const textStyle = [styles[`text`], styles[`text--${align}`]].join(' ')
  return <p className={textStyle}>{children}</p>
}
