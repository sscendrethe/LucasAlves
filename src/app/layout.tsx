import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { FloatingWhatsApp } from '@/components/molecules/FloatingWhatsApp' 

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'EuLukasAlves',
  description: 'Venha conhecer os nossos serviços!',
  icons: {
    icon: '/app/icon.png', 
  },
  openGraph: {
    title: 'Agencia EuLukasAlves',
    description: 'Venha conhecer os nossos serviços!',
    images: 'images/logo/logo.png',
    url: 'https://eulukasalves.vercel.app/', //oração completa pra funcionar esse caraio
    siteName: 'EuLukasAlves',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}

        {/* Botão flutuante do WhatsApp — ajusta o número/mensagem conforme necessário */}
        <FloatingWhatsApp
          phone="5531992771911"
          message="Olá! Vi o seu site e gostaria de impulsionar meu negócio!"
          showLabel={false}          
        />
      </body>
    </html>
  )
}

