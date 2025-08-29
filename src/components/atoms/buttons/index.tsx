import Link from 'next/link'
import styles from './styles.module.scss'

interface ButtonProps {
  hasIcon?: boolean
  icon?: React.ComponentType<{
    color?: string
    size?: number | string
    stroke?: number | string
  }>
  iconColor?: string
  iconSize?: number | string
  iconPosition?: 'left' | 'right'
  href?: string
  isButton?: boolean
  aria?: string
  label?: string
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>
  ) => void
  target?: string
  weight?: string
  variant?: string
  secondaryColor?: string
  disabled?: boolean
  useButtonStyle?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export const Button = ({
  hasIcon,
  icon: Icon,
  iconColor = 'white',
  iconSize = 24,
  iconPosition = 'right',
  href,
  isButton = true,
  aria,
  label,
  onClick,
  target,
  weight,
  variant,
  secondaryColor = '',
  disabled,
  useButtonStyle,
  className,
  type,
}: ButtonProps) => {
  const buttonStyle = [
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${iconPosition}`],
    disabled && styles['button--disabled'],
    className,
  ].join(' ')

  const linkStyle = [
    styles.link,
    styles[`link--${iconPosition}`],
    styles[`link--${weight}`],
    !isButton && variant ? styles[`link--${variant}`] : '',
    !isButton && !variant && styles[`link--hover`],
    useButtonStyle && styles[`link--buttonStyle`],
    className,
  ].join(' ')

  return (
    <>
      {isButton ? (
        <button
          onClick={disabled ? undefined : onClick}
          className={buttonStyle}
          aria-label={aria}
          disabled={disabled}
          type={type}
          style={{
            ...(variant === 'secondary'
              ? {
                  color: secondaryColor,
                  border: `.1px solid ${secondaryColor}`,
                }
              : {
                  border: 'secondaryColor',
                }),
          }}
        >
          {hasIcon && Icon && iconPosition === 'left' && (
            <Icon color={iconColor} size={iconSize} />
          )}
          {label && <span>{label}</span>}
          {hasIcon && Icon && iconPosition === 'right' && (
            <Icon color={iconColor} size={iconSize} />
          )}
        </button>
      ) : (
        <Link
          href={href ?? ''}
          target={target}
          className={linkStyle}
          onClick={onClick}
          style={{
            ...(variant === 'secondary'
              ? {
                  color: secondaryColor,
                  border: `1px solid ${secondaryColor}`,
                }
              : {
                  border: 'none',
                }),
          }}
        >
          {hasIcon && Icon && iconPosition === 'left' && (
            <Icon color={iconColor} size={iconSize} />
          )}
          {label && <span>{label}</span>}
          {hasIcon && Icon && iconPosition === 'right' && (
            <Icon color={iconColor} size={iconSize} />
          )}
        </Link>
      )}
    </>
  )
}
