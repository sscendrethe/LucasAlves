import { JSX } from 'react'
import { CardFeedbackWrapper, CardFeedbackWrapperProps } from './index'
import { disableTable } from '@/storybook-docs/argTypes'

export default {
  title: 'Organisms/CardFeedbackWrapper',
  component: CardFeedbackWrapper,
  parameters: { layout: 'centered' },
  args: {
    cardData: [
      {
        link: '/avaliacoes',
        description: 'Lugar amplo e bem arejado...',
        backgroundColor: 'transparent',
        iconColor: 'orange',
        author: 'Lucia Helena de Paiva',
        company: 'Clínica XX',
        rating: 5,         
      },
      {
        link: '/avaliacoes',
        description: 'Lugar amplo e bem arejado...',
        backgroundColor: 'transparent',
        iconColor: 'orange',
        author: 'Lucia Helena de Paiva',
        company: 'Clínica XX',
        rating: 5,     
      },
            {
        link: '/avaliacoes',
        description: 'Lugar amplo e bem arejado Lugar amplo e bem arejado Lugar amplo e bem arejado Lugar amplo e bem arejado Lugar amplo e bem arejado',
        backgroundColor: 'transparent',
        iconColor: 'orange',
        author: 'Lucia Helena de Paiva',
        company: 'Clínica XX',
        rating: 5,     
      },
    ],
  },
  argTypes: {
    cardData: { ...disableTable },
  },
}

export const Default = (args: JSX.IntrinsicAttributes & CardFeedbackWrapperProps) => (
  <CardFeedbackWrapper {...args} />
)
