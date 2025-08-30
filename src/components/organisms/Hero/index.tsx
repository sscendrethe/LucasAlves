'use client'

import { useRouter, usePathname } from 'next/navigation'
import { IconArrowRight, IconUsers, IconSparkles } from '@tabler/icons-react'
import { Text } from '@/components/atoms/Text'
import { Button } from '@/components/atoms/Buttons'
import { Heading } from '@/components/atoms/Heading'
import { NeonArcPair } from '@/components/molecules/NeonArcPair' // ⟵ novo import
import styles from './styles.module.scss'

export interface HeroProps {
  title?: string
  text?: string
  video?: string
  hasBreadcrumb?: boolean
  firstButtonLabel?: string
  secondButtonLabel?: string
}

export const Hero = ({
  text,
  video,
  firstButtonLabel,
  secondButtonLabel,
}: HeroProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const contactLink = '/contato'

  const goSobreMim = () => router.push('/sobre-mim')

  const goContato = () => {
    if (pathname === contactLink) {
      const el = document.querySelector('#Contact')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    router.push(contactLink)
  }

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.hero__contentWrapper}>
        <div className={styles.hero__heading}>
          <Heading align="left" weight="900" id="hero-title">
            <span className={styles.gray}>Entre no&nbsp;</span>
            <span className={styles.orange}>Futuro Digital</span>
            <span className={styles.gray}> e&nbsp;</span>
            <span className={styles.orange}>Inove</span>
            <span className={styles.gray}> com a gente</span>
          </Heading>

          <Text className={styles.hero__text} align="left" color="gray" weight="400">
            {text || ''}&nbsp;
          </Text>

          <div className={styles.hero__buttons}>
            <Button
              hasIcon={false}
              icon={IconArrowRight}
              iconColor="white"
              iconSize={24}
              iconPosition="right"
              label={firstButtonLabel}
              variant="primary"
              isButton={true}
              useButtonStyle={true}
              type="button"
              onClick={goSobreMim}
            />

            <Button
              label={secondButtonLabel}
              variant="tertiary"
              isButton={true}
              useButtonStyle={true}
              type="button"
              onClick={goContato}
            />
          </div>
        </div>

        <div className={styles.hero__mediaWrapper}>
          <video autoPlay loop muted playsInline className={styles.hero__video}>
            <source src={video} type="video/mp4" />
            <track kind="captions" label="no captions" />
          </video>

          <div className={styles.hero__countersWrapper}>
            {/* ⟵ Substituição dos Counters pelo NeonArcPair (apenas 2 itens) */}
            <NeonArcPair
              items={[
                { end: 100, prefix: '+', label: 'Clientes', icon: IconUsers, duration: 2500 },
                { end: 150,  prefix: '+', label: 'Projetos', icon: IconSparkles, duration: 2000 },
              ]}
              size={100}
              stroke={8}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

