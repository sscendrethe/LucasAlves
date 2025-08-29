"use client";

import { usePathname } from "next/navigation";
import { Text } from "@/components/atoms/Text";
import { Heading } from "@/components/atoms/Heading";
import { CardServicesWrapper } from "@/components/organisms/CardServicesWrapper";
import type { CardProps } from "@/components/molecules/CardServices";
import styles from "./styles.module.scss";

export interface ArticleServicesProps {
  title?: string;
  text?: string;
  cardData: CardProps[];

  video?: {
    src: string;           
    poster?: string;       
    overlay?: string;      
  };
}

export const ArticleServices = ({ title, text, cardData, video }: ArticleServicesProps) => {
  const pathname = usePathname();
  const contactLink = "/contato";

  return (
    <section className={styles.article} aria-labelledby="article-title">
      {video?.src && (
        <div className={styles.bgVideo} aria-hidden="true">
          <video
            className={styles.bgVideo__media}
            autoPlay
            muted
            loop
            playsInline
            poster={video.poster}
            preload="metadata"
          >
            <source src={video.src} type="video/mp4" />
          </video>
          {video.overlay && (
            <div
              className={styles.bgVideo__overlay}
              style={{ background: video.overlay }}
            />
          )}
        </div>
      )}

      <div className={styles.article__contentWrapper}>
        <div className={styles.article__heading}>
          <Heading align="left" weight="900" id="article-title">
            {title ? (
              title
            ) : (
              <>
                <span className={styles.orange}>Nossos&nbsp;</span>
                <span className={styles.vividorange}>serviços</span>
              </>
            )}
          </Heading>

          <Text className={styles.article__text} align="left" color="gray" weight="400">
            {text || ""}
          </Text>

          <div className={styles.article__cardsWrapper}>
            <CardServicesWrapper cardData={cardData || []} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleServices;
