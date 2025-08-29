import type { Meta, StoryObj } from '@storybook/react'
import { NeonArcPair } from './index'
import { IconUsers, IconSparkles, IconBuilding } from '@tabler/icons-react'

// ————————————————————————————————
// Meta
// ————————————————————————————————
const meta = {
  title: 'Molecules/NeonArcPair',
  component: NeonArcPair,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0B0C10' },
        { name: 'gray', value: '#111113' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
  argTypes: {
    items: {
      control: 'object',
      description:
        'Par de itens (esquerda e direita). Cada item: { end, label, prefix?, suffix?, icon?, duration? }',
    },
    size: {
      control: { type: 'number', min: 100, max: 240, step: 2 },
      description: 'Tamanho do SVG (px)',
    },
    stroke: {
      control: { type: 'number', min: 6, max: 20, step: 1 },
      description: 'Espessura do traço do anel (px)',
    },
  },
  // valores padrão (pode ajustar no painel de controls)
  args: {
    items: [
      { end: 150, prefix: '+', label: 'Clientes', icon: IconUsers, duration: 1400 },
      { end: 45,  prefix: '+', label: 'Projetos', icon: IconSparkles, duration: 1400 },
    ],
    size: 150,
    stroke: 10,
  },
} satisfies Meta<typeof NeonArcPair>

export default meta
type Story = StoryObj<typeof meta>

// ————————————————————————————————
// Stories
// ————————————————————————————————
export const Default: Story = {}

/** Exemplo com outros ícones/labels */
export const CustomIcons: Story = {
  args: {
    items: [
      { end: 320, prefix: '+', label: 'Usuários', icon: IconBuilding, duration: 1200 },
      { end: 98,  suffix: '%', label: 'Satisfação', icon: IconSparkles, duration: 1200 },
    ],
  },
}

/** Maior e mais espesso (bom para sections de destaque) */
export const Large: Story = {
  args: {
    size: 180,
    stroke: 12,
  },
}

/** Animação mais rápida (passe o mouse para reproduzir) */
export const FastReplay: Story = {
  args: {
    items: [
      { end: 150, prefix: '+', label: 'Clientes', icon: IconUsers, duration: 900 },
      { end: 45,  prefix: '+', label: 'Projetos', icon: IconSparkles, duration: 900 },
    ],
  },
}

/** Varie o background no painel (Backgounds → light) p/ testar contraste */
export const OnLightBg: Story = {
  parameters: {
    backgrounds: { default: 'light' },
  },
}
