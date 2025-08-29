import { Gallery } from './index'
import { disableTable } from '@/storybook-docs/argTypes'

export default {
  title: 'Organisms/Gallery',
  component: Gallery,
  args: {
    images: [
      { image: '/images/fotos/03.JPG', imageDescription: '' },
      { image: 'images/fotos/04.JPG', imageDescription: '' },
      { image: 'images/fotos/05.JPG', imageDescription: '' },
      { image: 'images/fotos/02.png', imageDescription: '' }, 
    ],
    hasImages: true,
  },
  argTypes: {
    images: {
      ...disableTable,
    },
    locale: {
      ...disableTable,
    },
  },
}

export const Default = {}