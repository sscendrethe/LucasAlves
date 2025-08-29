import { Header } from '@/components/organisms/Header'
import { Hero } from '@/components/organisms/Hero'
import { Article } from '@/components/organisms/Article'
import { ArticleFeedbacks } from '@/components/organisms/ArticleFeedbacks'
import { Footer } from '@/components/organisms/Footer'
import styles from './homepage.module.scss'

export default function Home() {
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

      <main className={styles.homepage}>
        <Hero
          video="videos/graphics.mp4"
          title="Seu título aqui"
          text="Aqui, a gente mistura criatividade, estratégia e tecnologia pra transformar marcas em experiências memoráveis. Nosso foco? Te ajudar a se destacar de verdade no meio do barulho das redes."
          firstButtonLabel="Sobre mim"
          secondButtonLabel="Entre em contato"
        />

        <Article
          video="videos/meeting.mp4"
          text="A EULUKASALVES é uma empresa de marketing e publicidade em BH que combina criatividade, estratégia e tecnologia para destacar marcas por meio de branding e social media, com soluções personalizadas e foco em resultados reais."
          firstButtonLabel="Sobre mim"
          firstButtonHref= '/sobre-mim'
          secondButtonLabel= 'Entre em contato'
          secondButtonHref= '/contato'
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
      </main>

      <Footer
        hasCTA
        backgroundImage= '/images/cases/case5.jpg'
        backgroundColor= '#e0a281c1'
        navigationItems= {[
          { item: 'Início', href: '/' },
          { item: 'Serviços', href: '/servicos' },
          { item: 'Sobre mim', href: '/sobre-mim' },
          { item: 'Entre em contato', href: '/contato' },
        ]}
     />
    </>
  )
}
