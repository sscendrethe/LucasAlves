import { mergeConfig } from 'vite'
import path from 'path'
import type { StorybookConfig } from '@storybook/nextjs-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
    '@storybook/addon-actions', 
  ],
  framework: {
    name: '@storybook/nextjs-vite',
    options: {},
  },
  staticDirs: ['../public'],
  async viteFinal(cfg) {
    return mergeConfig(cfg, {
      resolve: {
        alias: {
          'next/navigation': path.resolve(__dirname, 'mocks/next-navigation.ts'),
          // 'next/image': path.resolve(__dirname, 'mocks/next-image.tsx'), // opcional
        },
      },
      css: {
        preprocessorOptions: {
          scss: {
            includePaths: [path.resolve(__dirname, '../src/styles')],
          },
        },
      },
    })
  },
}

export default config

