'use client'

import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'
import { CardFeedbackWrapper } from '@/components/organisms/CardFeedbackWrapper'
import styles from './styles.module.scss'

// as chaves precisam bater com as do Wrapper (ex.: 'star', 'heart')
type IconKey = 'star' | 'heart'

export interface ArticleFeedbacksProps {
  title?: string
  text?: string
  cardData: Array<{
    link: string
    description: string
    backgroundColor: string
    iconColor: string
    author: string
    company: string
    // ✅ apenas dados
    icon?: IconKey
    rating?: number
  }>
}

export const ArticleFeedbacks = ({ text, cardData }: ArticleFeedbacksProps) => {
  return (
    <section className={styles.article} aria-labelledby="article-title">
      <div className={styles.article__contentWrapper}>
        <div className={styles.article__heading}>
          <Heading align="left" weight="900" id="article-title">
            <span className={styles.orange}>Depoimentos&nbsp;</span>
            <span className={styles.vividorange}>reais</span>
          </Heading>

          <Text className={styles.article__text} align="left" color="gray" weight="400">
            {text || ''}
          </Text>

          <div className={styles.article__cardsWrapper}>
            {/* repassa dados serializáveis; o Wrapper cria o JSX */}
            <CardFeedbackWrapper cardData={cardData || []} />
          </div>
        </div>
      </div>
    </section>
  )
}
