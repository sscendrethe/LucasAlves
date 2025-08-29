'use client'

import { usePathname } from 'next/navigation'
import { Text } from '@/components/atoms/Text'
import { Heading } from '@/components/atoms/Heading'
import styles from './styles.module.scss'

export interface ArticleProps {
  title?: string
  text?: string
  video?: string
  hasBreadcrumb?: boolean
  firstButtonLabel?: string
  secondButtonLabel?: string
  firstButtonHref?: string
  secondButtonHref?: string
}

export const Article = ({
  text,
  video,
}: ArticleProps) => {
  const pathname = usePathname()
  const contactLink = '/contato'

  return (
    <section className={styles.article} aria-labelledby="article-title">
      <div className={styles.article__contentWrapper}>
        <div className={styles.article__heading}>
          <Heading align="left" weight="900" id="article-title">
            <span className={styles.orange}>Descubra nossa&nbsp;</span>
            <span className={styles.vividorange}>agilidade</span>
            <span className={styles.orange}> e&nbsp;</span>
            <span className={styles.vividorange}>competência</span>
            <span className={styles.orange}> em minutos</span>
          </Heading>
          <Text className={styles.article__text} align="left" color="white" weight="400">
            {text || ''}&nbsp;
          </Text>
          </div>
        <div className={styles.article__mediaWrapper}>
          <video autoPlay loop muted playsInline className={styles.article__video}>
            <source src={video} type="video/mp4" />
            <track kind="captions" label="no captions" />
          </video>
      </div>
    </div>
    </section>
  )
}