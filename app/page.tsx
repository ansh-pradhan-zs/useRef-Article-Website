import Image from "next/image";
import styles from "./page.module.css";
import Article from "@/components/Article/page";

export default function Home() {
  return (
    <main className={styles["boss-container"]}>
      <Article />
    </main>
  );
}
