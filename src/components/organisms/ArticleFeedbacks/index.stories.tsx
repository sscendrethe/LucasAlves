import { ArticleFeedbacks } from './index'

export default {
  title: 'Organisms/ArticleFeedbacks',
  component: ArticleFeedbacks,
  parameters: { layout: 'fullscreen' },
}

export const Default = {
  args: {
    text: 'Veja o feedback e o que nossos clientes têm a dizer sobre o nosso trabalho.',
    cardData: [
      {
        link: '/avaliacoes',
        description: 'Lugar amplo e bem arejado.Lugar amplo e bem arejado.Lugar amplo e bem arejado.Lugar amplo e bem arejado.Lugar amplo e bem arejado.',
        backgroundColor: 'transparent',
        iconColor: 'orange',
        author: 'Lucia Helena de Paiva',
        company: 'Clínica XX',
        rating: 5,          // 👈 em vez de icon: () => JSX
      },
      {
        link: '/avaliacoes',
        description: 'Lugar amplo e bem arejado...',
        backgroundColor: 'transparent',
        iconColor: 'orange',
        author: 'Lucia Helena de Paiva',
        company: 'Clínica XX',
        rating: 5,
      },
      {
        link: '/avaliacoes',
        description: 'Lugar amplo e bem arejado...',
        backgroundColor: 'transparent',
        iconColor: 'orange',
        author: 'Lucia Helena de Paiva',
        company: 'Clínica XX',
        rating: 5,
      },
    ],
  },
}
