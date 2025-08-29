import { Button } from './index'
import { weightArgTypes, disableTable } from '../../../storybook-docs/argTypes'
import { IconArrowRight } from '@tabler/icons-react'

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    iconSize: 24,
    aria: '',
    weight: '',
    disabled: false,
  },
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: ['primary', 'secondary', 'tertiary'],
    },
    icon: {
      ...disableTable,
    },
    role: {
      ...disableTable,
    },
    target: {
      ...disableTable,
    },
    onClick: {
      ...disableTable,
    },
    href: {
      ...disableTable,
    },
    isButton: {
      ...disableTable,
    },
    useButtonStyle: {
      ...disableTable,
    },
    className: {
      ...disableTable,
    },
    type: {
      ...disableTable,
    },
  },
}

export const PrimaryButton = {
  args: {
    hasIcon: false,
    iconColor: 'currentColor',
    label: 'Entre em contato',
    variant: 'primary',
  },
  argTypes: {
    weight: {
      ...disableTable,
    },
    aria: {
      ...disableTable,
    },
    secondaryColor: {
      ...disableTable,
    },
  },
}

export const SecondaryButton = {
  args: {
    hasIcon: false,
    icon: IconArrowRight,
    iconColor: 'orange',
    label: 'Entre em contato',
    variant: 'secondary',
  },
  argTypes: {
    weight: {
      ...disableTable,
    },
    aria: {
      ...disableTable,
    },
  },
}

export const TertiaryButton = {
  args: {
    label: 'Entre em contato',
    variant: 'tertiary',
  },
  argTypes: {
    weight: {
      ...disableTable,
    },
    aria: {
      ...disableTable,
    },
    hasIcon: {
      ...disableTable,
    },
    iconColor: {
      ...disableTable,
    },
    iconPosition: {
      ...disableTable,
    },
    iconSize: {
      ...disableTable,
    },
    secondaryColor: {
      ...disableTable,
    },
  },
}

export const IconButton = {
  args: {
    hasIcon: true,
    icon: IconArrowRight,
    iconColor: 'currentColor',
    variant: 'primary',
    aria: 'página inicial',
  },
  argTypes: {
    weight: {
      ...disableTable,
    },
    hasIcon: {
      ...disableTable,
    },
    iconPosition: {
      ...disableTable,
    },
    label: {
      ...disableTable,
    },
    secondaryColor: {
      ...disableTable,
    },
  },
}

export const Link = {
  args: {
    hasIcon: false,
    icon: IconArrowRight,
    https: '',
    isButton: false,
    label: 'Início',
    variant: 'primary',
  },
  argTypes: {
    ...weightArgTypes,
    aria: {
      ...disableTable,
    },
    secondaryColor: {
      ...disableTable,
    },
    iconPosition: {
      ...disableTable,
    },
    variant: {
      ...disableTable,
    },
    iconSize: {
      ...disableTable,
    },
  },
}
