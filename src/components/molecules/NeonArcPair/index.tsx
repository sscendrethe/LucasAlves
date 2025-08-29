'use client';

import { useCallback, useEffect, useId, useMemo, useState } from 'react';
import type { ComponentType } from 'react';
import {
  IconUsers,
  IconSparkles,
} from '@tabler/icons-react';
import styles from './styles.module.scss';

type NeonArcItem = {
  end: number;
  label?: string;
  prefix?: string;
  suffix?: string;
  icon?: ComponentType<{ size?: number | string; stroke?: number | string }>;
  /** duração da animação (ms) */
  duration?: number;
};

type NeonArcPairProps = {
  /** exatamente 2 itens (esquerda e direita) */
  items?: NeonArcItem[];  
  /** tamanho do SVG (px) */
  size?: number;
  /** espessura do traço do anel (px) */
  stroke?: number;
};

function useReducedMotion() {
  const [prefers, setPrefers] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const q = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent | MediaQueryList) =>
      setPrefers('matches' in e ? e.matches : (e as MediaQueryList).matches);

    setPrefers(q.matches);
    // @ts-ignore - tipos antigos
    q.addEventListener ? q.addEventListener('change', handler) : q.addListener(handler);
    return () => {
      // @ts-ignore - tipos antigos
      q.removeEventListener ? q.removeEventListener('change', handler) : q.removeListener(handler);
    };
  }, []);
  return prefers;
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function useNeonArcCounter(target: number, duration = 1300) {
  const reduced = useReducedMotion();
  const [value, setValue] = useState(0);
  const [progress, setProgress] = useState(0); // 0..1

  const play = useCallback(() => {
    if (reduced) {
      setProgress(1);
      setValue(target);
      return;
    }
    setProgress(0);
    setValue(0);
    const start = performance.now();
    let raf = 0 as unknown as number;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = easeOutCubic(t);
      setProgress(eased);
      setValue(Math.round(target * eased));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, reduced]);

  useEffect(() => {
    const cancel = play();
    return () => {
      if (typeof cancel === 'function') cancel();
    };
  }, [play]);

  return { value, progress, replay: play };
}

function NeonArcCard({
  end,
  label,
  prefix,
  suffix,
  icon: Icon = IconSparkles,
  size = 140,
  stroke = 10,
  duration = 1300,
}: NeonArcItem & { size?: number; stroke?: number }) {
  const { value, progress, replay } = useNeonArcCounter(end, duration);
  const idRaw = useId();
  const gradId = useMemo(() => `grad-${idRaw.replace(/[:]/g, '')}`, [idRaw]);

  const r = useMemo(() => (size / 2) - stroke / 2, [size, stroke]);
  const C = useMemo(() => 2 * Math.PI * r, [r]);
  const dashoffset = useMemo(() => C * (1 - progress), [C, progress]);

  return (
    <div
      className={styles.card}
      onMouseEnter={replay}
      onFocus={replay}
      tabIndex={0}
      aria-label={`${label} ${value}`}
    >
      <div className={styles.card__ringWrap}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className={styles.card__ring}
        >
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffa265ff" />
              <stop offset="100%" stopColor="#FF5E0E" />
            </linearGradient>
          </defs>

          {/* Trilha */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            stroke="rgba(255,255,255,0.10)"
            strokeWidth={stroke}
            fill="none"
          />
          {/* Anel ativo */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            stroke={`url(#${gradId})`}
            strokeWidth={stroke}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={C}
            strokeDashoffset={dashoffset}
            style={{ filter: 'drop-shadow(0 0 2px rgba(255, 77, 0, 0.45))' }}
          />
        </svg>

        {/* Ícone central */}
        <span className={styles.card__icon}>
          <Icon size={22} stroke={2} />
        </span>
      </div>

      <div className={styles.card__text}>
        <div className={styles.card__value}>
          {prefix && <span className={styles.card__affix}>{prefix}</span>}
          <span className={styles.card__number}>
            {value.toLocaleString('pt-BR')}
          </span>
          {suffix && <span className={styles.card__affix}>{suffix}</span>}
        </div>
        <div className={styles.card__label}>{label}</div>
        
      </div>
    </div>
  );
}

export function NeonArcPair({
  items = [
    { end: 150, prefix: '+', label: 'Clientes', icon: IconUsers },
    { end: 45,  prefix: '+', label: 'Projetos', icon: IconSparkles },
  ],
  size = 140,
  stroke = 10,
}: NeonArcPairProps) {
  return (
    <div className={styles.pair} role="group" aria-label="Indicadores">
      {items.map((item, i) => (
        <NeonArcCard key={i} {...item} size={size} stroke={stroke} />
      ))}
    </div>
  );
}


export default NeonArcPair;
