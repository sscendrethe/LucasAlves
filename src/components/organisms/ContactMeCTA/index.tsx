import { IconArrowRight } from '@tabler/icons-react'
import { Button } from '@/components/atoms/Buttonstemp'
import styles from './styles.module.scss'
import { Logo } from '@/components/ions/Logo'

interface ContactMeCTAProps {
  backgroundImage?: string
  backgroundColor?: string
}

export const ContactMeCTA = ({
  backgroundImage,
  backgroundColor,
}: ContactMeCTAProps) => {
  return (
    <section
      aria-labelledby="title"
      className={styles.contactMe}
      style={{
        background: `url(${backgroundImage}) no-repeat center center / cover`,
      }}
    >
      <div
        className={styles.contactMe__overlay}
        style={{
          backgroundColor: backgroundColor,
        }}
      />
      <div className={styles.contactMe}>
      <p id="title" className={styles.contactMe__title}>
      <Logo /> <br />
      Pensou em alguma coisa? <br /> Fale comigo!
      </p>
      <Button
        hasIcon={true}
        icon={IconArrowRight}
        iconColor="#ffffffff"
        iconSize={24}
        iconPosition="right"
        href="/contato"
        isButton={false}
        variant="secondary"
        secondaryColor="#ffffffff"
        useButtonStyle={true}
        label= 'Entre em contato'
        className={styles.contactMe__button}
      />
        </div>
    </section>
  )
}