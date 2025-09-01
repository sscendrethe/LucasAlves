import type { ReactNode } from "react";
import styles from "./layout.module.scss";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-mont", 
  display: "swap",
});

export default function Layout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <div className={`${styles.container} ${montserrat.variable}`}>
      {children}
      {modal}
    </div>
  );
}

