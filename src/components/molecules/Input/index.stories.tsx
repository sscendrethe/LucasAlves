import { Input, InputProps, FormData } from './index'
import { useForm, FormProvider } from 'react-hook-form'
import { Meta, StoryFn } from '@storybook/react'
import { disableTable } from '@/storybook-docs/argTypes'
import { IconUser } from '@tabler/icons-react'

export default {
  title: 'Molecules/Input',
  component: Input,
  args: {
    label: 'Nome',
    icon: IconUser,
    placeholder: 'Daisy',
    name: 'name',
    required: true,
  },
  argTypes: {
    name: {
      ...disableTable,
    },
    icon: {
      ...disableTable,
    },
    required: {
      ...disableTable,
    },
    iconColor: {
      ...disableTable,
    },
    iconSize: {
      ...disableTable,
    },
    type: {
      ...disableTable,
    },
    register: {
      ...disableTable,
    },
    error: {
      ...disableTable,
    },
    requiredErrorMessage: {
      ...disableTable,
    },
    patternValue: {
      ...disableTable,
    },
    patternMessage: {
      ...disableTable,
    },
  },
} as Meta<typeof Input>

const Template: StoryFn<InputProps> = (args) => {
  const methods = useForm<FormData>()

  return (
    <FormProvider {...methods}>
      <Input {...args} register={methods.register} />
    </FormProvider>
  )
}

export const Default = Template.bind({})