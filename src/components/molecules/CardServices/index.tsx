"use client";

import React from "react";
import styles from "./styles.module.scss";
import { Button } from "@/components/atoms/Buttons";
import { Icon as CustomIcon } from "@/components/ions/Icon";
import {
  IconArrowRight,
  IconHeartShare,
  IconCameraHeart,
  IconDeviceDesktopHeart,
} from "@tabler/icons-react";

const ICONS = {
  heartShare: IconHeartShare,
  cameraHeart: IconCameraHeart,
  deviceDesktopHeart: IconDeviceDesktopHeart,
} as const;

export type IconName = keyof typeof ICONS;

export interface CardProps {
  iconName?: IconName;
  link?: string;
  label?: string;
  secondaryColor?: string;
  title?: string;
  border?: string;
  titleColor?: string;
  backgroundColor?: string;      // pode ser token ("vividorange") ou CSS ("rgba(...)", "#RRGGBBAA")
  iconColor?: string;
  iconBackgroundColor?: string;  // aceita rgba/hex/token
  onClick?: () => void;
}

export const CardServices: React.FC<CardProps> = ({
  iconName,
  link,
  label,
  border,
  secondaryColor,
  title,
  titleColor,
  backgroundColor,
  iconColor,
  iconBackgroundColor,
  onClick,
}) => {
  // ★ tenta usar a classe baseada no token; se não existir, usamos inline style
  const bgTokenClass = backgroundColor ? styles[`card--${backgroundColor}`] : undefined;
  const cardClass = [styles.card, bgTokenClass].filter(Boolean).join(" ");

  // ★ style do <article>: mantém borda e aplica background inline quando não houver token
  const articleStyle: React.CSSProperties = {
    border: border ? `0.1rem solid ${border}` : undefined,
    ...(bgTokenClass ? {} : backgroundColor ? { background: backgroundColor } : {}),
  };

  const titleStyle = [
    styles.card__title,
    styles[`card__title--${titleColor}`],
  ].join(" ");

  const IconComp = iconName ? ICONS[iconName] : undefined;

  return (
    <article
      aria-labelledby={title}
      className={cardClass}
      style={articleStyle} 
    >
      <div
        aria-hidden="true"
        className={styles.card__icon}
        // ★ permite fundo translúcido atrás do ícone também
        style={iconBackgroundColor ? { background: iconBackgroundColor } : undefined}
      >
        {IconComp && (
          <CustomIcon
            Icon={IconComp}
            color={iconColor || "#ff904bff"}
            size={24}
          />
        )}
      </div>

      <p id={title} className={titleStyle}>
        {title}
      </p>

      <Button
        href={onClick ? undefined : link} // se tiver onClick, não navega
        onClick={onClick}
        isButton={!!onClick}              // renderiza como <button> quando tiver handler
        label={label}
        variant="secondary"
        useButtonStyle
        secondaryColor={secondaryColor}
        hasIcon={false}
        icon={IconArrowRight}
        iconColor={iconColor}
        className={styles.card__buttonSmall}
      />
    </article>
  );
};

export default CardServices;
