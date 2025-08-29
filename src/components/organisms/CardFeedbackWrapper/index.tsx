'use client'

import { CardFeedback } from '@/components/molecules/CardFeedback'
import styles from './styles.module.scss'
import { IconStarFilled, IconHeartFilled } from '@tabler/icons-react'
import React from 'react'

const ICONS = {
  star: IconStarFilled,
  heart: IconHeartFilled,
} as const

type IconKey = keyof typeof ICONS

type ServerSafeCardData = {
  link?: string
  label?: string
  secondaryColor?: string
  title?: string
  description?: string
  titleColor?: string
  backgroundColor?: string
  iconColor?: string
  author?: string
  company?: string

  // ✅ apenas dados serializáveis
  icon?: IconKey
  rating?: number
}

export interface CardFeedbackWrapperProps {
  cardData: ServerSafeCardData[]
}

export const CardFeedbackWrapper = ({ cardData }: CardFeedbackWrapperProps) => {
  return (
    <section className={styles.cards}>
      {cardData.map((card, index) => {
        // monta o ícone ou as estrelas aqui (no Client)
        const IconCmp = card.icon ? ICONS[card.icon] : null

        const customIconElement = IconCmp ? (
          <IconCmp size={20} color={card.iconColor} aria-hidden />
        ) : typeof card.rating === 'number' ? (
          <div style={{ display: 'flex', gap: 10 }}>
            {Array.from({ length: Math.max(0, card.rating) }).map((_, i) => (
              <IconStarFilled key={i} size={15} color={card.iconColor ?? 'orange'} />
            ))}
          </div>
        ) : undefined

        return (
          <CardFeedback
            key={`${card.author ?? 'anon'}-${index}`}
            link={card.link}
            description={card.description}
            backgroundColor={card.backgroundColor}
            iconColor={card.iconColor}
            author={card.author}
            company={card.company}
            // repasse como elemento (mas criado no Client)
            customIconElement={customIconElement}
            // se o CardFeedback passar a exibir rating, pode repassar também
            rating={card.rating}
          />
        )
      })}
    </section>
  )
}
