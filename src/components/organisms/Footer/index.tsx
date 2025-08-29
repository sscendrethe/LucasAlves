'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { SocialIcons } from '@/components/molecules/SocialIcons'
import { ContactMeCTA } from '@/components/organisms/ContactMeCTA'
import styles from './styles.module.scss'

export interface NavigationItem {
  item: string
  href: string
}

export interface FooterProps {
  hasCTA?: boolean
  backgroundImage?: string
  backgroundColor?: string
  navigationItems: NavigationItem[]
}

export const Footer = ({
  hasCTA,
  backgroundImage,
  backgroundColor,
  navigationItems = [],
}: FooterProps) => {
  const pathname = usePathname()
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobileScreen(window.innerWidth < 1200)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const CustomCTA = () => (
    <div className={styles.ctaWrapper}>

      <ContactMeCTA
        backgroundImage={backgroundImage}
        backgroundColor={backgroundColor}
      />
    </div>
  )

  return (
    <footer className={styles.footer}>
      {!isMobileScreen && hasCTA && <CustomCTA />}
      <div className={styles.footer__container}>
        {isMobileScreen && hasCTA && <CustomCTA />}
        <nav aria-label="Navegação">
          <ul className={styles.footer__list}>
            {navigationItems
              .slice(0, navigationItems.length - 1)
              .map(({ item, href }) => (
                <li
                  key={item}
                  className={`${styles.footer__item} ${
                    pathname === href ? styles.footer__activeItem : ''
                  }`}
                >
                  <Link
                    href={href}
                    rel="noopener noreferrer"
                    className={styles.footer__link}
                    style={{ fontWeight: pathname === href ? '700' : '400' }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
        <div className={styles.footer__icons}>
        <SocialIcons
          backgroundColor="gray"
          justify-content="center"
          instagramHref="https://www.instagram.com/eulukasalvesmarketing/"
          linkedinHref="https://www.linkedin.com/in/lucas-alves-b1b553145/"
        />
        </div>
      </div>
    </footer>
  )
}
