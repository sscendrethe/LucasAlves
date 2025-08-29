'use client'

import Link from 'next/link'
import type { MouseEventHandler } from 'react'
import styles from './styles.module.scss'
import { NeonArcPair } from '@/components/molecules/NeonArcPair'

interface CardProps {
  image?: string            // continua como pôster/fallback
  video?: string
  projectName?: string
  link?: string
  cta?: string
  text?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const CardCTA = ({
  image,
  video,
  text,
  projectName,
  link = '#',
  onClick,
}: CardProps) => {
  const content = (
    <>
      {/* MÍDIA DE FUNDO (vídeo OU imagem) */}
      <div className={styles.card__media}>
        {video ? (
          <video
            className={styles.card__video}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={image}
          >
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          <div
            className={styles.card__image}
            style={image ? { backgroundImage: `url(${image})` } : undefined}
          />
        )}
      </div>

      {/* TEXTO/HEADING POR CIMA */}
      <div className={styles.card__heading}>
          <p className={styles.card__text}>{text}</p>
        <div className={styles.card__title}>
          <p className={styles.card__projectName}>{projectName}</p>
        </div>
        <div className={styles.card__arc}>
          <NeonArcPair
          items={[
            { end: 1, prefix: '', label: '' },
          ]}
          size={80}
          stroke={6}
          />
      </div>
      </div>
    </>
  )

  return onClick ? (
    <button
      type="button"
      className={styles.card}
      onClick={onClick}
      aria-label={projectName}
    >
      {content}
    </button>
  ) : (
    <Link href={link} className={styles.card} aria-label={projectName}>
      {content}
    </Link>
  )
}