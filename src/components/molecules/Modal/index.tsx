// src/components/molecules/Modal/index.tsx
'use client'

import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './styles.module.scss'

type ModalProps = {
  open: boolean
  onClose: () => void
  children: React.ReactNode
  destroyOnClose?: boolean
}

let portalRoot: HTMLDivElement | null = null
function ensurePortalRoot() {
  if (typeof window === 'undefined') return null
  if (!portalRoot) {
    portalRoot = document.getElementById('app-modal-root') as HTMLDivElement
    if (!portalRoot) {
      portalRoot = document.createElement('div')
      portalRoot.id = 'app-modal-root'
      document.body.appendChild(portalRoot)
    }
  }
  return portalRoot
}

export default function Modal({ open, onClose, children, destroyOnClose = true }: ModalProps) {
  const root = ensurePortalRoot()

  // trava o scroll enquanto o modal está aberto
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [open])

  // ❌ quando fechado, desmonta tudo
  if (!open && destroyOnClose) return null
  if (!root) return null

  return createPortal(
    <div className={styles.overlay} role="dialog" aria-modal="true" onClick={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    root
  )
}
