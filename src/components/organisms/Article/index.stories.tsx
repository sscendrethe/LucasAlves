import { Article } from './index'
import { disableTable } from '@/storybook-docs/argTypes'

export default {
  title: 'Organisms/Article',
  component: Article,
  parameters: { layout: 'fullscreen' },
  args: {
    text: 'A EULUKASALVES é uma empresa de marketing e publicidade em BH que combina criatividade, estratégia e tecnologia para destacar marcas por meio de branding e social media, com soluções personalizadas e foco em resultados reais.',
    firstButtonLabel: 'Sobre mim',
    firstButtonHref: '/sobre-mim',
    secondButtonLabel: 'Entre em contato',
    secondButtonHref: '/contato',
    video: 'videos/meeting.mp4',
    hasBreadcrumb: false,
  },
  argTypes: {
    hasBreadcrumb: { ...disableTable },
    locale: { ...disableTable },
  },
}

export const Default = {}
