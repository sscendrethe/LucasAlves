import type { Meta, StoryObj } from '@storybook/react'
import { Form } from './index'

const meta: Meta<typeof Form> = {
  title: 'Organisms/Form',
  component: Form,
  parameters: {
    layout: 'fullscreen',
  },
}
export default meta

type Story = StoryObj<typeof Form>

export const Default: Story = {
  args: {
    title: 'Fale com a gente',
    text: 'Estamos aqui para ajudar! Entre em contato conosco preenchendo o formulário abaixo e responderemos o mais breve possível.',
    subtext: 'Nosso horário de atendimento é de segunda a sexta, das 9h às 18h.',
    email:"contato@empresa.com",
    phone:"+55 31 97777-7777"
  },
}
