'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import styles from './styles.module.scss';

type FloatingWhatsAppProps = {
  /** Número em formato internacional, só dígitos. Ex.: 5531999999999 */
  phone: string;
  /** Mensagem inicial opcional */
  message?: string;
  /** Esconde o botão em rotas específicas (ex.: ['/contato']) */
  hideOnPaths?: string[];
  /** Mostra/oculta o rótulo “WhatsApp” ao lado do ícone (desktop) */
  showLabel?: boolean;
};

function buildWaUrl(rawPhone: string, message?: string) {
  const phone = rawPhone.replace(/\D/g, '');
  const text = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${phone}${text}`;
}

export function FloatingWhatsApp({
  phone,
  message = 'Olá! Vim pelo site e gostaria de saber mais.',
  hideOnPaths = [],
  showLabel = true,
}: FloatingWhatsAppProps) {
  const pathname = usePathname();
  const shouldHide = hideOnPaths.includes(pathname);

  if (shouldHide) return null;

  return (
    <Link
      href={buildWaUrl(phone, message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className={styles.whats}
    >
      <IconBrandWhatsapp className={styles.whats__icon} stroke={2} />
      {showLabel && <span className={styles.whats__label}>WhatsApp</span>}
    </Link>
  );
}

export default FloatingWhatsApp;
