import { ArticleAnimation } from './index'
import { disableTable } from '@/storybook-docs/argTypes'

export default {
  title: 'Organisms/ArticleAnimation',
  component: ArticleAnimation,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    text: 'Mais de 50 marcas já confiaram na EULUKASALVES para fortalecer sua presença e identidade. Atuamos com estratégia, criatividade e um olhar personalizado para cada projeto. Seja criando do zero ou renovando a comunicação, entregamos com propósito e aquele toque especial de quem ama o que faz. E tal tal tal tal tal tal tal tal tal tal tal tal tal tal tal tal tal tal tal tal tal tal tal.',

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