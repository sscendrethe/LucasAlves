import { UseFormRegister } from 'react-hook-form'
import { Icon as CustomIcon } from '@/components/ions/Icon'
import styles from './styles.module.scss'

export interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export interface InputProps {
  icon?: React.ComponentType<{
    color?: string
    size?: number | string
    stroke?: number | string
  }>
  iconColor?: string
  iconSize?: number | string
  label: string
  placeholder: string
  register: UseFormRegister<FormData>
  name: keyof FormData
  type?: string
  required?: boolean
  error?: string
  requiredErrorMessage?: string
  patternValue?: RegExp
  patternMessage?: string
}

export const Input = ({
  icon: Icon,
  iconColor = '#5C6B6B',
  iconSize = 24,
  label,
  placeholder,
  register,
  name,
  type = 'text',
  required = false,
  error,
  requiredErrorMessage,
  patternValue,
  patternMessage,
}: InputProps) => {
  return (
    <div className={styles.field}>
      <label htmlFor={name}>{label}</label>
      <div
        className={`${styles.field__container} ${error ? styles.field__inputError : ''}`}
      >
        {Icon && <CustomIcon Icon={Icon} color={iconColor} size={iconSize} />}
        <input
          id={name}
          {...register(name, {
            required: required ? `${requiredErrorMessage}` : false,
            pattern: patternValue
              ? {
                  value: patternValue,
                  message: patternMessage ?? 'Invalid input',
                }
              : undefined,
          })}
          type={type}
          placeholder={placeholder}
          className={styles.field__item}
        />
      </div>
      {error && <span className={styles.field__error}>{error}</span>}
    </div>
  )
}