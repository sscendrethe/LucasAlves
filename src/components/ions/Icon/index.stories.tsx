import { Icon } from './index'
import { disableTable } from '@/storybook-docs/argTypes'
import { IconBulb } from '@tabler/icons-react'

export default {
  title: 'ions/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  args: {
    Icon: IconBulb,
    color: '#FF8E07',
    size: 40,
    stroke: 2,
  },
  argTypes: {
    Icon: {
      ...disableTable,
    },
    className: {
      ...disableTable,
    },
  },
}

export const Default = {}
