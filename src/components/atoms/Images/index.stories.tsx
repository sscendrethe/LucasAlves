import { ImageWrapper } from './index'
import { disableTable } from '@/storybook-docs/argTypes'

export default {
  title: 'Atoms/ImageWrapper',
  component: ImageWrapper,
  parameters: {
    layout: 'centered',
  },
  args: {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyHCW1Uw5t2nTLwa6BhMx4RFE2heuXSox3Yw&s',
    width: 734,
    height: 275,
    imageDescription: 'Tirinha da Mafalda',
  },
  argTypes: {
    className: {
      ...disableTable,
    },
    width: {
      ...disableTable,
    },
    height: {
      ...disableTable,
    },
    image: {
      ...disableTable,
    },
    imageDescription: {
      ...disableTable,
    },
  },
}

export const Default = {}