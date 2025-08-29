import { Presentation } from './index'
import { Sprites } from '@/components/ions/Sprites'
import { StoryFn } from '@storybook/react'
import { disableTable } from '@/storybook-docs/argTypes'

export default {
  title: 'Organisms/Presentation',
  component: Presentation,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'O eLinC',
    text: 'O grupo explora construtos teóricos de campos como Gramática Gerativa e Linguística Cognitiva de forma colaborativa. O grupo explora construtos teóricos de campos como Gramática Gerativa e Linguística Cognitiva de forma colaborativa.',
    backgroundColor: '#ff7707', 
    image: '/images/cases/case4.jpg',
    alt: '',
  },
  argTypes: {
    alt: {
      ...disableTable,
    },
  },
    decorators: [
        (Story: StoryFn, context: any) => {
        return (
            <div>
            <Sprites />
            {Story(context.args, context)}
            </div>
        )
        },
    ],
}

export const Default = {}