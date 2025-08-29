import { CardVideo } from './index'
import { Decorator } from '@storybook/react'
import { disableTable } from '@/storybook-docs/argTypes'

export default {
  title: 'Molecules/CardVideo',
  component: CardVideo,
  parameters: {
    layout: 'centered',
  },
  args: {
    image: { url: '/images/books/1.webp' },
    title:
      "I'm sorry, this directory is encryptedPlease, enter your cipher to continue",
    link: '',
  },
  argTypes: {
    link: {
      ...disableTable,
    },
    className: {
      ...disableTable,
    },
    image: {
      ...disableTable,
    },
  },
decorators: [
  ((Story, context) => (
    <div style={{ width: '50%', margin: '0 auto' }}>
      {Story(context)}
    </div>
  )) as Decorator,
],
}

export const Default = {}