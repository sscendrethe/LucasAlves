import { CardCTA } from './index'
import { disableTable } from '@/storybook-docs/argTypes'
import { action } from 'storybook/actions';

export default {
  title: 'Molecules/CardCTA',
  component: CardCTA,
  parameters: { layout: 'fullscreen' },
  argTypes: {
    link: { ...disableTable },
  },
}

export const AsLink = {
  args: {
    image: '/images/orangestuff/01.png',
    projectName: 'Card como Link',
    link: '/algum-caso',
  },
}

export const AsButton = {
  args: {
    image: '/images/orangestuff/01.png',
    projectName: 'Card com onClick',
    onClick: () => action('card-clicked')(), // ⬅️ agora é () => void
  },
}
