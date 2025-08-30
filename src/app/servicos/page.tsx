import { Header } from '@/components/organisms/Header'
import { ArticleAnimation } from '@/components/organisms/ArticleAnimation'
import { Footer } from '@/components/organisms/Footer'
import { ArticleServices } from '@/components/organisms/ArticleServices'
import type { CardProps } from '@/components/molecules/CardServices' 
import { ArticleFeedbacks } from '@/components/organisms/ArticleFeedbacks'

export default function Servico() {
  const cards: CardProps[] = [
    {
      iconName: 'heartShare',
      link: '/servicos/presentation/social',
      title: 'Gestão e Social Media',
      titleColor: 'white',
      label: 'Saiba mais',
      secondaryColor: 'white',
      border: 'rgba(255, 106, 0)',
      backgroundColor: "rgba(255, 106, 0, 0.3)",
      iconColor: 'white',
    },
    {
      iconName: 'cameraHeart',
      link: '/servicos/presentation/foto',
      title: 'Fotografia e Videomaker',
      titleColor: 'white',
      label: 'Saiba mais',
      border: '#ff6a00ff',
      secondaryColor: 'white',
      backgroundColor: "rgba(255, 106, 0, 0.4)",
      iconColor: '#ff6a00ff',
      iconBackgroundColor: 'white',
    },
    {
      iconName: 'deviceDesktopHeart',
      link: '/servicos/presentation/sites',
      title: 'Criação de WebSites',
      titleColor: 'white',
      label: 'Saiba mais',
      secondaryColor: 'white',
      backgroundColor: "rgba(255, 106, 0, 0.5)",
      border: 'rgba(255, 106, 0)',
      iconColor: 'white',
    },
  ]

  return (
    <>
      <Header
        navigationItems={[
          { item: 'Início', href: '/' },
          { item: 'Serviços', href: '/servicos' },
          { item: 'Sobre mim', href: '/sobre-mim' },
          { item: 'Entre em contato', href: '/contato' },
        ]}
      />

      <ArticleAnimation
        text="Mais de 50 marcas já confiaram na EULUKASALVES para fortalecer presença e identidade no digital. Atuamos com estratégia, criatividade e um olhar único para cada projeto. Seja criando do zero ou renovando a comunicação, entregamos sempre com propósito, excelência e aquele toque especial de quem realmente ama o que faz."
      />

      <ArticleServices
        video={{
          src: "videos/meeting.mp4",       // coloque em /public/videos/services-bg.mp4
          overlay: 'rgba(0,0,0,.35)',           // opcional: contraste suave
        }}
        cardData={cards}
      />

      <ArticleFeedbacks
          text="Veja o que nossos clientes estão dizendo sobre nós!"
          cardData={[
            {
              link: '#',
              description: 'Lucas ajudou a profissionalizar a comunicação da transportadora. Hoje mostramos melhor os serviços e conquistamos novos clientes.',
              backgroundColor: 'white',
              iconColor: 'orange',
              author: 'Gilvan',
              company: 'Gilvan Transportes',
              rating: 5,      
            },
                        {
              link: '#',
              description: 'Lucas trouxe comunicação acolhedora e profissional às minhas redes, unindo seriedade e leveza. Recomendo demais!',
              backgroundColor: 'white',
              iconColor: 'orange',
              author: 'Marina Botelho',
              company: 'Psicóloga',
              rating: 5,      
            },
                        {
              link: '#',
              description: 'Meu trabalho sempre foi visual, mas com Lucas consegui destacar serviços. Criativo, comprometido e gera resultados. Indico de olhos fechados!',
              backgroundColor: 'white',
              iconColor: 'orange',
              author: 'Paolo',
              company: 'BH drones',
              rating: 5,      
            },
          ]}
      />

      <Footer
        hasCTA
        backgroundImage="/images/cases/case5.jpg"
        backgroundColor="#e0a281c1"
        navigationItems={[
          { item: 'Início', href: '/' },
          { item: 'Serviços', href: '/servicos' },
          { item: 'Sobre mim', href: '/sobre-mim' },
          { item: 'Entre em contato', href: '/contato' },
        ]}
      />
    </>
  )
}
