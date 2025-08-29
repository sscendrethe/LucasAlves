import Link from 'next/link'
import { IconBrandYoutube } from '@tabler/icons-react'
import styles from './styles.module.scss'

interface LargeButtonProps {
  link?: string
  title?: string
}

export const LargeButton = ({ link = '', title }: LargeButtonProps) => {
  return (
    <Link
      href={link}
      className={styles.button}
      aria-label={title}
      target="_blank"
    >
      <IconBrandYoutube stroke={1} size={48} color="white" aria-hidden="true" />
    </Link>
  )
}
