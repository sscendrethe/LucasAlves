interface IconProps {
  Icon: React.ComponentType<{
    color?: string
    size?: number | string
    stroke?: number | string
    className?: string
  }>
  color?: string
  size?: number | string
  stroke?: number | string
  className?: string
}

export const Icon = ({ Icon, color, size, stroke, className }: IconProps) => {
  return (
    <Icon
      color={color}
      size={size}
      stroke={stroke}
      className={className}
      aria-hidden="true"
    />
  )
}
