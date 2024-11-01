import Image from "next/image";
import styles from "./page.module.css";

import { imagens } from "./assets/slide";
import Carousel from "./assets/slide";
import Articles from "./articles/articles";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Carousel />
        <Articles />
      </main>
    </div>
  );
}
