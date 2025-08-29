import { CardFeedback } from './index'
import {
  backgroundColorArgTypes,
  disableTable,
} from '../../../storybook-docs/argTypes'

export default {
  title: 'Molecules/CardFeedback',
  component: CardFeedback,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    ...backgroundColorArgTypes,
    link: {
      ...disableTable,
    },
    icon: {
      ...disableTable,
    },
  },
}

export const Feedback = {
  args: {
    link: '/avaliacoes',
    description:
      'Lugar amplo e bem arejado. Muitas opções de comida no self service. Rango bem temperado. Várias opções de lanche também, com bebidas variadas exceto alcoólicas.',
    rating: 5, // 👈 vamos criar essa prop no componente
    backgroundColor: 'transparent',
    iconColor: 'orange',
    author: 'Lucia Helena de Paiva',
    company: 'Clínica XX'
  },
}


