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
        text="Mais de 50 marcas já confiaram na EULUKASALVES para fortalecer sua presença e identidade. Atuamos com estratégia, criatividade e um olhar personalizado para cada projeto. Seja criando do zero ou renovando a comunicação, entregamos com propósito e aquele toque especial de quem ama o que faz. E tal tal tal tal tal tal tal tal tal tal tal tal tal tal tal tal tal tal tal tal tal tal."
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
            description: 'Excelente serviço, super recomendo!',
            backgroundColor: 'white',
            iconColor: 'orange',
            author: 'João Silva',
            company: 'Empresa XYZ',
            rating: 5,
          },
          {
            link: '#',
            description: 'Excelente serviço, super recomendo!',
            backgroundColor: 'white',
            iconColor: 'orange',
            author: 'João Silva',
            company: 'Empresa XYZ',
            rating: 5,
          },
          {
            link: '#',
            description: 'Excelente serviço, super recomendo!',
            backgroundColor: 'white',
            iconColor: 'orange',
            author: 'João Silva',
            company: 'Empresa XYZ',
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
