import { LargeButton } from './index'

export default {
  title: 'Atoms/LargeButton',
  component: LargeButton,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark-mode' },
  },
  args: {
    title: 'A origem da Teoria Gerativa',
  },
  argTypes: {
    link: {
      table: {
        disable: true,
      },
    },
    title: {
      table: {
        disable: true,
      },
    },
  },
}

export const Default = {}
