// index.tsx
'use client'

import { IconUserHeart } from '@tabler/icons-react'
import { Icon as CustomIcon } from '@/components/ions/Icon'
import styles from './styles.module.scss'
import React from 'react'

export interface CardProps {
  // ⚠️ Pode ficar, mas evite usar quando o Card vier de Server → Client
  icon?: React.ComponentType<{ color?: string; size?: number | string; stroke?: number | string }>
  // ✅ caminho recomendado
  customIconElement?: React.ReactNode

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
  rating?: number // <- usado no story
}

export const CardFeedback = ({
  author,
  icon: Icon,
  customIconElement,
  title,
  description,
  backgroundColor,
  company,
  rating,
}: CardProps) => {
  const cardStyle = [styles.card, backgroundColor && styles[`card--${backgroundColor}`]].filter(Boolean).join(' ')

  return (
    <article aria-label={title} className={cardStyle}>
      <div aria-hidden="true" className={styles.card__icon}>
        {customIconElement
          ? customIconElement
          : Icon && <CustomIcon Icon={Icon} color="#FFFFFF" size={24} />}
      </div>

      <div className={styles.card__textContainer}>
        {description && <p className={styles.card__text}>{description}</p>}

        {author && (
          <div className={styles.card__author}>
            <IconUserHeart size={20} color="#ff8e07" />
            <span>{author}</span>
          </div>
        )}

        {company && <p className={styles.card__company}>{company}</p>}

      </div>
    </article>
  )
}
