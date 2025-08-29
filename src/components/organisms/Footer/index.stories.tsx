import { JSX } from 'react'
import { Footer, FooterProps } from './index'
import { disableTable } from '@/storybook-docs/argTypes'

export default {
  title: 'Organisms/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    hasCTA: true,
    backgroundImage: '/images/cases/case5.jpg',
    backgroundColor: '#e0a281c1',
    navigationItems: [
      { item: 'Início', href: '/' },
      { item: 'Serviços', href: '/servicos' },
      { item: 'Sobre mim', href: '/sobre-mim' },
      { item: 'Entre em contato', href: '/contato' },
    ],
  },
  argTypes: {
    locale: {
      ...disableTable,
    },
    navigationItems: {
      ...disableTable,
    },
  },
}

export const Default = (args: JSX.IntrinsicAttributes & FooterProps) => (
  <Footer {...args} />
)