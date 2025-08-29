import { Hero } from './index'
import { disableTable } from '@/storybook-docs/argTypes'

export default {
  title: 'Organisms/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: ' Futuro Digital e Inove com a gente',
    text: 'Aqui, a gente mistura criatividade, estratégia e tecnologia pra transformar marcas em experiências memoráveis. Nosso foco? Te ajudar a se destacar de verdade no meio do barulho das redes.',
    firstButtonLabel: 'Sobre mim',
    secondButtonLabel: 'Entre em contato',
    video: 'videos/meeting.mp4',
    hasBreadcrumb: false,
  },
  argTypes: {
    hasBreadcrumb: {
      ...disableTable,
    },
    locale: {
      ...disableTable,
    },
  },
}

export const Default = {}