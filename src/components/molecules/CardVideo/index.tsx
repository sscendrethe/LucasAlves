import { useEffect, useState } from 'react'
import { LargeButton } from '@/components/atoms/Largebutton';
import styles from './styles.module.scss'

export interface CardProps {
  image: { url: string }
  title?: string
  link?: string
  className?: string
}

export const CardVideo = ({
  image,
  title,
  link,
  className,
}: CardProps) => {
  const [decodedTitle, setDecodedTitle] = useState<string>('')

  useEffect(() => {
    if (title) {
      const txt = document.createElement('textarea')
      txt.innerHTML = title
      setDecodedTitle(txt.value)
    }
  }, [title])

  const cardStyle = [styles.card, className].join(' ')

  return (
    <article className={cardStyle} aria-label={decodedTitle}>
      <div
        className={styles.card__image}
        style={{ backgroundImage: image?.url ? `url(${image.url})` : 'none' }}
      />
      <div className={styles.card__player}>
        <LargeButton link={link} title={decodedTitle} />
      </div>
    </article>
  )
}