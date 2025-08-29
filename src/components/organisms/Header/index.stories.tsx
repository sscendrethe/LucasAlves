import { Header } from './index'
import { Sprites } from '@/components/ions/Sprites'
import { StoryFn } from '@storybook/react'
import { disableTable } from '@/storybook-docs/argTypes'

export default {
  title: 'Organisms/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    navigationItems: [
      { item: 'Início', href: '/' },
      { item: 'Serviços', href: '/servicos' },
      { item: 'Sobre mim', href: '/sobre-mim' },
      { item: 'Entre em contato', href: '/contato' },
    ],
    isMobileScreen: true
  },
  argTypes: {
    navigationItems: {
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
