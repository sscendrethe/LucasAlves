import { Meta, StoryObj } from '@storybook/react'
import { Counter } from './index'

const meta: Meta<typeof Counter> = {
  title: 'atoms/Counter',
  component: Counter,
}

export default meta

type Story = StoryObj<typeof Counter>

export const Default: Story = {
  args: {
    end: 150,
    prefix: '+',
  },
}

export const CustomStyled: Story = {
  args: {
    end: 300,
    prefix: '',
    suffix: ' usuários',
    className: 'text-6xl text-green-600 font-extrabold font-serif', // customize aqui
  },
}
