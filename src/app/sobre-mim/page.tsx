import { Header } from '@/components/organisms/Header'
import { Article } from '@/components/organisms/Article'
import { MoreProjects } from '@/components/organisms/Cases'
import { Footer } from '@/components/organisms/Footer'

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

      <Article
        video="/videos/meeting.mp4" // coloque o arquivo em /public/videos/meeting.mp4
        text="A EULUKASALVES é uma empresa de marketing e publicidade em BH que combina criatividade, estratégia e tecnologia para destacar marcas por meio de branding e social media, com soluções personalizadas e foco em resultados reais."
        firstButtonLabel="Sobre mim"
        secondButtonLabel="Entre em contato"
      />

      <MoreProjects
        title="Resultados de quem sabe do assunto"
        text="Gestão é o que transforma intenção em resultado, o negócio evolui ganhando visibilidade com público conectado, crescimento real e métricas. Veja abaixo três cases de empresas de mercados diferentes que investiram em inovação — e cresceram de verdade."
        projectItems={[ 
          { projectName: 'Turismo', text:'120k seguidores e reservas em alta', link: '/servicos/presentation/casea', image: '/images/cases/case1.jpg' },
          { projectName: 'Direito', text:'Mais engajamento e autoridade local', link: '/servicos/presentation/caseb', image: '/images/cases/case3.png' },
          { projectName: 'Saúde', text:'Marketing que gera valor e novos pacientes', link: '/servicos/presentation/casec', image: '/images/cases/case8.jpg'},
        ]}
      />
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
