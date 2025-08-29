"use client";

import { useState } from "react";
import { Modal } from "antd";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Buttonstemp";
import { Gallery } from "@/components/organisms/Gallery";
import Link from "next/link";
import styles from "./styles.module.scss";

export type ServiceKey = "social" | "foto" | "sites" | "casea" | "caseb" | "casec";

type CaseDetails = {
  challenge?: string;
  strategy?: string;
  results?: string;
};

type Content = {
  title: string;
  text?: string;
  image?: string;
  video?: string;
  details?: CaseDetails;
};

const CONTENT: Record<ServiceKey, Content> = {
  social: {
    title: "Gestão e Social Media",
    text:
      "Estratégia, planejamento de conteúdo, calendário editorial, copy, criação de criativos e análise de desempenho para crescer com constância.",
    image: "/images/cases/case4.jpg",
  },
  foto: {
    title: "Fotografia e Videomaker",
    text:
      "Ensaios, captações em evento, making of, reels e vídeos institucionais. Direção, gravação e edição voltadas ao engajamento.",
    image: "/images/cases/case7.jpg",
  },
  sites: {
    title: "Criação de WebSites",
    text:
      "Gostou da experiência? Desenvolvemos sites como este: rápidos, responsivos e orientados à conversão. Além de ampliar resultados, um site bem construído reforça a credibilidade do seu negócio — transmite confiança e profissionalismo. Do layout à publicação, cuido de todo o processo: arquitetura de informação, performance, SEO e integrações essenciais (WhatsApp, formulários e analytics), com um CMS intuitivo para atualizações. O resultado é um site leve, alinhado à sua marca e preparado para crescer.",
    image: "/images/cases/case9.jpg",
  },
  casea: {
    title: "Pousada Águas de Santa Rita",
    video: "/videos/trip.mp4",
    details: {
      challenge:
        "A pousada possuía apenas 503 seguidores e pouca visibilidade digital, dificultando atrair novos hóspedes fora do círculo de conhecidos.",
      strategy:
        "Padronização de identidade visual, calendário editorial estratégico e conteúdo humanizado, com foco em hospitalidade e experiências locais. Ações de engajamento e otimização de formatos (reels/carrosséis).",
      results:
        "Crescimento para mais de 120 mil seguidores em poucos meses, aumento de reservas e consolidação como referência de hospedagem na região.",
    },
  },
  caseb: {
    title: "LGM Sociedade de Advogados",
    video: "/videos/lawyers.mp4",
    details: {
      challenge:
        "Comunicação digital pouco estruturada e distante do público, sem estratégia clara para captação online.",
      strategy:
        "Posicionamento sólido e produção de conteúdos educativos (trabalhista, previdenciário, cível e família) com tom de voz profissional e acessível.",
      results:
        "Aumento de engajamento com potenciais clientes, clareza de marca e fortalecimento de autoridade na região.",
    },
  },
  casec: {
    title: "Clínica Dra. Ana Carvalho",
    video: "/videos/saude.mp4",
    details: {
      challenge:
        "A clínica precisava se diferenciar em um mercado altamente competitivo e transmitir segurança em temas sensíveis da cirurgia plástica.",
      strategy:
        "Criação de um conteúdo humanizado, com foco em confiança, ética e cuidado real com os pacientes. Além disso, foram produzidos posts informativos sobre procedimentos, cuidados no pré e pós-operatório e curiosidades, sempre com uma comunicação leve e profissional.",
      results:
        "A clínica ganhou relevância digital, fortaleceu a relação de confiança com seus pacientes e passou a ser vista como referência em cirurgia plástica segura e de qualidade, atraindo novos públicos de forma orgânica.",
    },
  },
};

export function Presentation({ service = "social" }: { service?: ServiceKey }) {
  const c = CONTENT[service] ?? CONTENT.social;
  const [galleryOpen, setGalleryOpen] = useState(false);
  const isFoto = service === "foto";
  const isSocial = service === "social"; // ⬅️ para exibir o hyperlink só em Gestão

  return (
    <section className={styles.presentation}>
      <div className={styles.presentation__image}>
        {c.video ? (
          <video
            className={styles.presentation__media}
            autoPlay
            loop
            muted
            playsInline
            poster={c.image || undefined}
          >
            <source src={c.video} type="video/mp4" />
          </video>
        ) : (
          <img src={c.image} alt={c.title} className={styles.presentation__media} />
        )}

        {!galleryOpen && (
          <div className={styles.presentation__card} aria-hidden={galleryOpen}>
            <Heading level="4" color="white" weight="700">
              {c.title}
            </Heading>

            {c.details ? (
              <div className={styles.presentation__rows}>
                {c.details.challenge && (
                  <p className={styles.presentation__row}>
                    <span className={styles.presentation__rowLabel}>Desafio:</span>
                    {c.details.challenge}
                  </p>
                )}
                {c.details.strategy && (
                  <p className={styles.presentation__row}>
                    <span className={styles.presentation__rowLabel}>Estratégia:</span>
                    {c.details.strategy}
                  </p>
                )}
                {c.details.results && (
                  <p className={styles.presentation__row}>
                    <span className={styles.presentation__rowLabel}>Resultados:</span>
                    {c.details.results}
                  </p>
                )}
              </div>
            ) : (
              <Text color="white">{c.text}</Text>
            )}

            {/* ⬇️ Link visível só para Gestão e Social Media */}
            {isSocial && (
              <p className={styles.presentation__ctaInline}>
                <Link href="/sobre-mim#more-projects" className={styles.presentation__inlineLink}>
                  <strong>Veja nosso trabalho em áreas diferentes!</strong>
                </Link>
              </p>
            )}

            <p className={styles.presentation__ctaInline}>
              Gostou?{" "}
              <Link href="/contato" className={styles.presentation__inlineLink}>
                Entre em contato!
              </Link>
            </p>

            {isFoto && (
              <Button
                label="Ver galeria"
                variant="secondary"
                isButton
                useButtonStyle
                className={styles.presentation__galleryButton}
                onClick={() => setGalleryOpen(true)}
                aria-expanded={galleryOpen}
                aria-controls="presentation-gallery-modal"
              />
            )}
          </div>
        )}
      </div>

      {isFoto && (
        <Modal
          centered
          open={galleryOpen}
          footer={null}
          onCancel={() => setGalleryOpen(false)}
          width="80%"
          modalRender={(node) => <div id="presentation-gallery-modal">{node}</div>}
        >
          <Gallery
            images={[
              { image: "/images/fotos/03.JPG", imageDescription: "" },
              { image: "/images/fotos/04.JPG", imageDescription: "" },
              { image: "/images/fotos/05.JPG", imageDescription: "" },
              { image: "/images/fotos/02.png", imageDescription: "" },
            ]}
            hasImages
          />
        </Modal>
      )}
    </section>
  );
}

export default Presentation;
