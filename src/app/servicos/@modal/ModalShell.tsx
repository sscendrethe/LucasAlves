// src/app/servicos/@modal/ModalShell.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import styles from "@/app/servicos/modal.module.scss";

export default function ModalShell({ children }: { children: ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    // desabilita rolagem do body enquanto o modal existir
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") router.back();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [router]);

  return (
    <div className={styles.backdrop} role="dialog" aria-modal="true">
      <div className={styles.content} data-modal>
        {children}
      </div>

      <button
        className={styles.close}
        onClick={() => router.back()}
        aria-label="Fechar"
        title="Fechar"
      >
        ✕
      </button>
    </div>
  );
}
