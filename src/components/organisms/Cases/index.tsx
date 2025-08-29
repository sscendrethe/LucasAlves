// src/components/organisms/MoreProjects/index.tsx
'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'
import { CardCTA } from '@/components/molecules/CardCTA'
import Modal from '@/components/molecules/Modal'
import { Presentation } from '@/components/organisms/Presentation'
import type { ServiceKey } from '@/components/organisms/Presentation'
import styles from './styles.module.scss'

export interface ProjectItem {
  id?: string
  projectName?: string
  text?:string
  link?: string
  image?: string         // pôster (fallback)
  video?: string         // ⬅️ NOVO: vídeo do card
  service?: ServiceKey
}

export interface MoreProjectsProps {
  projectItems?: ProjectItem[]
  title?: string
  text?: string
  image?: string
}

export const MoreProjects = ({ projectItems = [], title, text }: MoreProjectsProps) => {
  const pathname = usePathname()
  const [selectedService, setSelectedService] = useState<ServiceKey | null>(null)
  const isOpen = !!selectedService

  return (
    <section
      id="more-projects"
      aria-labelledby="more-projects-title"
      className={styles.projects}
    >
      <div className={styles.projects__intro} aria-hidden={isOpen}>
        <Heading id="more-projects-title" level="5" color="rgba(243, 137, 76, 0.422)" weight="800">
          {title}
        </Heading>
        <Text color="gray">{text}</Text>
      </div>

      <div className={styles.projects__container} aria-hidden={isOpen}>
        {projectItems
          .filter(({ link }) => link !== pathname)
          .map((item, idx) => {
            const key =
              item.id ??
              `${item.projectName ?? 'item'}-${item.link ?? item.service ?? ''}-${idx}`

            return (
              <CardCTA
                key={key}
                image={item.image}            
                video={item.video}
                text={item.text}            
                projectName={item.projectName}
                onClick={item.service ? () => setSelectedService(item.service!) : undefined}
                link={item.service ? undefined : item.link}
              />
            )
          })}
      </div>

      {isOpen && (
        <Modal open onClose={() => setSelectedService(null)}>
          <Presentation key={selectedService!} service={selectedService!} />
        </Modal>
      )}
    </section>
  )
}

