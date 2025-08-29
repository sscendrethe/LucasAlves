import { CardCase } from './index'
import { disableTable } from '../../../storybook-docs/argTypes'

export default {
  title: 'Molecules/CardCase',
  component: CardCase,
  parameters: {
    layout: 'centered',
  },
  args: {
    image: { url: '/images/cases/case1.jpg' },
    title: 'Como aumentamos a visibilidade de uma marca nas redes sociais',
    description:
      'Conheça um case de sucesso que mostra como estratégias certas nas redes sociais geraram mais alcance e engajamento.',
  },
  argTypes: {
    link: {
      ...disableTable,
    },
    className: {
      ...disableTable,
    },
    project: {
      ...disableTable,
    },
    slug: {
      ...disableTable,
    },
    image: {
      ...disableTable,
    },
  },
}

export const Default = {}
