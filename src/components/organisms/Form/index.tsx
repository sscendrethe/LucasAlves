'use client'

import { useState, useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useForm as useFormspree } from '@formspree/react'
import { Modal } from 'antd'
import {
  IconArrowRight,
  IconUser,
  IconMail,
  IconPhone,
  IconTableHeart,
  IconMessage,
} from '@tabler/icons-react'
import { Heading } from '@/components/atoms/Heading'
import { Button } from '@/components/atoms/Buttonstemp'
import { Input, FormData } from '@/components/molecules/Input'
import { Textarea } from '@/components/molecules/Textarea'
import styles from './styles.module.scss'

interface FormProps {
  title?: string
  text?: string
  subtext?: string
  email?: string
  phone?: string
  /** caminho do vídeo para o fundo da coluna esquerda (opcional) */
  leftVideo?: string
}

export const Form = ({ title, text, subtext, email, phone, leftVideo }: FormProps) => {
  const formspreeCode = process.env.NEXT_PUBLIC_FORMSPREE_TOKEN ?? ''
  const [state, handleFormSubmit] = useFormspree(formspreeCode)
  const [modal2Open, setModal2Open] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ mode: 'onBlur' })

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const formData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
    }
    handleFormSubmit(formData)
  }

  useEffect(() => {
    if (state.succeeded) {
      reset()
      setModal2Open(true)
    }
  }, [state.succeeded, reset])

  return (
    <section className={styles.form} aria-labelledby="Contact">
      {/* ESQUERDA */}
      <div className={styles.form__info}>
        {/* background video (apenas se enviado) */}
        {leftVideo && (
  <div className={styles.form__bg} aria-hidden="true">
    <video
      className={styles.form__bgVideo}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/images/placeholder.jpg" 
      onCanPlay={() => console.log('[Form BG] vídeo pronto')}
      onError={(e) => {
        console.error('[Form BG] erro ao carregar vídeo:', leftVideo, e)
      }}
    >
      <source src={leftVideo} type="video/mp4" />
    </video>
    <div className={styles.form__bgOverlay} />
  </div>
)}
        {/* conteúdo da esquerda por cima do vídeo */}
        <div className={styles.form__infoContent}>
          <Heading level="3" weight="700" id="Contact" color="orange" className={styles.form__title}>
            {title ?? 'Fale com a gente!'}
          </Heading>

          {subtext && <h3 className={styles.form__subtitle}>{subtext}</h3>}
          {text && <p className={styles.form__text}>{text}</p>}

          {(email || phone) && (
            <ul className={styles.form__contacts} aria-label="Informações de contato">
              {email && (
                <li className={styles.form__contactItem}>
                  <IconMail size={20} stroke={2} className={styles.form__contactIcon} />
                  <a href={`mailto:${email}`} className={styles.form__contactLink}>
                    {email}
                  </a>
                </li>
              )}
              {phone && (
                <li className={styles.form__contactItem}>
                  <IconPhone size={20} stroke={2} className={styles.form__contactIcon} />
                  <a href={`tel:${phone.replace(/\s+/g, '')}`} className={styles.form__contactLink}>
                    {phone}
                  </a>
                </li>
              )}
            </ul>
          )}
        </div>
      </div>

      {/* DIREITA */}
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form__fields}>
        <div className={styles.form__name}>
          <Input
            label="Nome"
            icon={IconUser}
            placeholder="Digite seu nome"
            register={register}
            name="name"
          />
        </div>

        <div className={styles.form__email}>
          <Input
            label="E-mail"
            icon={IconMail}
            placeholder="Digite seu e-mail"
            register={register}
            name="email"
            required
            requiredErrorMessage="O e-mail é obrigatório"
            patternValue={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
            patternMessage="Digite um e-mail válido"
            error={errors.email?.message}
          />
        </div>

        <div className={styles.form__subject}>
          <Input
            label="Assunto"
            icon={IconTableHeart}
            placeholder="Digite o assunto"
            register={register}
            name="subject"
          />
        </div>

        <div className={styles.form__phone}>
          <Input
            label="Telefone"
            icon={IconPhone}
            placeholder="Digite seu telefone"
            register={register}
            name="phone"
          />
        </div>

        <div className={styles.form__message}>
          <Textarea
            label="Mensagem"
            icon={IconMessage}
            placeholder="Escreva sua mensagem"
            register={register}
            name="message"
            className={styles.form__textarea}
            required
            requiredErrorMessage="A mensagem é obrigatória"
            error={errors.message?.message}
          />
        </div>

        <div className={styles.form__actions}>
          <Button
            hasIcon
            icon={IconArrowRight}
            isButton
            label="Enviar mensagem"
            type="submit"
            variant="tertiary"
            className={styles.form__button}
            disabled={state.submitting}
          />
        </div>

        <Modal
          title="Mensagem enviada com sucesso!"
          centered
          open={modal2Open}
          onOk={() => setModal2Open(false)}
          onCancel={() => setModal2Open(false)}
          footer={null}
        />
      </form>
    </section>
  )
}
