import Link from 'next/link'
import {
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandWhatsapp,
} from '@tabler/icons-react'
import styles from './styles.module.scss'

interface SocialIconsProps {
  backgroundColor?: string
  instagramHref?: string
  linkedinHref?: string
  facebookHref?: string
  youtubeHref?: string
  whatsappHref?: string
}
interface SocialIconsProps {
  backgroundColor?: string
}

export const SocialIcons = ({
  backgroundColor,
  instagramHref = '',
  linkedinHref = '',
  facebookHref = '',
  youtubeHref = '',
  whatsappHref = '',
}: SocialIconsProps) => {
  const itemStyle = [
    styles[`socialIcons__item`],
    styles[`socialIcons__item--${backgroundColor}`],
  ].join(' ')

  const socialLinks = [
    {
      href: instagramHref,
      icon: IconBrandInstagram,
      aria: 'Instagram',
    },
    {
      href: linkedinHref,
      icon: IconBrandLinkedin,
      aria: 'Linkedin',
    },
    {
      href: facebookHref,
      icon: IconBrandFacebook,
      aria: 'Facebook',
    },
    {
      href: youtubeHref,
      icon: IconBrandYoutube,
      aria: 'Youtube',
    },
    {
      href: whatsappHref,
      icon: IconBrandWhatsapp,
      aria: 'WhatsApp',
    },
  ]
  const filteredLinks = socialLinks.filter(({ href }) => href !== '')

  return (
    <nav className={styles.socialIcons} aria-label="Redes Sociais">
      <ul className={styles.socialIcons__list}>
        {filteredLinks.map(({ href, icon: Icon, aria }) => (
          <li key={aria} className={itemStyle}>
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={aria}
              className={styles.socialIcons__link}
            >
              <Icon aria-hidden="true" color="white" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}