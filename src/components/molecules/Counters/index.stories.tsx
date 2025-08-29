import { Meta, StoryObj } from '@storybook/react'
import { Counters, CountersProps } from './index'

const meta: Meta<typeof Counters> = {
  title: 'organisms/Counters',
  component: Counters,
}

export default meta

type Story = StoryObj<typeof Counters>

export const Default: Story = {
  args: {
    stats: [
      { end: 150, prefix: '+', label: 'Clientes' },
      { end: 300, prefix: '+', label: 'Usuários' },
      { end: 45, prefix: '+', label: 'Projetos' },
    ],
  } satisfies CountersProps,
}
