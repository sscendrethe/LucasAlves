import { CardServices, CardProps } from "@/components/molecules/CardServices";
import styles from "./styles.module.scss";

export interface CardServicesWrapperProps {
  cardData: CardProps[];
}

export const CardServicesWrapper = ({ cardData }: CardServicesWrapperProps) => {
  return (
    <section className={styles.cards}>
      {cardData.map((card) => (
        <CardServices key={card.title} {...card} />
      ))}
    </section>
  );
};

export default CardServicesWrapper;
