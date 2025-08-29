import { MoreProjects } from './index'
import { disableTable } from '@/storybook-docs/argTypes'

export default {
  title: 'Organisms/MoreProjects',
  component: MoreProjects,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'Resultados de quem sabe do assunto',
    text: 'Branding com Propósito: Crescimento Real, Público Conectado e Seu Crescimento no Mercado',
    projectItems: [
      { projectName: '123', link: '/elinc', image: '/images/cases/case3.png' },
      {
        projectName: 'Análise de Dados',
        link: '/case2',
        image: '/images/cases/case1.jpg',
        video: '/videos/trip.mp4',
      },
      {
        projectName: 'de Dados',
        link: '/case3',
        image: '/images/cases/case1.jpg',
      }
    ],
  },
  argTypes: {
    locale: {
      ...disableTable,
    },
    projectItems: {
      ...disableTable,
    },
  },
}

export const Default = {}