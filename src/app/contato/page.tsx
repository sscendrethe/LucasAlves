import type { Metadata } from 'next'
import { Header } from '@/components/organisms/Header'
import { Form } from '@/components/organisms/Form'
import { Footer } from '@/components/organisms/Footer'

export default function Home() {
  return (
    <>
      <Header
        navigationItems={[
          { item: 'Início', href: '/' },
          { item: 'Serviços', href: '/servicos' },
          { item: 'Sobre mim', href: '/sobre-mim' },
        ]}
      />
    <Form
        title="Fale com a gente!"
        subtext="Nós valorizamos o seu contato"
        text="Entre em contato conosco por telefone, e-mail, chat ou visite nosso escritório durante o horário comercial."
        email="contato@empresa.com"
        phone="+55 31 97777-7777"
        leftVideo="/videos/meet.mp4"
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
