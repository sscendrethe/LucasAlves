'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { IconMenu2, IconX } from '@tabler/icons-react'
import { Logo } from '@/components/ions/Logo'
import { Button } from '@/components/atoms/Buttons'
import { NavigationItem } from '@/components/organisms/Footer'
import styles from './styles.module.scss'

interface HeaderProps {
  navigationItems: NavigationItem[]
}

export const Header = ({ navigationItems }: HeaderProps) => {
  const pathname = usePathname()
  const router = useRouter()
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(false)
  const [isNavVisible, setIsNavVisible] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 1200
      setIsMobileScreen(isMobile)

      if (!isMobile) setIsNavVisible(false)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleNav = () => setIsNavVisible((prev) => !prev)

  const itemsToDisplay = isMobileScreen
    ? navigationItems
    : navigationItems.filter(({ item }) => item !== 'Entre em contato')

  return (
    <header className={styles.headerContainer}>
      <div className={`${styles.header} ${isNavVisible ? styles.header__open : ''}`}>
        <div className={styles.header__content}>
          <div className={styles.header__icons}>
            <Link
              href="/"
              aria-label="Ir para a página inicial"
              className={styles.header__logo}
              onClick={() => {
                if (isMobileScreen) setIsNavVisible(false)
              }}
            >
              <Logo />
            </Link>
            {isMobileScreen &&
              (isNavVisible ? (
                <IconX
                  stroke={2}
                  color="#ff6919ff"
                  onClick={toggleNav}
                  className={styles.header__icon}
                />
              ) : (
                <IconMenu2
                  stroke={2}
                  color="#ff6919ff"
                  onClick={toggleNav}
                  className={styles.header__icon}
                />
              ))}
          </div>

          {/* Lista de links + botão no desktop */}
          {(isNavVisible || !isMobileScreen) && (
            <ul className={styles.header__list}>
              {itemsToDisplay.map(({ item, href }) => (
                <li
                  key={item}
                  className={`${styles.header__item} ${
                    pathname === href ? styles.header__activeItem : ''
                  }`}
                >
                  <Link
                    href={href}
                    className={styles.header__link}
                    style={{ fontWeight: pathname === href ? '700' : '400' }}
                    onClick={() => {
                      if (isMobileScreen) setIsNavVisible(false)
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}

              {!isMobileScreen && (
                <li className={styles.header__item}>
                  <Button
                    href="/contato"
                    label="Entre em contato"
                    variant="primary"
                    isButton={true}
                    useButtonStyle={true}
                    onClick={() => router.push('/contato')}
                  />
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
    </header>
  )
}
