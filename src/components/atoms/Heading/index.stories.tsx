import { Heading } from './index'
import {
  alignmentArgTypes,
  colorArgTypes,
  weightArgTypes,
  headingsArgTypes,
  disableTable,
} from '../../../storybook-docs/argTypes'

export default {
  title: 'Atoms/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  args: {
    level: '1',
    align: 'center',
    color: 'dark-gray',
    children: 'Lucas Marketing Digital',
  },
  argTypes: {
    ...alignmentArgTypes,
    ...colorArgTypes,
    ...weightArgTypes,
    ...headingsArgTypes,
    id: {
      ...disableTable,
    },
    className: {
      ...disableTable,
    },
  },
}

export const Default = {}
