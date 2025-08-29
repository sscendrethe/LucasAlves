'use client'

import { usePathname } from 'next/navigation'
import { Text } from '@/components/atoms/Text'
import { Heading } from '@/components/atoms/Heading'
import { Animation } from '@/components/molecules/Animation'
import styles from './styles.module.scss'

export interface ArticleAnimationProps {
  title?: string
  text?: string
}

export const ArticleAnimation = ({
  text,
}: ArticleAnimationProps) => {
  const pathname = usePathname()
  const contactLink = '/contato'

  return (
    <section className={styles.articleanimation} aria-labelledby="articleanimation-title">
      <div className={styles.articleanimation__contentWrapper}>
        <div className={styles.articleanimation__heading}>
          <Heading align="left" weight="900" id="articleanimation-title">
            <span className={styles.orange}>Conheça mais da&nbsp;</span>
            <span className={styles.vividorange}>nossa missão</span>
          </Heading>
          <Text className={styles.articleanimation__text} align="left" color="darkgray" weight="400">
            {text || ''}&nbsp;
          </Text>
          </div>
          <div className={styles.articleanimation__mediaWrapper}>
          <Animation /> {/* ← Aqui está o componente substituindo o <video> */}
        </div>
    </div>
    </section>
  )
}