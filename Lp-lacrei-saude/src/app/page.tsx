import Image from "next/image";
import styles from "./page.module.css";

import { imagens } from "./components/slider/slide";
import Carousel from "./components/slider/slide";
import Articles from "./components/articles/articles";

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
