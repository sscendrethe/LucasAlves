import { SocialIcons } from './index'
import {
  backgroundColorArgTypes,
  disableTable,
} from '@/storybook-docs/argTypes'

export default {
  title: 'Molecules/SocialIcons',
  component: SocialIcons,
  parameters: {
    layout: 'centered',
  },
  args: {
    instagramHref: '/',
  },
  argTypes: {
    ...backgroundColorArgTypes,
    instagramHref: {
      ...disableTable,
    },
    linkedinHref: {
      ...disableTable,
    },
    facebookHref: {
      ...disableTable,
    },
    youtubeHref: {
      ...disableTable,
    },
    whatsappHref: {
      ...disableTable,
    },
  },
}

export const Default = {}