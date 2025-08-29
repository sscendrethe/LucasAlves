import Link from 'next/link'
import { limitText } from '../../../utils/limitText/limitText'
import styles from './styles.module.scss'

export interface CardProps {
  image: { url: string }
  title?: string
  description?: string
  slug?: string
  className?: string
}

export const CardCase = ({
  image,
  title,
  description,
  slug = '#',
  className,
}: CardProps) => {
  const cardStyle = [styles.card, className].join(' ')

  return (
    <Link href={`${slug}/`} className={cardStyle}>
      <article
        className={styles.card__image}
        style={{ backgroundImage: `url(${image.url})` }}
      />
      <div className={styles.card__textContainer}>
        <div className={styles.card__heading}>
          <p className={styles.card__title}>{limitText(title ?? '', 127)}</p>
          <p className={styles.card__text}>
            {limitText(description ?? '', 215)}
          </p>
        </div>
      </div>
    </Link>
  )
}
